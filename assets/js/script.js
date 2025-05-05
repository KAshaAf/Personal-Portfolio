$('.project-cards').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    centerMode: true,
    adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
});

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContent = document.querySelectorAll('.tab-content');
const mobileMenuBtn = document.querySelector('#mobileMenuBtn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

mobileMenuBtn.addEventListener('click', () => {
  const isOpen = menuIcon.src.includes("assets/images/menu.svg");
  menuIcon.src = isOpen ? "assets/images/close.svg" : "assets/images/menu.svg";
  mobileMenu.classList.toggle("hidden");
});

tabButtons.forEach((tabButton, i) => {
    tabButton.addEventListener("click", function(){

        //this will remove styling from the currently active tab
        tabButtons.forEach(tabButton => tabButton.classList.remove("bg-[#f8f4e9]", "text-[#ba8282]","rounded-full"));
        // //this will remove the currently displaying tab content
         tabContent.forEach(tab => tab.classList.add("hidden"));

        // //this will display the selected tabs content
         tabContent[i].classList.remove("hidden");
         tabContent[i].classList.add("block");
        
        // //this will make the selected tab appear as the active tab
        tabButton.classList.add("bg-[#f8f4e9]", "text-[#ba8282]", "rounded-full");
    })
});
