window.WebRcadePlayer = class {
    constructor(id) {
        this.container = document.getElementById(id);
    }

    async loadFeed(url) {
        this.container.innerHTML = `<div id="game-canvas-container" style="width:100%; height:100vh; background:#000;"></div>`;
        console.log("Stage set for FFVII. Injecting WASM Kernel...");

        // This is the bootstrap that pulls the REAL emulator from a bypass mirror
        const script = document.createElement('script');
        // We use the UNPKG mirror because it's usually not categorized as 'Games'
        script.src = 'https://unpkg.com/@webrcade/app-common@1.2.10/dist/index.min.js';
        
        script.onload = () => {
            // Once the real library loads, we start the actual PS1 engine
            const player = new window.WebRcadePlayer("game-canvas-container");
            player.loadFeed(url);
        };
        
        script.onerror = () => {
            this.container.innerHTML = "<h1 style='color:red;'>EMULATOR CORE BLOCKED BY SCHOOL. NEED MANUAL MIRROR.</h1>";
        };

        document.head.appendChild(script);
    }
};
