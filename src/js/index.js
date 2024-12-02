import Swiper from "swiper/bundle";
import "swiper/css/bundle";

document.addEventListener("DOMContentLoaded", function() {
  // STAGES LIST

  const tabsAll = document.querySelector(".main");

  tabsAll.addEventListener("click", e => {
    if (e.target.classList.contains("svg-open")) {
      const currentTabs = e.target.closest(".tabs-item");
      const currentTabsDesc = currentTabs.querySelector(".tabs-item__desc");
      const currentTabsOpen = currentTabs.querySelector(".svg-open");
      const currentTabsClose = currentTabs.querySelector(".svg-close");

      currentTabs.classList.add("tabs-open");
      currentTabsOpen.style.display = "none";
      currentTabsClose.style.display = "block";
      currentTabsDesc.style.display = "block";
    }

    if (e.target.classList.contains("svg-close")) {
      const currentTabs = e.target.closest(".tabs-item");
      const currentTabsDesc = currentTabs.querySelector(".tabs-item__desc");
      const currentTabsOpen = currentTabs.querySelector(".svg-open");
      const currentTabsClose = currentTabs.querySelector(".svg-close");

      currentTabs.classList.remove("tabs-open");
      currentTabsOpen.style.display = "block";
      currentTabsClose.style.display = "none";
      currentTabsDesc.style.display = "none";
    }
  });

  // card doctor

  const doctorsList = document.querySelector(".doctors-list");

  doctorsList.addEventListener("click", e => {
    const currentBtnDown = e.target.closest(".svg-arrow-down");
    const currentBtnUp = e.target.closest(".svg-arrow-up");

    if (currentBtnDown) {
      const currentCard = e.target.closest(".card-doctor");
      const currentMoreInfo = currentCard.querySelector(
        ".card-doctor_info-more"
      );
      currentMoreInfo.style.display = "block";
    }

    if (currentBtnUp) {
      const currentCard = e.target.closest(".card-doctor");
      const currentMoreInfo = currentCard.querySelector(
        ".card-doctor_info-more"
      );
      currentMoreInfo.style.display = "none";
    }
  });

  const logo = document.querySelector(".logo-block");
  if (logo) {
    logo.addEventListener("click", e => {
      console.log("click");
    });
  }
});

// --------Doctors Slider-------

const doctorsSwiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 1000,
  slidesPerView: 4,
  spaceBetween: 20,
  // effect: "fade",
  // lazy: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true
  // },
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev"
  }
});

// -----POPUP-------

const popUp = document.querySelector(".popup");
const popupClose = popUp.querySelector(".popup__close");
const bodyEl = document.body;

popupClose.addEventListener("click", () => {
  popUp.style.display = "none";
  bodyEl.classList.remove("no-scroll");
});

document.addEventListener("click", e => {
  if (e.target.classList.contains("btn-popup")) {
    popUp.style.display = "block";
    bodyEl.classList.add("no-scroll");
  }
});

// -----POPUP-SUCCESS-------

const popUpSuccess = document.querySelector(".popup__success");
const popupSuccessClose = popUpSuccess.querySelector(".popup__close");

popupSuccessClose.addEventListener("click", () => {
  popUp.style.display = "none";
  popUpSuccess.style.display = "none";
  bodyEl.classList.remove("no-scroll");
});

document.addEventListener("click", e => {
  if (e.target.classList.contains("btn-success")) {
    popUpSuccess.style.display = "block";
    bodyEl.classList.add("no-scroll");
  }
});

// -----SCROLL-------

document.querySelectorAll("a.smooth-scroll").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,

        behavior: "smooth"
      });
    }
  });
});

// ------VIDEO-------

const myVideo = document.getElementById("video1");
const videoContainer = document.querySelector(".video-container");
const playButton = videoContainer.querySelector(".play-btn");

videoContainer.addEventListener("click", e => {
  if (playButton) {
    playButton.addEventListener("click", playPause);
  }
});

function playPause(el) {
  if (myVideo.paused) myVideo.play();
  else myVideo.pause();
}

// ------MOBILE-MENU-------

const closeMobileMenu = document.querySelector(".btn-close_mobile");
const openMobileMenu = document.querySelector("#open");
const mobileMenu = document.querySelector(".mobile-menu");

openMobileMenu.addEventListener("click", e => {
  mobileMenu.style.display = "flex";
  openMobileMenu.style.display = "none";
  closeMobileMenu.style.display = "block";
  bodyEl.classList.add("no-scroll");
});

closeMobileMenu.addEventListener("click", e => {
  mobileMenu.style.display = "none";
  openMobileMenu.style.display = "block";
  closeMobileMenu.style.display = "none";
  bodyEl.classList.remove("no-scroll");
});
