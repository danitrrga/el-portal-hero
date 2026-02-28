"use client"
import React from 'react';
import { useCurrentFrame } from 'remotion';

export const CyclesAnimation = () => {
    const frame = useCurrentFrame();
    const rotation1 = (frame * 2) % 360;
    const rotation2 = (frame * -1.5) % 360;
    const rotation3 = (frame * 1) % 360;

    return (
        <div style={{ flex: 1, backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '120px', height: '120px' }}>
                <div style={{
                    position: 'absolute', inset: 0, borderRadius: '50%',
                    border: '1px solid rgba(59,130,246,0.2)',
                    borderTopColor: '#3B82F6',
                    transform: `rotate(${rotation1}deg)`
                }} />
                <div style={{
                    position: 'absolute', inset: '15px', borderRadius: '50%',
                    border: '1px solid rgba(16,185,129,0.2)',
                    borderBottomColor: '#10b981',
                    transform: `rotate(${rotation2}deg)`
                }} />
                <div style={{
                    position: 'absolute', inset: '30px', borderRadius: '50%',
                    border: '1px dashed rgba(255,255,255,0.2)',
                    transform: `rotate(${rotation3}deg)`
                }} />
            </div>
        </div>
    );
};
