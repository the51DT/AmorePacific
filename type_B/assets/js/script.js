// history.scrollRestoration = "manual"
history.scrollRestoration = "auto"

/* ---- swiper ---- */  
const mainSwiper = new Swiper('.main-swiper', {
  autoplay: {
    delay: 4000,
  },
  loop:true,
  loopAdditionalSlides: 1,	
  pagination : { // 페이징 설정
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
});

var mainSwiper2 = new Swiper(".main-swiper2", {
  slidesPerView: "auto",
  grabCursor: true,
});

var mainSwiper3 = new Swiper(".main-swiper3", {
  slidesPerView: "auto",
  grabCursor: true,
});


/* ---- gnb ---- */  
/* ---- scroll ---- */  
function gnbScrollEvent() {
  let documentHeight = $(document).scrollTop();
  let section1Top = jQuery('#section1').offset().top;
  let section2Top = jQuery('#section2').offset().top;
  let section4Top = jQuery('#section4').offset().top;
  let $gnb = $('#gnb .gnb__wrap li a');
  let $logo = $('#gnb .gnb__wrap');
  let $right = $('#gnb .gnb__wrap .right');
  let $left = $('#gnb .gnb__wrap .left');

  // console.log(documentHeight, section1Top);
  if (documentHeight >= section1Top+300) {
    $right.removeClass('right2');
    $left.removeClass('left2');
    $right.addClass('right1');
    $left.addClass('left1');
    $logo.hover(
      function() {
        $right.removeClass('right1');
        $left.removeClass('left1');    
        $right.addClass('right2');
        $left.addClass('left2');
      }, function() {
        $right.removeClass('right2');
        $left.removeClass('left2');
        $right.addClass('right1');
        $left.addClass('left1');
      }
    );
  } else {
    $right.removeClass('right1');
    $left.removeClass('left1');
    $right.addClass('right2');
    $left.addClass('left2');
    $logo.hover(
      function() {
        $right.removeClass('right1');
        $left.removeClass('left1');
      }
    );
  }
  if (documentHeight >= section2Top) {
    $gnb.addClass('color1');
    $gnb.removeClass('color2');
  } else if (documentHeight >= section4Top) {
    $gnb.addClass('color2');
    $gnb.removeClass('color1');
  } else {
    $gnb.addClass('color2');
    $gnb.removeClass('color1');
  }
  if (documentHeight >= section4Top) {
    $gnb.addClass('color2');
    $gnb.removeClass('color1');
  }
} 

$(window).scroll(function () {
  gnbScrollEvent();
})


/* ---- section3 ---- */  
/* ---- click ---- */
function se3ClickEvent() {
  let $list1 = $('#section3 .list__wrap .main-list .list-01');
  let $list2 = $('#section3 .list__wrap .main-list .list-02');
  let $list1sub = $('#section3 .list__wrap .sub-list .list-01');
  let $list2sub = $('#section3 .list__wrap .sub-list .list-02');
  let $list1data1 = $('#section3 .text__wrap .title_list .title-01');
  let $list1data2 = $('#section3 .text__wrap .content_list .content-01');
  let $list2data1 = $('#section3 .text__wrap .title_list .title-02');
  let $list2data2 = $('#section3 .text__wrap .content_list .content-02');
  let $list1_1 = $('#section3 .list__wrap .sub-list .list-01 li:nth-child(1)');
  let $list1_2 = $('#section3 .list__wrap .sub-list .list-01 li:nth-child(2)');
  let $list1_3 = $('#section3 .list__wrap .sub-list .list-01 li:nth-child(3)');
  let $list1_4 = $('#section3 .list__wrap .sub-list .list-01 li:nth-child(4)');
  let $list2_1 = $('#section3 .list__wrap .sub-list .list-02 li:nth-child(1)');
  let $list2_2 = $('#section3 .list__wrap .sub-list .list-02 li:nth-child(2)');
  let $list2_3 = $('#section3 .list__wrap .sub-list .list-02 li:nth-child(3)');
  let $list2_4 = $('#section3 .list__wrap .sub-list .list-02 li:nth-child(4)');
  let $list1Img = $('#section3 .img__wrap .list1');
  let $list2Img = $('#section3 .img__wrap .list2');
  let $list1_1Img = $('#section3 .img__wrap .list1-1');
  let $list1_2Img = $('#section3 .img__wrap .list1-2');
  let $list1_3Img = $('#section3 .img__wrap .list1-3');
  let $list1_4Img = $('#section3 .img__wrap .list1-4');
  let $list2_1Img = $('#section3 .img__wrap .list2-1');
  let $list2_2Img = $('#section3 .img__wrap .list2-2');
  let $list2_3Img = $('#section3 .img__wrap .list2-3');
  let $list2_4Img = $('#section3 .img__wrap .list2-4');

  $list1.click(
    function() {
      $list1.addClass('active');$list1Img.addClass('active');$list1data1.addClass('active');$list1data2.addClass('active');$list1sub.addClass('active'); 
      $list2.removeClass('active');$list2Img.removeClass('active');$list2data1.removeClass('active');$list2data2.removeClass('active');$list2sub.removeClass('active');$list1_1Img.removeClass('active');$list1_2Img.removeClass('active');$list1_3Img.removeClass('active');$list1_4Img.removeClass('active');$list2_1Img.removeClass('active');$list2_2Img.removeClass('active');$list2_3Img.removeClass('active');$list2_4Img.removeClass('active');
    }
  );
  $list2.click(
    function() {
      $list2.addClass('active');$list2Img.addClass('active');$list2data1.addClass('active');$list2data2.addClass('active');$list2sub.addClass('active'); 
      $list1.removeClass('active');$list1Img.removeClass('active');$list1data1.removeClass('active');$list1data2.removeClass('active');$list1sub.removeClass('active');$list1_1Img.removeClass('active');$list1_2Img.removeClass('active');$list1_3Img.removeClass('active');$list1_4Img.removeClass('active');$list2_1Img.removeClass('active');$list2_2Img.removeClass('active');$list2_3Img.removeClass('active');$list2_4Img.removeClass('active');
    }
  );
  $list1_1.hover(
    function() {
      $list1_1Img.addClass('active');
      $list1Img.removeClass('active');$list2Img.removeClass('active');$list1_2Img.removeClass('active');$list1_3Img.removeClass('active');$list1_4Img.removeClass('active');$list2_1Img.removeClass('active');$list2_2Img.removeClass('active');$list2_3Img.removeClass('active');$list2_4Img.removeClass('active');
    }
  );
  $list1_2.hover(
    function() {
      $list1_2Img.addClass('active');
      $list1Img.removeClass('active');$list2Img.removeClass('active');$list1_1Img.removeClass('active');$list1_3Img.removeClass('active');$list1_4Img.removeClass('active');$list2_1Img.removeClass('active');$list2_2Img.removeClass('active');$list2_3Img.removeClass('active');$list2_4Img.removeClass('active');
    }
  );
  $list1_3.hover(
    function() {
      $list1_3Img.addClass('active');
      $list1Img.removeClass('active');$list2Img.removeClass('active');$list1_1Img.removeClass('active');$list1_2Img.removeClass('active');$list1_4Img.removeClass('active');$list2_1Img.removeClass('active');$list2_2Img.removeClass('active');$list2_3Img.removeClass('active');$list2_4Img.removeClass('active');
    }
  );
  $list1_4.hover(
    function() {
      $list1_4Img.addClass('active');
      $list1Img.removeClass('active');$list2Img.removeClass('active');$list1_1Img.removeClass('active');$list1_2Img.removeClass('active');$list1_3Img.removeClass('active');$list2_1Img.removeClass('active');$list2_2Img.removeClass('active');$list2_3Img.removeClass('active');$list2_4Img.removeClass('active');
    }
  );
  $list2_1.hover(
    function() {
      $list2_1Img.addClass('active');
      $list1Img.removeClass('active');$list2Img.removeClass('active');$list1_1Img.removeClass('active');$list1_2Img.removeClass('active');$list1_3Img.removeClass('active');$list1_4Img.removeClass('active');$list2_2Img.removeClass('active');$list2_3Img.removeClass('active');$list2_4Img.removeClass('active');
    }
  );
  $list2_2.hover(
    function() {
      $list2_2Img.addClass('active');
      $list1Img.removeClass('active');$list2Img.removeClass('active');$list1_1Img.removeClass('active');$list1_2Img.removeClass('active');$list1_3Img.removeClass('active');$list1_4Img.removeClass('active');$list2_1Img.removeClass('active');$list2_3Img.removeClass('active');$list2_4Img.removeClass('active');
    }
  );
  $list2_3.hover(
    function() {
      $list2_3Img.addClass('active');
      $list1Img.removeClass('active');$list2Img.removeClass('active');$list1_1Img.removeClass('active');$list1_2Img.removeClass('active');$list1_3Img.removeClass('active');$list1_4Img.removeClass('active');$list2_1Img.removeClass('active');$list2_2Img.removeClass('active');$list2_4Img.removeClass('active');
    }
  );
  $list2_4.hover(
    function() {
      $list2_4Img.addClass('active');
      $list1Img.removeClass('active');$list2Img.removeClass('active');$list1_1Img.removeClass('active');$list1_2Img.removeClass('active');$list1_3Img.removeClass('active');$list1_4Img.removeClass('active');$list2_1Img.removeClass('active');$list2_2Img.removeClass('active');$list2_3Img.removeClass('active');
    }
  );
}
$(document).ready(function () {
  se3ClickEvent();
});

/* ---- section4 ---- */
/* ---- scroll ---- */  
function sec4ScrollEvent() {
  let documentHeight = $(document).scrollTop();
  let section4Top = jQuery('#section4').offset().top;
  let $sec4 = $('#section4');
  let $sec5 = $('#section5');
  let $sec6 = $('#section6');
  let $footer = $('#footer');
  let $right1 = $('#section4 .text__wrap .title__wrap .title-1 .title-right');
  let $right2 = $('#section4 .text__wrap .title__wrap .title-2 .title-right');

  if (documentHeight >= section4Top-300) {
    console.log('test');
    $sec4.addClass('color3');$sec4.removeClass('color4'); 
    $sec5.addClass('color3');$sec5.removeClass('color4'); 
    $sec6.addClass('color3');$sec6.removeClass('color4'); 
    $footer.addClass('color3');$footer.removeClass('color4'); 
    $right1.addClass('right3');$right2.addClass('right4');
    $right1.removeClass('left3');$right2.removeClass('left4');
  } else {
    $sec4.addClass('color4');$sec4.removeClass('color3'); 
    $sec5.addClass('color4');$sec5.removeClass('color3'); 
    $sec6.addClass('color4');$sec6.removeClass('color3'); 
    $footer.addClass('color4');$footer.removeClass('color3'); 
    $right1.addClass('left3');$right2.addClass('left4');
    $right1.removeClass('right3');$right2.removeClass('right4');
  }
} 

$(window).scroll(function () {
  sec4ScrollEvent();
})

/* ---- section5 ---- */
/* ---- hover ---- */  
function se5HoverEvent() {
  let $sec5 = $('#section5');
  let $list1 = $('.main-wrap #section5 .list__wrap ul .list-1');
  let $list2 = $('.main-wrap #section5 .list__wrap ul .list-2');
  let $list3 = $('.main-wrap #section5 .list__wrap ul .list-3');
  let $list4 = $('.main-wrap #section5 .list__wrap ul .list-4');
  let $list5 = $('.main-wrap #section5 .list__wrap ul .list-5');
  let $list6 = $('.main-wrap #section5 .list__wrap ul .list-6');
  let $list7 = $('.main-wrap #section5 .list__wrap ul .list-7');
  let $list8 = $('.main-wrap #section5 .list__wrap ul .list-8');
  let $cursorImg = $('.cursor');
  let $cursorImg1 = $('.cursor .brand-01');
  let $cursorImg2 = $('.cursor .brand-02');
  let $cursorImg3 = $('.cursor .brand-03');
  let $cursorImg4 = $('.cursor .brand-04');
  let $cursorImg5 = $('.cursor .brand-05');
  let $cursorImg6 = $('.cursor .brand-06');
  let $cursorImg7 = $('.cursor .brand-07');
  let $cursorImg8 = $('.cursor .brand-08');


  $sec5.mousemove(function(e){
    var mouseX = e.pageX;
    var mouseY = e.pageY;
    $cursorImg.css({
        left: mouseX + 180 +"px",
        top : mouseY + 50 +"px"
    })
  })
  $list1.hover(
    function() {
      $list1.addClass('active');
      $cursorImg1.addClass('active');
    }, function() {
      $list1.removeClass('active');
      $cursorImg1.removeClass('active');
    }
  );
  $list2.hover(
    function() {
      $list2.addClass('active');
      $cursorImg2.addClass('active');
    }, function() {
      $list2.removeClass('active');
      $cursorImg2.removeClass('active');
    }
  );
  $list3.hover(
    function() {
      $list3.addClass('active');
      $cursorImg3.addClass('active');
    }, function() {
      $list3.removeClass('active');
      $cursorImg3.removeClass('active');
    }
  );
  $list4.hover(
    function() {
      $list4.addClass('active');
      $cursorImg4.addClass('active');
    }, function() {
      $list4.removeClass('active');
      $cursorImg4.removeClass('active');
    }
  );
  $list5.hover(
    function() {
      $list5.addClass('active');
      $cursorImg5.addClass('active');
    }, function() {
      $list5.removeClass('active');
      $cursorImg5.removeClass('active');
    }
  );
  $list6.hover(
    function() {
      $list6.addClass('active');
      $cursorImg6.addClass('active');
    }, function() {
      $list6.removeClass('active');
      $cursorImg6.removeClass('active');
    }
  );
  $list7.hover(
    function() {
      $list7.addClass('active');
      $cursorImg7.addClass('active');
    }, function() {
      $list7.removeClass('active');
      $cursorImg7.removeClass('active');
    }
  );
  $list8.hover(
    function() {
      $list8.addClass('active');
      $cursorImg8.addClass('active');
    }, function() {
      $list8.removeClass('active');
      $cursorImg8.removeClass('active');
    }
  );
}
$(document).ready(function () {
  se5HoverEvent();
});

// $(document).ready(function(){
    
//   $list1.hover(function(e){
//       var mouseX = e.pageX;
//       var mouseY = e.pageY;
//       console.log('test')

//       $('.cursor').css({
//           left: mouseX + "px",
//           top : mouseY + "px"
//       })
//   })
// })
