'use client';

import Dither from '../../components/Dither';

export default function DitherBackground() {
  return (
    <div style={{ width: '100%', height: '200vh', position: 'absolute', top: 0, left: 0, opacity: 0.7 }}>
      <Dither
        color={[0.5, 0.5, 0.5]}
        disableAnimation={false}
        enableMouseInteraction
        mouseRadius={0.3}
        colorNum={4}
        pixelSize={2}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black"></div>
    </div>
  );
}
