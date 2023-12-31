import { instantiate } from './wasmapp.uninstantiated.mjs';

await wasmSetup;

let te = null;
try {
    await instantiate({ skia: Module['asm'] });
} catch (e) {
  te = e;
}

if (te == null) {
    document.getElementById("loading").style.display="none";
} else {
    throw te;
}
