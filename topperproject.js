document.addEventListener('DOMContentLoaded', function() {
    const goook = document.getElementById('character-goook');
    const choyoung = document.getElementById('character-choyoung');
    const descriptionBox = document.getElementById('description-goook');

    // 국연수 이미지 클릭 시 오디오 재생
    goook.addEventListener('click', function() {
        var audio = document.getElementById('audio');
        audio.load(); // 오디오 파일 명시적으로 로드
        if (audio.paused) {
            audio.play().catch(function(error) {
                console.error("오디오 재생 중 오류:", error);
            });
        } else {
            audio.pause();
        }
    });

    // 버튼 클릭 시 오디오 재생
    document.querySelector('.button').addEventListener('click', function() {
        var audio = document.getElementById('audio-player');
        audio.load(); // 오디오 파일 명시적으로 로드
        if (audio.paused) {
            audio.play().catch(function(error) {
                console.error("오디오 재생 중 오류:", error);
            });
        } else {
            audio.pause();
        }
    });
});
