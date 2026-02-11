'use client';

import PixelBlast from '../../components/PixelBlast';

export default function PixelBlastBackground() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <PixelBlast
        variant="square"
        pixelSize={3}
        color="#d8f1fd"
        patternScale={2}
        patternDensity={1}
        enableRipple
        rippleSpeed={0.3}
        rippleThickness={0.1}
        rippleIntensityScale={1}
        speed={0.5}
        transparent
        edgeFade={0.5}
      />
    </div>
  );
}
