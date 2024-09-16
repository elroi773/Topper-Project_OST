// 부드러운 스크롤 효과
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 프로젝트 창 hover 효과
const iframes = document.querySelectorAll('iframe');
iframes.forEach(iframe => {
    iframe.addEventListener('mouseenter', () => {
        iframe.style.transform = 'scale(1.1)';
    });
    iframe.addEventListener('mouseleave', () => {
        iframe.style.transform = 'scale(1)';
    });
});
