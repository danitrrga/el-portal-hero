"use client"
import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const AsymptoticAnimation = () => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
        extrapolateRight: 'clamp',
    });

    const pathLength = 300;
    const strokeDashoffset = pathLength - progress * pathLength;

    return (
        <div style={{ flex: 1, backgroundColor: 'transparent', width: '100%', height: '100%', position: 'relative' }}>
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                {/* Grid lines */}
                <line x1="10" y1="90" x2="90" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <line x1="10" y1="10" x2="10" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />

                {/* Asymptote */}
                <line x1="10" y1="30" x2="90" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" strokeDasharray="2,2" />

                {/* Curve */}
                <path
                    d="M 10 90 Q 30 90, 40 50 T 90 32"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeDasharray={pathLength}
                    strokeDashoffset={strokeDashoffset}
                />
            </svg>
        </div>
    );
};
