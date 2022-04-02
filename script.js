const copyrightDate = document.querySelector(".year");
const date = new Date().getFullYear();
copyrightDate.textContent = String(date);

const openIcon = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

openIcon.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});
const links = document.querySelectorAll("a:link");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    //scroll to top of the page
    href === "#" && window.scrollTo({ top: 0, behavior: "smooth" });
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      //scroll to certain view/section in website
      section.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

const heroSection = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (entry.isIntersecting === false) {
      document.body.classList.add(".sticky");
    } else if (entry.isIntersecting === true) {
      document.body.classList.remove(".sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(heroSection);
