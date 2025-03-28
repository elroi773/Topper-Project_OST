
    // 버튼 클릭 시 오디오 재생
    document.querySelector('.button').addEventListener('click', playAudio);

    function playAudio() {
        console.log("playAudio()");
        var audio = document.getElementById('audio-player');
        audio.style.display = 'block'; // 오디오 플레이어를 표시
        audio.play().catch(function(error) {
            console.log('Autoplay was prevented:', error);
        });
    }

    const sliderWrap = document.querySelector(".slider__wrap");
    const sliderImg = sliderWrap.querySelector(".slider__img");         //보여지는 영역
    const sliderInner = sliderWrap.querySelector(".slider__inner");     //움직이는 영역
    const slider = sliderWrap.querySelectorAll(".slider");              //개별 이미지

    let currentIndex = 0;                                               //현재 보이는 이미지
    let sliderCount = slider.length;                                    //이미지 갯수
    let sliderInterval = 2000;                                          //이미지 변경 간격 시간
    let sliderWidth = slider[0].offsetWidth;                            //이미지 가로 값
    let sliderClone = sliderInner.firstElementChild.cloneNode(true);    //첫번째 이미지 복사

    // 복사한 첫 번째 이미지 마지막에 붙여넣기
    sliderInner.appendChild(sliderClone);

    function sliderEffect(){
        currentIndex++;

        sliderInner.style.transition = "all 0.6s";
        sliderInner.style.transform = "translateX(-"+ sliderWidth * currentIndex +"px)";

        //마지막 이미지에 위치 했을 때
        if(currentIndex == sliderCount){
            setTimeout(() => {
                sliderInner.style.transition = "0s";
                sliderInner.style.transform = "translateX(0px)";
            }, 700);

            currentIndex = 0;
        }

    }

    setInterval(sliderEffect, sliderInterval);

    const containers = document.querySelectorAll('.container');

        containers.forEach(container => {
            const img = container.querySelector('img');
            const audio = container.querySelector('audio');
            const description = container.querySelector('.p');

            img.addEventListener('click', () => {
                // 다른 컨테이너 초기화
                containers.forEach(c => {
                    if (c !== container) {
                        c.classList.remove('clicked');
                        const otherAudio = c.querySelector('audio');
                        otherAudio.pause();
                        otherAudio.currentTime = 0;
                    }
                });

                // 현재 컨테이너 상태 토글
                container.classList.toggle('clicked');

                // 오디오 재생/일시정지
                if (container.classList.contains('clicked')) {
                    audio.play();
                } else {
                    audio.pause();
                    audio.currentTime = 0;
                }
            });
        });