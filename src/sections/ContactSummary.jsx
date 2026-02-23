import React, { useRef, useState } from 'react'
import Marquee from '../components/Marquee'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ContactSummary = () => {
    const containerRef = useRef(null);
    const [marqueeReady, setMarqueeReady] = useState(false);

    const items = ["Innovation", "Precision", "Trust", "Collaboration", "Excellence"]
    const items2 = ["contact us", "contact us", "contact us", "contact us"]

    useGSAP(() => {
        gsap.to(containerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "center center",
                end: "+=800 center",
                pin: true,
                pinSpacing: true,
                onRefresh() {
                    // ScrollTrigger has finished measuring + pinning,
                    // now it's safe to init the marquees
                    setMarqueeReady(true);
                }
            }
        })
    })

    return (
        <section
            ref={containerRef}
            className="flex flex-col items-center justify-between
            min-h-screen gap-12 mt-16">
            <Marquee items={items} ready={marqueeReady} />
            <div className="overflow-hidden font-light text-center
            contact-text-responsive">
                <p>" Let's build a <br />
                    <span className="font-normal">memorable</span> & {" "}
                    <span className="italic">inspiring</span> <br />
                    web application <span className="text-gold">together</span> "
                </p>
            </div>
            <Marquee
                items={items2}
                reverse={true}
                className="text-black bg-transparent border-y-2"
                iconClassName='stroke-gold stroke-2 text-primary'
                icon="material-symbols-light:square"
                ready={marqueeReady}
            />
        </section>
    )
}

export default ContactSummary