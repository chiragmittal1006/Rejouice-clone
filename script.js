function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

init();

const mousefollower = () => {
  const follower = document.querySelector(".follow");
  const page1 = document.querySelector(".page1");

  page1.addEventListener("mousemove", function (dets) {
    gsap.to(follower, {
      left: dets.x - 50,
      top: dets.y - 50,
      duration: 0.6,
    });
  });

  page1.addEventListener("mouseenter", () => {
    gsap.to(follower, {
      scale: 1,
    });
  });

  page1.addEventListener("mouseleave", () => {
    gsap.to(follower, {
      scale: 0,
    });
  });
};

mousefollower();

const word = document.querySelectorAll(".content span");

var tl = gsap.timeline();

tl.from(".loader p", {
  x: "40px",
  opacity: 0,
  duration: 1,
});
tl.to(".loader p", {
  x: "-40px",
  opacity: 0,
  duration: 1,
});

tl.to(".loader", {
  opacity: 0,
  duration: 1,
});

tl.to(".loader", {
  display: "none",
});

tl.from(".content span", {
  y: "100px",
  stagger: 0.2,
  opacity: 0,
});

gsap.from(".page2-head .left , .page2-head .right", {
  y: "100px",
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: ".page2",
    scroller: ".main",
    start: "top 80%",
    end: "top 60%",
    scrub: 2,
    ease: "power1.inOut",
  },
});

gsap.from(".page2-part2", {
  y: "100px",
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: ".page2-part2",
    scroller: ".main",
    start: "top 80%",
    end: "top 60%",
    scrub: 2,
    ease: "power1.inOut",
  },
});

gsap.from(".page2-part4", {
  y: "100px",
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: ".page2-part4",
    scroller: ".main",
    start: "top 90%",
    end: "top 80%",
    scrub: 2,
    ease: "power1.inOut",
  },
});

var video1 = document.getElementById("myVideo1");
var video2 = document.getElementById("myVideo2");
var video3 = document.getElementById("myVideo3");

function playVideo1() {
  video1.play();
}
function playVideo2() {
  video2.play();
}
function playVideo3() {
  video3.play();
}

function pauseVideo1() {
  video1.pause();
}
function pauseVideo2() {
  video2.pause();
}
function pauseVideo3() {
  video3.pause();
}

gsap.from(".page4-top", {
  y: "100px",
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: ".page4-part2",
    scroller: ".main",
    start: "top 60%",
    end: "top 40%",
    scrub: 2,
    ease: "power1.inOut",
  },
});

gsap.from(".page4-part2", {
  y: "100px",
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: ".page4-part2",
    scroller: ".main",
    start: "top 60%",
    end: "top 40%",
    scrub: 2,
    ease: "power1.inOut",
  },
});

gsap.to(".page6", {
  y: 400,
  duration: 2,
  scrollTrigger: {
    trigger: ".page5",
    scroller: ".main",
    start: "top -20%",
    end: "top -70%",
    scrub: 2,
    ease: "power1.inOut",
  },
});

gsap.from(".page6-p2 span", {
  y: -100,
  stagger: 0.4,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page6-p2",
    scroller: ".main",
    start: "top 30%",
    end: "top 15%",
    scrub: 2,
    ease: "power1.inOut",
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
