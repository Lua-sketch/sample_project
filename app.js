const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar .dropdown button')
  const navLinksExtra = document.querySelectorAll('.navbar .dropdown a')
  burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        navLinksExtra.forEach((link, index)=>{
          if (link.style.animation) {
              link.style.animation = ""
          } else {
              link.style.animation = `navLinkExtraFade ease forwards`;
          }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
}

navSlide();
