/*
* main.js
* main에서만 작동되는 스크립트 저장
*/

$(document).ready(function(){

     /**************************** work 팝업 (시작) ************************************/
     const product_swiper = new Swiper('.work .list .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 3, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 'auto'*/
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            640: {    /* 640px 이상일때 적용 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
       
    });


   /**************************** work 팝업 (종료) ************************************/
})//$(document).ready