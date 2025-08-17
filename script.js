
document.addEventListener('DOMContentLoaded', () => {
    // Lightbox básico
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('img');
  
    document.querySelectorAll('.img-container img').forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('show');
      });
    });
  
    lightbox.addEventListener('click', e => {
      if (e.target !== lightboxImg) lightbox.classList.remove('show');
    });
  
    // EmailJS
    const btn = document.getElementById('button');
    const form = document.getElementById('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      btn.value = 'Sending...';
  
      const serviceID = 'service_qg9c82k';
      const templateID = 'template_hly3xph';
  
      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Send Message ✅'; // Mensaje de éxito
          form.reset(); // Limpia el formulario después de enviar
        }, (err) => {
          btn.value = 'Please try again'; // Mensaje de error
          alert(JSON.stringify(err));
        });
    });
  
    // Inicializar EmailJS
    emailjs.init('GkLGkRd1yIfCD-MVd');
  
    // Lightbox con navegación
    const images = Array.from(document.querySelectorAll('.img-container img'));
    let currentIndex = 0;
  
    function showLightbox(index) {
      currentIndex = index;
      lightboxImg.src = images[currentIndex].src;
      lightbox.classList.add('show');
    }
  
    images.forEach((img, index) => {
      img.addEventListener('click', () => showLightbox(index));
    });
  
    document.getElementById('prev').addEventListener('click', e => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      lightboxImg.src = images[currentIndex].src;
    });
  
    document.getElementById('next').addEventListener('click', e => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % images.length;
      lightboxImg.src = images[currentIndex].src;
    });
  
    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('show');
    });
  });
  
  function showLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    lightbox.classList.add('show');
  
    // Cambiar color de los botones
    document.getElementById('prev').classList.add('active');
    document.getElementById('next').classList.add('active');
  }
  
  