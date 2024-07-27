import { NeatConfig, NeatGradient } from "@firecms/neat";

// Configuration du gradient
export const config: NeatConfig = {
    "colors": [
        {
            "color": "#FAA0A0",
            "enabled": true
        },
        {
            "color": "#FAF287",
            "enabled": true
        },
        {
            "color": "#FAE4D4",
            "enabled": true
        },
        {
            "color": "#72ECFA",
            "enabled": true
        },
        {
            "color": "#72FA7C",
            "enabled": false
        }
    ],
    "speed": 4,
    "horizontalPressure": 4,
    "verticalPressure": 5,
    "waveFrequencyX": 4,
    "waveFrequencyY": 3,
    "waveAmplitude": 6,
    "shadows": 0,
    "highlights": 3,
    "colorBrightness": 0.9,
    "colorSaturation": 5,
    "wireframe": false,
    "colorBlending": 5,
    "backgroundColor": "#003FFF",
    "backgroundAlpha": 1,
    "resolution": 0.65
};

// define an element with id="gradient" in your html
new NeatGradient({
    ref: document.getElementById("gradient") as HTMLCanvasElement,
    ...config
});
new NeatGradient({
    ref: document.getElementById("gradient-english") as HTMLCanvasElement,
    ...config
});

// you can change the config at any time


// you can also destroy the gradient for cleanup
// e.g. returning from a useEffect hook in React
