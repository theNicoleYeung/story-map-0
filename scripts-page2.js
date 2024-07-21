//(0a) FOR TRANSITION between Sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.scroll-section');

    function revealSection() {
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', revealSection);
    revealSection(); // Initial call to reveal sections on load
});

//(0b) To check if an element is IN VIEWPORT
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


//(3) FOR BUTTON PANEL
function handleButtonClick(buttonId, audioId, backgroundImage) {
    // const audios = document.querySelectorAll('audio');
    // audios.forEach(audio => {
    //     if (audio.id === audioId) {
    //         audio.play();
    //     } else {
    //         audio.pause();
    //         audio.currentTime = 0;
    //     }
    // });

    const rightColumn = document.getElementById('right-column-container');
    rightColumn.style.backgroundImage = `url(${backgroundImage})`;

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        if (button.id === buttonId) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    const contentPanels = document.querySelectorAll('.tabs_text_panels > div');
    contentPanels.forEach(panel => {
        if (panel.id === `${buttonId}-text`) {
            panel.classList.add('active');
        } else {
            panel.classList.remove('active');
        }
    });
}
