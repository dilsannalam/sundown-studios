function imageswap(){
    // Your existing code
    var elemC = document.querySelector("#elemcontainer");
    var fixed = document.querySelector("#fixedimage");
  
    elemC.addEventListener("mouseenter", function() {
      fixed.style.display = "block";
    });
  
    elemC.addEventListener("mouseleave", function() {
      fixed.style.display = "none";
    });
  
    var elems = document.querySelectorAll(".elem");
  
    elems.forEach(function(e) {
      e.addEventListener("mouseover", function(event) {
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`;
        fixed.style.pointerEvents = "none";
        event.stopPropagation();
      });
  
      e.addEventListener("mouseout", function() {
        fixed.style.backgroundImage = "";
      });
    });
  
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector('main'),
      smooth: true,
      // Add any other options you want to customize
    });
  
    // Update scroll on window resize
    window.addEventListener('resize', () => {
      scroll.update();
    });
  
    function debounce(func, wait) {
      let timeout;
      return function(...args) {
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }
  
    // Update Locomotive Scroll after all content is loaded
    window.addEventListener('load', () => {
      scroll.update();
    });
  
    const updateFixedImage = debounce(() => {
      // Your existing code to update the fixed image with the new source
    }, 10); // Debounce for 10 milliseconds
  
}

imageswap()


function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 50,
  });
}

// Initialize the Swiper slider
swiperAnimation();

// Select all h2 elements and paragraphs within #blackbox #left3
var allh2 = document.querySelectorAll("#blackbox #left3 h2");
var allParagraphs = document.querySelectorAll("#blackbox #left3 p");

// Function to change h2 styles and show corresponding paragraph on click
function onclickchange() {
  allh2.forEach((h2, index) => {
    h2.addEventListener("click", function() {
      // Update styles for clicked h2
      this.style.color = "white";
      this.style.borderLeft = "3px solid #fe330a";
      
      // Reset styles of other h2 elements
      allh2.forEach((otherH2, otherIndex) => {
        if (otherH2 !== this) {
          otherH2.style.color = "#504a45";
          otherH2.style.borderLeft = "3px solid #504a45";
        }
        
        // Hide all paragraphs
        allParagraphs[otherIndex].style.display = "none";
      });

      // Show the corresponding paragraph
      allParagraphs[index].style.display = "block";
    });
  });
}

// Call the function to set up the click events
onclickchange();