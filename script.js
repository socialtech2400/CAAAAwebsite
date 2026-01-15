// Modal Functionality

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.add('active');
    document.body.classList.add('no-scroll');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

// Close modals when clicking outside the content
window.onclick = function (event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
}

// Attach Event Listeners
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        const activeModals = document.querySelectorAll('.modal-overlay.active');
        activeModals.forEach(modal => {
            modal.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    }
});
