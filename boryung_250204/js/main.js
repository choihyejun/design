/*
* main.js
* main에서만 작동되는 스크립트 저장
*/

$(document).ready(function(){
    /**************************** visual 팝업 (시작) ************************************/
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },
        //effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .ctrl_wrap .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            // renderBullet: function (realIndex, className) {   /* paging에 특정 코드 넣기 */
            //     console.log(this.slides.length)
            //     return '<span class="' + className + '">' + (realIndex + 1) + "</span>" + length;
            // },
        },
    });
    
    $('.visual .ctrl_wrap button.stop').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .ctrl_wrap button.play').show()
    })
    $('.visual .ctrl_wrap button.play').on('click', function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_wrap button.stop').show()
    })
    /**************************** visual 팝업 (종료) ************************************/
    
    /************************* 탭 기능 (시작)  **************************/
    $('.find .tab_list ul li').on('click', function(){
        $('.find .tab_list ul li').removeClass('active')
        $(this).addClass('active')
        $('.find .tab_list ul li button').attr('title', '')
        $(this).find('button').attr('title', '선택됨')
        tab_name = $(this).attr('data-tab')
        console.log(tab_name)
        $('.find .tab_content .tab_panel').removeClass('active')
        $('.find .tab_content').find('[data-tab="'+tab_name+'"]').addClass('active')
    })
    /************************* 탭 기능 (종료)  **************************/

    /**************************** product 팝업 (시작) ************************************/
     const product_swiper = new Swiper('.product .list .swiper', { /* 팝업을 감싼는 요소의 class명 */
         slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
         spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
         speed: 5000,
         breakpoints: {
             640: {    /* 640px 이상일때 적용 */
                 spaceBetween: 24,
             },
         },
         //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
         loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
         autoplay: {  /* 팝업 자동 실행 */
             delay: 1,
             disableOnInteraction: false,
         },
     });

    $('.product .tit .ctrl_btn .stop').on('click', function(){
        //console.log('정지버튼 클릭')
        product_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.product .tit .ctrl_btn .play').show()
    })
    $('.product .tit .ctrl_btn .play').on('click', function(){
        //console.log('재생버튼 클릭')
        product_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.product .tit .ctrl_btn .stop').show()
    })
 
    /**************************** product 팝업 (종료) ************************************/
    
    /**************************** media 팝업 (시작) ************************************/ 
    const media_swiper = new Swiper('.media .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            1024: {    /* 640px 이상일때 적용 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 20,
            },
            640: {    /* 640px 이상일때 적용 */
                slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 20,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        },
    });
    /**************************** product 팝업 (종료) ************************************/


    /**************************** family 열고 닫기 (시작) **********************************
     * footer .f_site .family button.site_open 을 클릭했을때 
     * footer .f_site .family 에 open 클래스 추가
     * footer .f_site .family button.site_close 를 클릭했을때
     * footer .f_site .family 에 open 클래스 삭제
     * 
     * footer .f_site .brand button.site_open 을 클릭했을때 
     * footer .f_site .brand 에 open 클래스 추가
     * footer .f_site .brand button.site_close 를 클릭했을때
     * footer .f_site .brand 에 open 클래스 삭제
     * **/

    $('footer .f_site .family button.site_open').on('click', function(){
		$('footer .f_site .family').addClass('open');
	});
    $('footer .f_site .family button.site_close').on('click', function(){
		$('footer .f_site .family').removeClass('open');
	});
    $('footer .f_site .brand button.site_open').on('click', function(){
		$('footer .f_site .brand').addClass('open');
	});
    $('footer .f_site .brand button.site_close').on('click', function(){
		$('footer .f_site .brand').removeClass('open');
	});
    
    /**************************** family 열고 닫기 (종료) ************************************/
})//$(document).ready