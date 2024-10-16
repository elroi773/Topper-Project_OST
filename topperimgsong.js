const containers = [
    { img: 'playMusic1', audio: 'music1', description: 'description1', flexContainer: 'flexContainer1' },
    { img: 'playMusic2', audio: 'music2', description: 'description2', flexContainer: 'flexContainer2' },
    { img: 'playMusic3', audio: 'music3', description: 'description3', flexContainer: 'flexContainer3' },
    { img: 'playMusic4', audio: 'music4', description: 'description4', flexContainer: 'flexContainer4' },
    { img: 'playMusic5', audio: 'music5', description: 'description5', flexContainer: 'flexContainer5' },
];

document.addEventListener('DOMContentLoaded', () => {

    containers.forEach(container => {
        const img = document.getElementById(container.img);
        const audio = document.getElementById(container.audio);
        const description = document.getElementById(container.description);
        const flexContainer = document.getElementById(container.flexContainer);

        img.addEventListener('click', function() {
           
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }

           
            flexContainer.classList.toggle('move-down');

            description.style.opacity = description.style.opacity === "0" || description.style.opacity === "" ? "1" : "0";
        });
    });
});
