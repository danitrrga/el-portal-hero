"use client"
import React from 'react';
import { Player } from '@remotion/player';
import { AsymptoticAnimation } from './AsymptoticAnimation';
import { CyclesAnimation } from './CyclesAnimation';

export const AsymptoticPlayer = () => {
    return (
        <Player
            component={AsymptoticAnimation}
            durationInFrames={120}
            compositionWidth={400}
            compositionHeight={225}
            fps={30}
            style={{ width: '100%', height: '100%' }}
            autoPlay
            loop
        />
    );
};

export const CyclesPlayer = () => {
    return (
        <Player
            component={CyclesAnimation}
            durationInFrames={120}
            compositionWidth={400}
            compositionHeight={225}
            fps={30}
            style={{ width: '100%', height: '100%' }}
            autoPlay
            loop
        />
    );
};
