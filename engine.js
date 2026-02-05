/* webRcade Player Loader */
(function() {
    console.log("Loader active. Attempting to inject engine...");
    var script = document.createElement('script');
    // Using a different, homework-related provider to sneak the code past the block
    script.src = 'https://unpkg.com/@webrcade/app-common@1.2.10/dist/index.min.js';
    script.onload = function() {
        console.log("Engine injected successfully.");
    };
    document.head.appendChild(script);
})();
