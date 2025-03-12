/*
* main.js
* main에서만 작동되는 스크립트 저장
*/

$(document).ready(function(){
    /************************ 이미지 넓이 조절 애니메이션 :: 시작 **********************
    * .photo_resize .photo 넓이가 50% -> 100%
    * 언제 시작할 것인지 ... (영역이 브라우저 하단에서 올라왔을때)
    * 언제 종료할 것인지 .... (영역이 브라우저 중간쯤 올라왔을때)
    * 넓이가 50% 일때 > 50% ~ 100% 변경 > 100% 유지하는 구간 
    * 예를들어 시작 100 종료가 500이라고 하면 
    * >>> 100 ~ 500 늘어남 .... 400이 스크롤 되는 동안 4 => 1%
    * >>> 내가 300px 스크롤 했음 
    * >>> 300 - 100 = 200/400 = 0.5
    * >>> 최초의 넓이 50 -> 100 : 총 50%가 증가 >>> 그 증가값의 50% 
    * >>> 50*0.5 = 25 + 50
    */
    let ph_name = $('.photo_resize .photo') //요소를 감싸는 이름
    let ph_start_width = 50 //최초의 넓이 (단위는 %)
    let ph_end_width = 100 //마지막 넓이 (단위는 %)
    let ph_width //이미지를 감싸는 요소의 넓이
    let ph_gap //최종 스크롤을 계산하는 높이
    let ph_start //애니메이션 시작 위치
    let ph_end //애니메이션 종료 위치

    function photo_resize(){
        ph_start = ph_name.offset().top - window_h + (window_h * 0.3)
        ph_end = ph_name.offset().top - (window_h * 0.1)
        //console.log('스크롤값', scrolling, '시작점', ph_start, '종료점', ph_end)
        if(scrolling < ph_start){
            ph_width = ph_start_width
            //console.log('작음')
        }else if(scrolling < ph_end){
            ph_gap = ph_end - ph_start
            ph_width = (scrolling - ph_start)/ph_gap
            ph_width = (ph_width * (ph_end_width - ph_start_width)) + ph_start_width
            //console.log('늘어나는중')
        }else{
            ph_width = ph_end_width
            //console.log('다 늘어남')
        }//if문 종료
        //console.log(ph_width)
        ph_name.width(ph_width + '%')
    }//function 종료 
    $(window).scroll(function(){ //스크롤 할때 마다
        photo_resize()
    })
    $(window).resize(function(){ //브라우저가 리사이즈가 될때
        photo_resize()
    })

    /************************ 이미지 넓이 조절 애니메이션 :: 종료 ***********************/
})//$(document).ready