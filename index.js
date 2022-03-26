const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')
const mobileMenu = document.getElementById('mobile-container')

menuBtn.addEventListener('click', () => {
   menuBtn.style.display = "none"
   closeBtn.style.display = "block"
   mobileMenu.style.display = "block"
})


closeBtn.addEventListener('click', () => {
   menuBtn.style.display = "block"
   closeBtn.style.display = "none"
   mobileMenu.style.display = "none"
})

