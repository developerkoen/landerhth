// Zorg ervoor dat de juiste pagina wordt geladen zonder .html extensie
window.onload = function() {
    // Controleer de huidige URL van de gebruiker
    if (window.location.pathname === "/") {
        window.history.pushState({}, "", "/lander");
    } else if (window.location.pathname === "/dashboard/login") {
        window.history.pushState({}, "", "/dashboard/login");
    }
};
