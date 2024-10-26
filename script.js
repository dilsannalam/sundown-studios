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
