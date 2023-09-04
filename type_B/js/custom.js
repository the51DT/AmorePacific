//   const progressLine1 = document.querySelector(".swiper1 .bar svg");
//   const progressLine2 = document.querySelector(".swiper3 .bar svg");
const swiper1 = new Swiper(".swiper1", {
  // Optional parameters
  loop: true,
  // autoplay: {
  //     delay:5000,
  //     disableOnInteraction: false,
  // },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
    type: "custom",
    renderCustom: function (swiper, current, total) {
      return (
        '<div class="current">' +
        current +
        "</div>" +
        '<div class="total">' +
        total +
        "</div>"
      );
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  /* scrollbar: {
                el: '.swiper-scrollbar',
            }, */

  // on: {
  //     autoplayTimeLeft(s, time, progress) {
  //         progressLine1.style.setProperty("--progress", 1 - progress)
  //     }
  // }
});

const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 20,
  loopAdditionalSlides: 3,
  // centeredSlides: true,
  loop: true,
  loopedSlides: 1,
  // autoplay: {
  //   delay: 0,
  //   disableOnInteraction: true,
  // },
  // speed: 5000,
  // If we need pagination
  /* pagination: {
                el: '.swiper-pagination',
            }, */

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  /* scrollbar: {
                el: '.swiper-scrollbar',
            }, */
});

const img_list = document.querySelectorAll(".img");
img_list.forEach((el) => {
  el.addEventListener("mouseover", () => {
    el.closest(".img_slide").querySelector(".img_dim").style.display = "flex";
    //   swiper2.speed = 0;
    //   swiper2.autoplay.stop();
    //   document.querySelector(".swiper2 .swiper-wrapper").style.transition =
    //     "ease-in-out";
  });
  el.addEventListener("mouseleave", () => {
    el.closest(".img_slide").querySelector(".img_dim").style.display = "none";
  });
});

const swiper3 = new Swiper(".swiper3", {
  // Optional parameters
  loop: true,
  // autoplay: {
  //     delay:3000,
  //     disableOnInteraction: false,
  // },
  // If we need pagination
  // pagination: {
  //     el: '.swiper-pagination',
  //     clickable: false,
  //     type: "custom",
  //     renderCustom: function (swiper, current, total) {
  //         return (
  //             '<div class="current">' + (current) + '</div>' + '<div class="total">' + (total) + '</div>'
  //         );
  //     }
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  /* scrollbar: {
                el: '.swiper-scrollbar',
            }, */

  on: {
    autoplayTimeLeft(s, time, progress) {
      progressLine2.style.setProperty("--progress", 1 - progress);
    },
  },
});

const img_cont = document.querySelectorAll(".img_item");
img_cont.forEach((el) => {
  el.addEventListener("mouseover", () => {
    el.querySelector(".img_dim").style.display = "flex";
  });
  el.addEventListener("mouseleave", () => {
    el.querySelector(".img_dim").style.display = "none";
  });
});

const cont_list = document.querySelectorAll(".cont_wrap");
cont_list.forEach((el) => {
  el.addEventListener("mouseover", () => {
    swiper4.autoplay.stop();
    document.querySelector(".swiper-wrapper").style.transition = "ease-in-out";
  });
});

const swiper = new Swiper(".swiper7", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const observerFn = () => {
  // let options = {
  //   root: null,
  //   threshold: [0.25],
  // };
  // options에 따라 인스턴스 생성
};
let observer = new IntersectionObserver(
  function (entries, observer) {
    console.log("entries", entries);
    console.log("observer", observer);
    entries[0].target.querySelector(".moving_part")?.classList.add("on");
  },
  {
    root: document.getElementById("my-viewport"),
    threshold: [0.2],
  }
);

// 타겟 요소 관찰 시작
let targets = document.querySelectorAll(".ob_parts");
targets.forEach((taregt) => {
  // console.log(taregt);
  observer.observe(taregt);
});
// if (document.querySelectorAll(".ob_parts").length > 0) {
//   observerFn();
// }

const btn_toggle = document.querySelector('.btn_ham')
const menu = document.querySelector('.header_menu')
const ham_menu = document.querySelectorAll('.ham_menu')
const header = document.querySelector('header')
btn_toggle.addEventListener("click", ()=>{
    if(btn_toggle.classList.contains('on')){
        btn_toggle.classList.remove('on')
        menu.classList.remove('on')
        menu.style.opacity = "0"
        btn_toggle.src = './img/moMenu.png'
        document.documentElement.style.setProperty('--height', '0');
        header.style.backgroundColor = "transparent"
        document.querySelector('html, body').style.overflow = "auto"
      }
    else{
        btn_toggle.classList.add('on')
        menu.classList.add('on')
        menu.style.visibility = "visible"
        menu.style.opacity = "1"
        btn_toggle.src = './img/btn_close.svg'
        document.documentElement.style.setProperty('--height', '100vh');
        header.style.backgroundColor = "#131313"
        document.querySelector('html, body').style.overflow = "hidden"
      }
})
ham_menu.forEach((el)=>{
    el.addEventListener("click", ()=>{
        if(el.classList.contains('on')){
            el.classList.remove('on')
            el.closest('.menu_list').querySelector('.menu').style.visibility = "hidden"
            el.closest('.menu_list').querySelector('.menu').style.height = "0"
            el.querySelector('.arrow').style.transform = 'rotate(0deg)'
        }
        else{
            el.classList.add('on')
            console.log(header)
            el.closest('.menu_list').querySelector('.menu').style.visibility = "visible"
            el.closest('.menu_list').querySelector('.menu').style.height = "100%"
            el.querySelector('.arrow').style.transform = 'rotate(180deg)'
        }
    })
})