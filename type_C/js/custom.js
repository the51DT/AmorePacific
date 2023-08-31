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
