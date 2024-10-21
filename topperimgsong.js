 // 첫 번째 이미지 클릭 이벤트
 const img1 = document.getElementById('playMusic1');
 const audio1 = document.getElementById('music1');
 const description1 = document.getElementById('description');
 const flexContainer1 = document.getElementById('flexContainer1');

 img1.addEventListener('click', function() {
     // 음악 재생/일시정지
     if (audio1.paused) {
         audio1.play();
     } else {
         audio1.pause();
     }

     // 사진과 설명이 같이 밑으로 이동하는 애니메이션 적용
     flexContainer1.classList.toggle('move-down');

     // 설명 보이기/숨기기
     description1.style.opacity = description1.style.opacity === "0" || description1.style.opacity === "" ? "1" : "0";
 });

 // 두 번째 이미지 클릭 이벤트
 const img2 = document.getElementById('playMusic2');
 const audio2 = document.getElementById('music2');
 const description2 = document.getElementById('description2');
 const flexContainer2 = document.getElementById('flexContainer2');

 img2.addEventListener('click', function() {
     // 음악 재생/일시정지
     if (audio2.paused) {
         audio2.play();
     } else {
         audio2.pause();
     }

     // 사진과 설명이 같이 밑으로 이동하는 애니메이션 적용
     flexContainer2.classList.toggle('move-down');

     // 설명 보이기/숨기기
     description2.style.opacity = description2.style.opacity === "0" || description2.style.opacity === "" ? "1" : "0";
 });
 // 두 번째 이미지 클릭 이벤트
 const img3 = document.getElementById('playMusic3');
 const audio3 = document.getElementById('music3');
 const description3 = document.getElementById('description3');
 const flexContainer3 = document.getElementById('flexContainer3');

 img3.addEventListener('click', function() {
     // 음악 재생/일시정지
     if (audio3.paused) {
         audio3.play();
     } else {
         audio3.pause();
     }

     // 사진과 설명이 같이 밑으로 이동하는 애니메이션 적용
     flexContainer3.classList.toggle('move-down');

     // 설명 보이기/숨기기
     description3.style.opacity = description3.style.opacity === "0" || description3.style.opacity === "" ? "1" : "0";
 });
 // 네 번째 이미지 클릭 이벤트
 const img4 = document.getElementById('playMusic4');
 const audio4 = document.getElementById('music4');
 const description4 = document.getElementById('description4');
 const flexContainer4 = document.getElementById('flexContainer4');

 img4.addEventListener('click', function() {
     // 음악 재생/일시정지
     if (audio4.paused) {
         audio4.play();
     } else {
         audio4.pause();
     }

     // 사진과 설명이 같이 밑으로 이동하는 애니메이션 적용
     flexContainer4.classList.toggle('move-down');

     // 설명 보이기/숨기기
     description4.style.opacity = description4.style.opacity === "0" || description4.style.opacity === "" ? "1" : "0";
 });
 
 // 다섯 번째 이미지 클릭 이벤트
    const img5 = document.getElementById('playMusic5');
    const audio5 = document.getElementById('music5');
    const description5 = document.getElementById('description5');
    const flexContainer5 = document.getElementById('flexContainer5');

    img5.addEventListener('click', function() { // img5로 수정
        // 음악 재생/일시정지
        if (audio5.paused) {
            audio5.play();
        } else {
            audio5.pause();
        }

        // 사진과 설명이 같이 밑으로 이동하는 애니메이션 적용
        flexContainer5.classList.toggle('move-down');

        // 설명 보이기/숨기기
        description5.style.opacity = description5.style.opacity === "0" || description5.style.opacity === "" ? "1" : "0";
    });
