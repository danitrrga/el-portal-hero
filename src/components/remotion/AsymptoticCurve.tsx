"use client";

import { useCurrentFrame, interpolate, spring } from "remotion";

export const AsymptoticCurve = () => {
    const frame = useCurrentFrame();

    // Subtle background grid movement
    const gridY = interpolate(frame % 150, [0, 150], [0, 40]);

    // Asymptotic curve math (approaching y = 50 from below)
    // The curve moves closer to limit but never quite hits it fully
    const progress = spring({
        fps: 30,
        frame,
        config: {
            damping: 200,
            stiffness: 20,
            mass: 2
        },
        durationInFrames: 300,
    });

    const curveY = interpolate(progress, [0, 1], [250, 70]);

    return (
        <div className="absolute inset-0 bg-slate-950 flex flex-col justify-end overflow-hidden">
            {/* Moving Grid Background */}
            <div
                className="absolute inset-x-0 -top-20 bottom-0 opacity-10 bg-[linear-gradient(to_right,#256af4_1px,transparent_1px),linear-gradient(to_bottom,#256af4_1px,transparent_1px)] bg-[size:40px_40px]"
                style={{ transform: `translateY(${gridY}px)` }}
            />

            {/* The Limit Line (Asymptote) */}
            <div className="absolute left-0 w-full h-[1px] bg-red-500/50 border-b border-red-500/20 top-[70px] flex items-center">
                <span className="text-[10px] ml-4 text-red-500/80 font-mono tracking-widest mt-4">LIMIT: y=k</span>
            </div>

            {/* The Approaching Curve */}
            <svg className="absolute inset-0 w-full h-full preserve-3d">
                <path
                    d={`M 0 300 Q ${300} ${curveY + 100} 800 ${curveY}`}
                    fill="none"
                    stroke="rgba(37,106,244,0.8)"
                    strokeWidth="3"
                    className="drop-shadow-[0_0_8px_rgba(37,106,244,0.6)]"
                />

                {/* Glow around the peak */}
                <circle
                    cx={750}
                    cy={curveY + 2}
                    r={6}
                    fill="#256af4"
                    className="drop-shadow-[0_0_12px_rgba(37,106,244,1)] animate-pulse"
                />
            </svg>

            {/* Data visual bars reflecting approaching limit */}
            <div className="w-full h-32 flex flex-row items-end gap-1 px-4 z-10 opacity-70">
                {Array.from({ length: 24 }).map((_, i) => {
                    const barTarget = 100 - (100 / (i * 0.5 + 1));
                    const currentHeight = interpolate(progress, [0, 1], [0, barTarget]);
                    return (
                        <div
                            key={i}
                            className="w-full bg-blue-700/40 rounded-t-sm"
                            style={{ height: `${currentHeight}%` }}
                        />
                    );
                })}
            </div>
        </div>
    );
};
