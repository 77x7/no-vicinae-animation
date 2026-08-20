"use strict";

function isVicinae(window) {
    return String(window.windowClass || "")
        .toLowerCase()
        .includes("vicinae");
}

effects.windowAdded.connect(function(window) {
    if (isVicinae(window)) {
        effect.grab(window, Effect.WindowAddedGrabRole, true);
    }
});

effects.windowClosed.connect(function(window) {
    if (isVicinae(window)) {
        effect.grab(window, Effect.WindowClosedGrabRole, true);
    }
});
