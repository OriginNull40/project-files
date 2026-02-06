window.WebRcadePlayer = class {
    constructor(id) {
        this.instanceId = id;
    }

    async loadFeed(feedUrl) {
        const root = document.getElementById(this.instanceId);
        root.innerHTML = "<div style='color:white;text-align:center;padding:20px;font-family:monospace;'>BYPASSING FIREWALL...<br>LOADING PS1 RUNTIME...</div>";

        const script = document.createElement('script');
        // This is a direct link to the engine hosted on a different GitHub mirror
        script.src = 'https://raw.githack.com/webrcade/webrcade-app-common/master/dist/index.js';
        
        script.onload = () => {
            console.log("Runtime Injected.");
            try {
                // We use the internal engine to launch your feed directly
                const player = new window.WebRcadePlayer(this.instanceId);
                player.loadFeed(feedUrl);
            } catch(e) {
                root.innerHTML = "<div style='color:red;'>ENGINE ERROR: " + e.message + "</div>";
            }
        };

        script.onerror = () => {
            root.innerHTML = "<div style='color:orange;'>PATH BLOCKED. <br>Please download 'index.min.js' from your phone and upload it to your repo.</div>";
        };

        document.head.appendChild(script);
    }
};
