$(document).ready(function () {
  var currentSlide = 0; // Başlangıç slaytı
  var totalSlides = $('.thumbnails img').length; // Toplam slayt sayısı

  // Varsayılan olarak ilk resmi göster
  showImage(0);

  // Küçük resimlere tıklandığında büyük resmi göster
  $('.thumbnails img').click(function () {
    var index = $(this).data('index');
    showImage(index);
  });

  function showImage(index) {
    // Büyük resmi güncelle
    var imagePath = 'img/galeri' + (index + 1) + '.jpg';
    $('#mainImg').attr('src', imagePath);

    // Seçilen küçük resmi vurgula
    $('.thumbnails img').removeClass('selected');
    $('.thumbnails img[data-index="' + index + '"]').addClass('selected');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showImage(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showImage(currentSlide);
  }

  // Event listeners for buttons
  document.getElementById('prevButton').addEventListener('click', prevSlide);
  document.getElementById('nextButton').addEventListener('click', nextSlide);
});
