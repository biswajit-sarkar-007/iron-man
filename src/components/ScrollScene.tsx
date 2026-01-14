'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

const TOTAL_FRAMES = 40;

const ScrollScene = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

    useEffect(() => {
        const preloadImages = async () => {
            const imagePromises = [];
            for (let i = 1; i <= TOTAL_FRAMES; i++) {
                const img = new Image();
                const frameNumber = i.toString().padStart(3, '0');
                img.src = `/images/ezgif-frame-${frameNumber}.jpg`;
                const promise = new Promise((resolve) => {
                    img.onload = () => resolve(img);
                    img.onerror = () => resolve(null);
                });
                imagePromises.push(promise);
            }
            const loadedImages = await Promise.all(imagePromises);
            setImages(loadedImages.filter(img => img !== null) as HTMLImageElement[]);
            setIsLoaded(true);
        };

        preloadImages();
    }, []);

    useEffect(() => {
        if (!isLoaded || images.length === 0 || !canvasRef.current) return;

        const render = () => {
            const currentFrame = Math.floor(frameIndex.get());
            const image = images[currentFrame];
            if (!image) return;

            const canvas = canvasRef.current!;
            const context = canvas.getContext('2d');
            if (!context) return;

            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const imageWidth = image.naturalWidth;
            const imageHeight = image.naturalHeight;

            const ratio = Math.max(canvasWidth / imageWidth, canvasHeight / imageHeight);
            const newWidth = imageWidth * ratio;
            const newHeight = imageHeight * ratio;
            const x = (canvasWidth - newWidth) / 2;
            const y = (canvasHeight - newHeight) / 2;

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(image, x, y, newWidth, newHeight);
        };

        const unsub = frameIndex.on("change", () => {
            requestAnimationFrame(render);
        });

        const handleResize = () => {
            if (!canvasRef.current) return;
            canvasRef.current.width = window.innerWidth * window.devicePixelRatio;
            canvasRef.current.height = window.innerHeight * window.devicePixelRatio;
            render();
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            unsub();
            window.removeEventListener('resize', handleResize);
        };
    }, [isLoaded, images, frameIndex]);

    return (
        <div ref={containerRef} className="relative h-[400vh] w-full bg-[#050505]">
            <div className="sticky top-0 left-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center z-50 bg-[#050505]">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 border-2 border-arc-blue/20 border-t-arc-blue rounded-full animate-spin mb-4"></div>
                            <p className="text-arc-blue/60 text-[10px] uppercase tracking-[.3em]">Calibrating Armor Systems</p>
                        </div>
                    </div>
                )}
                
                <canvas 
                    ref={canvasRef}
                    className="w-full h-full object-cover"
                />

                {/* Overlays */}
                <div className="absolute inset-0 pointer-events-none z-10">
                    <TextSection 
                        progress={scrollYProgress} 
                        range={[0, 0.08, 0.15]} 
                        className="flex flex-col items-center justify-center text-center px-6"
                    >
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-white/90">
                            IRON MAN <span className="text-arc-blue">EXOSUIT</span>
                        </h1>
                        <p className="text-sm md:text-base tracking-[.4em] uppercase text-white/50">
                            Engineered for the impossible.
                        </p>
                    </TextSection>

                    <TextSection 
                        progress={scrollYProgress} 
                        range={[0.2, 0.3, 0.4]} 
                        className="flex flex-col justify-center h-full max-w-2xl px-12 md:px-24"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white/90 leading-tight">
                            Precision-engineered <br/>armor
                        </h2>
                        <p className="text-lg text-white/60 leading-relaxed max-w-md">
                            Layered nano-alloy plating designed for impact resistance, mobility, and heat dissipation.
                        </p>
                    </TextSection>

                    <TextSection 
                        progress={scrollYProgress} 
                        range={[0.45, 0.55, 0.65]} 
                        className="flex flex-col justify-center items-end h-full w-full px-12 md:px-24 text-right"
                    >
                        <div className="max-w-md">
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white/90 leading-tight">
                                Powered from <br/>the core
                            </h2>
                            <ul className="space-y-6 text-base tracking-widest text-white/60">
                                <li className="flex items-center justify-end space-x-4">
                                    <span>High-density energy reactor</span>
                                    <div className="w-2 h-2 rounded-full bg-arc-blue shadow-[0_0_10px_rgba(0,214,255,0.8)]"></div>
                                </li>
                                <li className="flex items-center justify-end space-x-4">
                                    <span>Distributed power routing</span>
                                    <div className="w-2 h-2 rounded-full bg-arc-blue"></div>
                                </li>
                                <li className="flex items-center justify-end space-x-4">
                                    <span>Real-time system stabilization</span>
                                    <div className="w-2 h-2 rounded-full bg-arc-blue"></div>
                                </li>
                            </ul>
                        </div>
                    </TextSection>

                    <TextSection 
                        progress={scrollYProgress} 
                        range={[0.7, 0.77, 0.85]} 
                        className="flex flex-col justify-center h-full max-w-3xl px-12 md:px-24"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white/90 leading-tight">
                            Every component. <br/>Purpose-built.
                        </h2>
                        <p className="text-lg text-white/60 leading-relaxed max-w-md">
                            From micro-actuators to structural frame, every element exists to serve strength, speed, and survival.
                        </p>
                    </TextSection>

                    <TextSection 
                        progress={scrollYProgress} 
                        range={[0.9, 0.95, 1]} 
                        className="flex flex-col items-center justify-center text-center px-6"
                    >
                        <h2 className="text-4xl md:text-7xl font-bold mb-10 text-white/90 leading-tight">
                            Designed to protect. <br/>Built to endure.
                        </h2>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pointer-events-auto">
                            <button className="px-10 py-5 bg-white text-black text-[10px] font-bold uppercase tracking-[.2em] rounded-sm hover:bg-arc-blue hover:text-white transition-all duration-300">
                                Explore Full Specifications
                            </button>
                            <button className="px-10 py-5 border border-white/20 text-[10px] font-bold uppercase tracking-[.2em] rounded-sm hover:bg-white/5 transition-all duration-300">
                                View Engineering Breakdown
                            </button>
                        </div>
                    </TextSection>
                </div>
            </div>
        </div>
    );
};

const TextSection = ({ children, progress, range, className }: { children: React.ReactNode, progress: MotionValue<number>, range: [number, number, number], className?: string }) => {
    const opacity = useTransform(progress, range, [0, 1, 0]);
    const y = useTransform(progress, range, [40, 0, -40]);

    return (
        <motion.div style={{ opacity, y }} className={`absolute inset-0 ${className}`}>
            {children}
        </motion.div>
    );
};

export default ScrollScene;
