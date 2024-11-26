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

const canvas = document.getElementById('footer-canvas');
const ctx = canvas.getContext('2d');

// 캔버스 크기 설정
canvas.width = window.innerWidth;
canvas.height = 150;

// 별 객체 배열
let stars = [];

for (let i = 0; i < 100; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        alpha: Math.random(),
        speed: Math.random() * 0.02 + 0.01
    });
}

// 별 애니메이션
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0) star.speed *= -1; // 투명도 변경
    }
    requestAnimationFrame(drawStars);
}

drawStars();

// 화면 크기 변경 시 캔버스 업데이트
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = 150;
    stars = [];
    for (let i = 0; i < 100; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            alpha: Math.random(),
            speed: Math.random() * 0.02 + 0.01
        });
    }
});
