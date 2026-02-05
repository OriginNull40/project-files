window.WebRcadePlayer = class {
    constructor(id) {
        this.instanceId = id;
    }

    async loadFeed(feedUrl) {
        const root = document.getElementById(this.instanceId);
        
        // We use a relative path. This tells the browser: 
        // "Stay in the current folder, just go into the 'player' directory."
        // This avoids using any 'webrcade.github.io' links that Blocksi hates.
        const playerFrame = document.createElement('iframe');
        
        // This is the relative path to your new file
        playerFrame.src = "./player/index.html?feed=" + encodeURIComponent(feedUrl);
        
        playerFrame.style.width = "100%";
        playerFrame.style.height = "100vh";
        playerFrame.style.border = "none";
        
        root.innerHTML = ""; 
        root.appendChild(playerFrame);
        console.log("Iframe redirected to local player room.");
    }
};
