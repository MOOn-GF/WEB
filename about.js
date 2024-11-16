let img1 = document.querySelector(".img1");
 let img2 = document.querySelector(".img2");

 const timerId = setTimeout(() => {
     img1.classList.toggle("active1");
      img2.classList.toggle("active2"); 
    
    }, 4000);
  
    const preloader = document.getElementById('preloader'); 
    const content = document.getElementById('content');
    setTimeout(() => {
        preloader.style.display = 'none';
        content.style.display = 'block';
        }, 3000);