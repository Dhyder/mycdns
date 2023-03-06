
  $(document).ready(function () {
    if (window.location.href.indexOf("gallery") > -1) {
      
      // create a new element dynamically
      var feed = "<span class='blure text-black'>Gallery</span>"
      document.getElementById('feedback').innerHTML = feed;
      const newElement = document.querySelector('.blurry');
      
      // get the hoverable element and add event listeners to it
      const geno = document.querySelector('#geno');
      geno.addEventListener('mouseover', () => {
        newElement.style.filter = 'blur(7px)';
      });
      geno.addEventListener('mouseout', () => {
        newElement.style.filter = 'blur(0)';
      });


    }});
  $(document).ready(function () {
    if (window.location.href.indexOf("portfolio") > -1) {
      
      // create a new element dynamically
      var feed = "<span class='blure text-black'>Portfolio</span>"
      document.getElementById('feedback').innerHTML = feed;
      const newElement = document.querySelector('.blurry');
      
      // get the hoverable element and add event listeners to it
      const geno = document.querySelector('#geno');
      geno.addEventListener('mouseover', () => {
        newElement.style.filter = 'blur(7px)';
      });
      geno.addEventListener('mouseout', () => {
        newElement.style.filter = 'blur(0)';
      });


    }});
  $(document).ready(function () {
    if (window.location.href.indexOf("exhibitions") > -1) {
      
      // create a new element dynamically
      var feed = "<span class='blure text-black'>Exhibitions</span>"
      document.getElementById('feedback').innerHTML = feed;
      const newElement = document.querySelector('.blurry');
      
      // get the hoverable element and add event listeners to it
      const geno = document.querySelector('#geno');
      geno.addEventListener('mouseover', () => {
        newElement.style.filter = 'blur(7px)';
      });
      geno.addEventListener('mouseout', () => {
        newElement.style.filter = 'blur(0)';
      });


    }});
  $(document).ready(function () {
    if (window.location.href.indexOf("about") > -1) {
      
      // create a new element dynamically
      var feed = "<span class='blure text-black'>About</span>"
      document.getElementById('feedback').innerHTML = feed;
      const newElement = document.querySelector('.blurry');
      
      // get the hoverable element and add event listeners to it
      const geno = document.querySelector('#geno');
      geno.addEventListener('mouseover', () => {
        newElement.style.filter = 'blur(7px)';
      });
      geno.addEventListener('mouseout', () => {
        newElement.style.filter = 'blur(0)';
      });


    }});
  $(document).ready(function () {
    if (window.location.href.indexOf("blog") > -1) {
      
      // create a new element dynamically
      var feed = "<span class='blure text-black'>Blog</span>"
      document.getElementById('feedback').innerHTML = feed;
      const newElement = document.querySelector('.blurry');
      
      // get the hoverable element and add event listeners to it
      const geno = document.querySelector('#geno');
      geno.addEventListener('mouseover', () => {
        newElement.style.filter = 'blur(7px)';
      });
      geno.addEventListener('mouseout', () => {
        newElement.style.filter = 'blur(0)';
      });


    }});


    
    $(document).ready(function () {
      
      if (window.location.pathname === '/') {
        var element = document.getElementById("hzen");
        element.classList.add("active");
        var feed = "<span class='blure text-black'>Home</span>"
        document.getElementById('feedback').innerHTML = feed;
        document.getElementById('response').style.display = "none";
      } else {
        console.log('This is not the homepage');
      }
    });