document.addEventListener("DOMContentLoaded", () => {
    var button = document.querySelector('[data-bs-target="#jugador4"]');

    new bootstrap.Popover(button, {
        trigger: 'hover', 
        title: button.getAttribute('data-bs-title'),
        customClass: 'custom-popover'
    });
});
