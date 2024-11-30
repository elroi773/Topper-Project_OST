// 메인 OST 재생
document.querySelector('.button').addEventListener('click', function() {
    const mainAudio = document.getElementById('audio-player');
    mainAudio.play();
});

// 이미지 클릭 시 해당 OST 재생
function playAudio(audioIndex) {
    const allAudios = document.querySelectorAll('audio');
    // 모든 오디오 정지
    allAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
    // 선택한 오디오 재생
    const selectedAudio = document.getElementById(`audio${audioIndex}`);
    if (selectedAudio) {
        selectedAudio.play();
    }
}