const galleryImgRef = document.querySelectorAll('.gallery-img');

// function renderImg(images){
//     images.forEach(image => {
//         image.src = image.dataset.link;
//     })
// }
// renderImg(galleryImgRef);

const options = {
   rootMargin: '20px',
}

const io = new IntersectionObserver((entries, obsrever) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {

         console.log(entry.target);
         entry.target.src = entry.target.dataset.link;
         obsrever.unobserve(entry.target);
      }
   })
}, options)

galleryImgRef.forEach(img => io.observe(img));

