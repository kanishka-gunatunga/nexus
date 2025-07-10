"use client";

import Image from "next/image";
import React, {useEffect, useRef} from "react";
import {motion, useAnimation} from "framer-motion";
import {PropsWithChildren} from "react";

interface TestimonialProps {
    quote: string;
    name: string;
    title: string;
    avatar: string;
}

interface TranslateWrapperProps extends PropsWithChildren {
    duration?: number;
}

const TestimonialCard = ({testimonial}: { testimonial: TestimonialProps }) => (
    <motion.div
        className="bg-[#EAEAEA] justify-center px-6 py-1 rounded-[20px] shadow-sm flex flex-col items-center text-center w-[280px] sm:w-[320px] h-[200px] shrink-0 mx-2 sm:mx-4"
        whileHover={{scale: 1.02, transition: {duration: 0.2}}}
    >
        <p className="text-[#676767] text-left max-w-4xl text-sm mb-4 sm:mb-6 leading-relaxed">
            {testimonial.quote}
        </p>
        <div className="justify-between w-full items-center gap-8 flex flex-row">
            <div className="text-left">
                <p className="text-[#302C2C] font-semibold text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-[#676767] font-medium text-xs">{testimonial.title}</p>
            </div>
            <Image
                src={testimonial.avatar}
                alt={`Avatar of ${testimonial.name}`}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full mb-2 sm:mb-3"
            />
        </div>
    </motion.div>
);

const TranslateWrapper = ({children, duration = 30}: TranslateWrapperProps) => {
    const controls = useAnimation();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scrollWidth = container.scrollWidth / 2;

        const animate = async () => {
            await controls.start({
                x: -scrollWidth,
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: duration,
                        ease: "linear",
                    },
                },
            });
        };

        animate();

        return () => controls.stop();
    }, [controls, duration]);

    return (
        <div className="overflow-hidden w-full">
            <motion.div
                ref={containerRef}
                animate={controls}
                className="flex gap-4"
                style={{width: "fit-content"}}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
};

const Testimonial = () => {
    const testimonials: TestimonialProps[] = [
        {
            quote: "Lorem ipsum dolor sit amet consectetur. Ut pulvinar ullamcorper enim vulputate.",
            name: "Sophia L.",
            title: "Creative Director",
            avatar: "/avatar-placeholder.png",
        },
        {
            quote: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
            name: "James M.",
            title: "Product Manager",
            avatar: "/avatar-placeholder.png",
        },
        {
            quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            name: "Emma R.",
            title: "UX Designer",
            avatar: "/avatar-placeholder.png",
        },
        {
            quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
            name: "Liam T.",
            title: "Developer",
            avatar: "/avatar-placeholder.png",
        },
    ];

    return (
        <section className="py-1 sm:py-2 bg-[#F6F6F6]">
            <div className="w-full mx-auto">
                {/*<h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-[#0B0C0E]">*/}
                {/*    What Our Clients Say*/}
                {/*</h2>*/}
                <TranslateWrapper duration={25}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial}/>
                    ))}
                </TranslateWrapper>
            </div>
        </section>
    );
};

export default Testimonial;