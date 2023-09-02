/* ---- sub ---- */  
history.scrollRestoration = "manual"
// history.scrollRestoration = "auto"

/* ---- scroll ---- */  
gsap.registerPlugin(ScrollTrigger);

let $scroll1 = $('.sub-wrap #section2 .scroll__wrap .scroll-left.scroll1');
let $scroll2 = $('.sub-wrap #section2 .scroll__wrap.scroll-left.scroll2');
let $scroll3 = $('.sub-wrap #section2 .scroll__wrap .scroll-left.scroll3');

// scroll1에 대한 ScrollTrigger 설정
gsap.to($scroll1, {
  scrollTrigger: {
    trigger: ".scroll1",
    start: "top 100px",
    endTrigger: ".scroll1",
    end: "bottom 196px",
    pin: true, // left 클래스 고정
    scrub: true, // 스크롤에 따라 부드럽게 이동
  },
});

// scroll2에 대한 ScrollTrigger 설정
gsap.to($scroll2, {
  scrollTrigger: {
    trigger: ".scroll2",
    start: "top 100px",
    endTrigger: ".scroll2",
    end: "bottom 160px",
    pin: true, // left 클래스 고정
    scrub: true, // 스크롤에 따라 부드럽게 이동
  },
});

// scroll3에 대한 ScrollTrigger 설정
gsap.to($scroll3, {
  scrollTrigger: {
    trigger: ".scroll3",
    start: "top 100px",
    endTrigger: ".scroll3",
    end: "bottom 160px",
    pin: true, // left 클래스 고정
    scrub: true, // 스크롤에 따라 부드럽게 이동
  },
});

/* ---- swiper ---- */ 
var aboutSwiper1 = new Swiper(".about-swiper1", {
  effect: "fade",
  pagination : { // 페이징 설정
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
});
var aboutSwiper2 = new Swiper(".about-swiper2", {
  effect: "fade",
  pagination : { // 페이징 설정
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
});
var aboutSwiper1 = new Swiper(".about-swiper3", {
  effect: "fade",
  pagination : { // 페이징 설정
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
});

/* ---- gnb ---- */  
/* ---- scroll ---- */  
function gnbScrollEvent() {
    let $header = $('header');
    let $gnb2 = $('#gnb .gnb__wrap .gnb__2d-wrap');
  
    $header.hover(
      function() {
        $gnb2.addClass('header1');
        $gnb2.removeClass('header2');
        $header.addClass('header3');
        $header.removeClass('header4');
      }, function() {
        $gnb2.addClass('header2');
        $gnb2.removeClass('header1');
        $header.addClass('header4');
        $header.removeClass('header3');
      }
    );
  } 
  
  $(window).scroll(function () {
    gnbScrollEvent();
  })
  
  $(document).ready(function () {
    gnbScrollEvent();
  });