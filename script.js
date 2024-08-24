document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('play-trailer');
    const modal = document.getElementById('trailer-modal');
    const closeButton = document.querySelector('.close-button');

    playButton.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
