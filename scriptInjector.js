(() => {
    var s = document.createElement('script');
    // TODO: add "script.js" to web_accessible_resources in manifest.json
    s.src = 'http://localhost:8080/public/client.js';
    s.onload = function() {
        this.remove();
    };

    (document.head || document.documentElement).appendChild(s);
})();