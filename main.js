import * as ex from "excalibur";

SCALE: 2;
const game = new ex.Engine
(
    {
        width: 256 * SCALE,
        height: 240 * SCALE,
        fixedUpdateFps: 60,
        antialiasing: true
    }
);

