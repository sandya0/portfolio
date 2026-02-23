import { useEffect, useRef } from "react"
import { Icon } from "@iconify/react/dist/iconify.js";
import gsap from "gsap";
import { Observer } from "gsap/all";
gsap.registerPlugin(Observer);

const Marquee = ({ items, className = "text-white bg-black",
    icon = "mdi:star-four-points",
    iconClassName = "",
    reverse = false,
}) => {
    const containerRef = useRef(null);
    const itemsRef = useRef([]);
    const tlRef = useRef(null);
    const observerRef = useRef(null);
    const resizeObserverRef = useRef(null);
    const initializedRef = useRef(false);

    function horizontalLoop(items, config) {
        items = gsap.utils.toArray(items);
        config = config || {};
        let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100) }),
            length = items.length,
            startX = items[0].offsetLeft,
            times = [],
            widths = [],
            xPercents = [],
            curIndex = 0,
            pixelsPerSecond = (config.speed || 1) * 100,
            snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1),
            totalWidth, curX, distanceToStart, distanceToLoop, item, i;
        gsap.set(items, {
            xPercent: (i, el) => {
                let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
                xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
                return xPercents[i];
            }
        });
        gsap.set(items, { x: 0 });
        totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
        for (i = 0; i < length; i++) {
            item = items[i];
            curX = xPercents[i] / 100 * widths[i];
            distanceToStart = item.offsetLeft + curX - startX;
            distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
            tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
                .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
                .add("label" + i, distanceToStart / pixelsPerSecond);
            times[i] = distanceToStart / pixelsPerSecond;
        }
        function toIndex(index, vars) {
            vars = vars || {};
            (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length);
            let newIndex = gsap.utils.wrap(0, length, index),
                time = times[newIndex];
            if (time > tl.time() !== index > curIndex) {
                vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
                time += tl.duration() * (index > curIndex ? 1 : -1);
            }
            curIndex = newIndex;
            vars.overwrite = true;
            return tl.tweenTo(time, vars);
        }
        tl.next = vars => toIndex(curIndex + 1, vars);
        tl.previous = vars => toIndex(curIndex - 1, vars);
        tl.current = () => curIndex;
        tl.toIndex = (index, vars) => toIndex(index, vars);
        tl.times = times;
        tl.progress(1, true).progress(0, true);
        if (config.reversed) {
            tl.vars.onReverseComplete();
            tl.reverse();
        }
        return tl;
    }

    const cleanup = () => {
        tlRef.current?.kill();
        observerRef.current?.kill();
        resizeObserverRef.current?.disconnect();
        tlRef.current = null;
        observerRef.current = null;
        initializedRef.current = false;
    };

    const initLoop = () => {
        const els = itemsRef.current.filter(Boolean);

        // All elements must exist and have real painted widths
        if (!els.length || els.length !== items.length) return false;
        if (els.some(el => el.offsetWidth === 0 || el.offsetLeft === 0 && els.indexOf(el) !== 0)) return false;

        // Prevent re-initializing if already running
        if (initializedRef.current) return true;
        initializedRef.current = true;

        tlRef.current?.kill();
        observerRef.current?.kill();

        tlRef.current = horizontalLoop(els, {
            repeat: -1,
            paddingRight: 30,
            reversed: reverse,
        });

        observerRef.current = Observer.create({
            onChangeY(self) {
                let factor = 2.5;
                if ((!reverse && self.deltaY < 0) || (reverse && self.deltaY > 0)) {
                    factor *= -1;
                }
                gsap.timeline({ defaults: { ease: "none" } })
                    .to(tlRef.current, { timeScale: factor * 2.5, duration: 0.2, overwrite: true })
                    .to(tlRef.current, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
            }
        });

        return true;
    };

    useEffect(() => {
        cleanup();

        const els = itemsRef.current.filter(Boolean);
        if (!els.length) return;

        // Try immediately first
        if (initLoop()) return cleanup;

        // Watch the container — fires when it gets real dimensions after font/icon load
        resizeObserverRef.current = new ResizeObserver(() => {
            if (initLoop()) {
                // Once initialized, stop watching
                resizeObserverRef.current?.disconnect();
            }
        });

        resizeObserverRef.current.observe(containerRef.current);

        // Also watch each item individually since icon load can change their widths
        els.forEach(el => resizeObserverRef.current.observe(el));

        return cleanup;
    }, [items, reverse]);

    return (
        <div
            ref={containerRef}
            className={`overflow-hidden w-full h-20 md:h-[100px]
        flex place-items-center marquee-text-responsive font-light
        uppercase whitespace-nowrap ${className}`}>
            <div className="flex">
                {items.map((text, index) => (
                    <span
                        ref={(el) => (itemsRef.current[index] = el)}
                        key={index}
                        className="flex items-center px-16 gap-x-32">
                        {text} <Icon icon={icon} className={iconClassName} />
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Marquee;