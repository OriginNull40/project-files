window.WebRcadePlayer = class {
    constructor(id) {
        this.container = document.getElementById(id);
    }

    async loadFeed(url) {
        this.container.innerHTML = `<div id="game-canvas-container" style="width:100%; height:100vh; background:#000; color:white; display:flex; align-items:center; justify-content:center; font-family:monospace;">INITIALIZING PS1 ENGINE...</div>`;
        
        // This is the direct call to your own repo's copy of the engine
        const script = document.createElement('script');
        script.src = 'index.min.js'; // We will create this file next
        
        script.onload = () => {
            // Once your local script loads, we trigger the real UI
            const player = new window.WebRcadePlayer("game-canvas-container");
            player.loadFeed(url);
        };
        
        script.onerror = () => {
            this.container.innerHTML = "<div style='color:red; text-align:center;'><h2>CRITICAL ERROR: index.min.js NOT FOUND</h2><p>Make sure you uploaded the engine file to your main folder.</p></div>";
        };

        document.head.appendChild(script);
    }
};
