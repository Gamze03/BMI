// Fancybox.bind('[data-fancybox="play"]', {

// });

Fancybox.bind('[data-fancybox]', {

});


if (document.querySelector(".counter-span")) {
    let Item = document.querySelectorAll(".item");
    let valueDisplays = document.querySelectorAll(".counter-span");
    let duration = 20;
    let counterStatus = Array(Item.length).fill(false);
  
    window.addEventListener("scroll", () => {
      Item.forEach((item, index) => {
        let position = item.offsetTop - 600;
        if (window.scrollY > position) {
          counterStatus[index] = true;
        }
      });
    });
  
    valueDisplays.forEach((valueDisplays, index) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplays.getAttribute("data-val"));
      let remainder = 0;
      let counter = setInterval(function () {
        if (counterStatus[index] == true) {
          if(endValue < 100){
            startValue += 1;
          }else if(endValue > 100 && endValue < 1000){
            startValue += 10;
            remainder = endValue % 10;
            endValue = endValue - remainder;
          }else if(endValue > 1000){
            startValue += 25;
            remainder = endValue % 25;
            endValue = endValue - remainder;
          }
          valueDisplays.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
            valueDisplays.textContent = valueDisplays.getAttribute("data-val") + '+'
          }
        }
      }, duration);
});
}


// let bottomNav = document.querySelector('.links-wrapper');
// // let navPixel = bottomNav.offsetTop;

// window.addEventListener('scroll', function(){
//     if(this.scrollY > 200){
//         linksWrapper.classList.add('fixed-top')
//     }else{
//       linksWrapper.classList.remove('fixed-top');
//     }
// })

let shareButton = document.querySelectorAll(".share-button");
let hideIcon = document.querySelectorAll(".hide-icon");

shareButton.forEach((btn, index) => {
  btn.addEventListener('click',function(){
    hideIcon[index].classList.toggle('d-none');
  })
}
)



if (document.querySelector('.gallery-buttons')) {
  let galleryButtons = document.querySelectorAll('.gallery-buttons button');
  let galleryWrapper = document.querySelectorAll('.gallery-wrapper');

  galleryButtons[0].classList.add('active');
  galleryWrapper[0].classList.remove('d-none');

  galleryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      let category = button.getAttribute('data-category');
      // buttona active class elave etmek
      for (let i = 0; i < galleryButtons.length; i++) {
        galleryButtons[i].classList.remove('active');
      }
      button.classList.add('active');

      // aktiv konteyneri acmaq
      for (let i = 0; i < galleryWrapper.length; i++) {
        galleryWrapper[i].classList.add('d-none');
      }
      let activeWrapper = Array.from(galleryWrapper).find((container) => container.getAttribute('data-category') === category);
      activeWrapper.classList.remove('d-none');
    })
  })
}