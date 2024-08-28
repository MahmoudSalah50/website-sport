document.addEventListener('DOMContentLoaded', function () {
    var carouselElement = document.querySelector('#carouselExampleIndicators');
    var carousel = new bootstrap.Carousel(carouselElement, {
      interval: 5000,  // مدة العرض في كل شريحة بالميلي ثانية
      ride: 'carousel'
    });
  });
  