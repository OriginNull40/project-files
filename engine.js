async function boot() {
    console.log("Attempting to load local engine...");
    try {
        const script = document.createElement('script');
        // This MUST match the filename you created in GitHub
        script.src = 'webrcade-core.js'; 
        script.onload = () => {
            console.log("Local script loaded successfully!");
            window.engineLoaded = true;
        };
        document.head.appendChild(script);
    } catch (e) {
        console.error("Engine failed to load locally.");
    }
}
boot();
