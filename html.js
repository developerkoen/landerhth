window.onload = function() {
    // Zorg ervoor dat de juiste pagina wordt geladen zonder .html extensie
    if (window.location.pathname === "/lander.html") {
        // Verander de URL naar /lander zonder .html
        window.history.pushState({}, "", "/");
    }
};
