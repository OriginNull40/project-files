window.WebRcadePlayer = class {
    constructor(id) {
        this.instanceId = id;
    }

    async loadFeed(feedUrl) {
        const root = document.getElementById(this.instanceId);
        
        // We are pointing to YOUR NEW FOLDER now
        const playerFrame = document.createElement('iframe');
        playerFrame.src = `player/index.html?feed=${feedUrl}`;
        
        playerFrame.style.width = "100%";
        playerFrame.style.height = "100vh";
        playerFrame.style.border = "none";
        
        root.innerHTML = ""; 
        root.appendChild(playerFrame);
    }
};
