document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.container');

    containers.forEach(container => {
        container.addEventListener('click', function() {
            // 현재 클릭된 이미지에 clicked 클래스를 토글
            container.classList.toggle('clicked');

            // 클릭된 이미지에 해당하는 오디오 재생
            const musicId = 'music' + container.id.replace('flexContainer', '');
            const audio = document.getElementById(musicId);

            if (audio.paused) {
                audio.play().catch(function(error) {
                    console.error("오디오 재생 중 오류:", error);
                });
            } else {
                audio.pause();
            }
        });
    });
});
