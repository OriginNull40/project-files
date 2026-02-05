async function boot() {
    console.log("Booting local engine...");
    const script = document.createElement('script');
    // This tells the browser to look in your GitHub folder for the core
    script.src = 'webrcade-core.js'; 
    script.onload = () => {
        window.engineLoaded = true;
        console.log("Core script attached.");
    };
    document.head.appendChild(script);
}
boot();
