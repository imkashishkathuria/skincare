"use client"
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AnimatedText = ({ text }) => {

    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });
    const words = text.split(" ");

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };

    return (
        <p ref={ref} className="mb-10 text-[#2D3B36] px-5 text-[16px] lg:text-[20px] leading-[1.6] w-full md:w-[80%] lg:max-w-[345px] md:text-right">
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    custom={i}
                    initial="hidden"    
                    animate={controls}
                    variants={wordVariants}
                    className='mr-2 inline-block'>
                    {word}
                </motion.span>
            ))}
        </p>
    )
}

export default AnimatedText
