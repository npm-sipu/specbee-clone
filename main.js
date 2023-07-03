const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const primaryHeader = document.querySelector(".primary-header");
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const scrollWatcher = document.createElement("div");

navToggle.addEventListener("click", () => {
  const isPrimaryNavVisible = primaryNav.hasAttribute("data-visible");

  if (isPrimaryNavVisible) {
    navToggle.setAttribute("aria-expanded", false);
    primaryHeader.removeAttribute("data-overlay");
    primaryNav.removeAttribute("data-visible");
    mobileNavToggle.removeAttribute("data-visible");
    enableScroll();
  } else {
    navToggle.setAttribute("aria-expanded", true);
    primaryHeader.setAttribute("data-overlay", "");
    primaryNav.setAttribute("data-visible", "");
    mobileNavToggle.setAttribute("data-visible", "");
    disableScroll();
  }
});

function disableScroll() {
  document.body.classList.add("no-scroll");
  document.addEventListener("touchmove", preventDefault);
}

function enableScroll() {
  document.body.classList.remove("no-scroll");
  document.removeEventListener("touchmove", preventDefault);
}

function preventDefault(event) {
  event.preventDefault();
}

scrollWatcher.setAttribute("data-scroll-watcher", "");
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver(
  (entries) => {
    primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting);
  },
  { rootMargin: "150px 0px 0px 0px" }
);

navObserver.observe(scrollWatcher);
