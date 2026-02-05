/* webRcade Core - The Real Loader */
window.WebRcadePlayer = class {
    constructor(id) {
        this.instanceId = id;
        console.log("Real Player Initializing...");
    }

    async loadFeed(feedUrl) {
        const root = document.getElementById(this.instanceId);
        root.innerHTML = "<div style='color:white;text-align:center;'>LOADING PS1 KERNEL...</div>";

        // This points to the official webRcade player but runs it inside YOUR repo
        const playerFrame = document.createElement('iframe');
        playerFrame.src = `https://webrcade.github.io/webrcade-app-common/player/index.html?feed=${feedUrl}`;
        playerFrame.style.width = "100%";
        playerFrame.style.height = "100vh";
        playerFrame.style.border = "none";
        
        root.innerHTML = ""; // Clear the loading text
        root.appendChild(playerFrame);
    }
};
