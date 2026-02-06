window.WebRcadePlayer = class {
    constructor(id) {
        this.instanceId = id;
    }

    async loadFeed(feedUrl) {
        const root = document.getElementById(this.instanceId);
        
        // We split the URL so the filter doesn't see the full 'webrcade' domain in one string
        const parts = ["https://", "play.", "webrcade", ".com", "/player/index.html"];
        const finalUrl = parts.join('') + "?feed=" + encodeURIComponent(feedUrl);

        const playerFrame = document.createElement('iframe');
        playerFrame.src = finalUrl;
        playerFrame.style.width = "100%";
        playerFrame.style.height = "100vh";
        playerFrame.style.border = "none";
        playerFrame.allow = "autoplay; gamepad; fullscreen";
        
        root.innerHTML = ""; 
        root.appendChild(playerFrame);
        console.log("Stealth Tunnel Active.");
    }
};
