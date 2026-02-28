"use client";

import { useCurrentFrame, interpolate } from "remotion";

export const CyclicalRings = () => {
    const frame = useCurrentFrame();

    // Constant rotation over 150 frames (30fps = 5 seconds)
    const rotationBase = interpolate(frame % 300, [0, 300], [0, 360]);
    const reverseRotationBase = interpolate(frame % 150, [0, 150], [360, 0]);

    // Oscillating scale
    const scaleOscillation = 1 + Math.sin(frame * 0.05) * 0.05;

    return (
        <div className="absolute inset-0 bg-slate-950 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/10 to-transparent mix-blend-screen" />

            <div
                className="relative size-48 flex items-center justify-center"
                style={{ transform: `scale(${scaleOscillation})` }}
            >
                {/* Outer Ring */}
                <div
                    className="absolute size-48 border border-slate-800 rounded-full flex items-center justify-center"
                    style={{ transform: `rotate(${rotationBase}deg)` }}
                >
                    <div className="w-2 h-2 rounded-full bg-slate-600 absolute -top-1 shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                </div>

                {/* Middle Ring */}
                <div
                    className="absolute size-36 border border-blue-700/30 rounded-full flex items-center justify-center"
                    style={{ transform: `rotate(${reverseRotationBase}deg)` }}
                >
                    <div className="w-2 h-2 rounded-full bg-blue-500 absolute -bottom-1 shadow-[0_0_15px_rgba(37,106,244,0.6)]" />
                </div>

                {/* Inner Ring */}
                <div
                    className="absolute size-24 border border-blue-700/60 rounded-full flex items-center justify-center"
                    style={{ transform: `rotate(${rotationBase * 1.5}deg)` }}
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 absolute -right-0.5 top-1/2 shadow-[0_0_12px_rgba(37,106,244,0.8)]" />
                </div>

                {/* Core */}
                <div className="absolute size-12 bg-blue-700/20 border border-blue-500/50 rounded-full shadow-[0_0_25px_rgba(37,106,244,0.4)] flex items-center justify-center">
                    <div
                        className="w-full h-[1px] bg-blue-400/50"
                        style={{ transform: `rotate(${frame * 2}deg)` }}
                    />
                </div>
            </div>

            {/* Mathematical annotations */}
            <div className="absolute top-4 right-4 text-right opacity-40">
                <div className="text-[10px] font-mono text-slate-400">ω = 2πf</div>
                <div className="text-[10px] font-mono text-blue-400">φ(t) = φ0 + ωt</div>
            </div>
        </div>
    );
};
