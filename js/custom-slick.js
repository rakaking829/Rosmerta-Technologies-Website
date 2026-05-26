$(document).ready(function() {
  $(".multiple-items").slick({
     autoplay: true,
     autoplaySpeed: 5000,
     dots: true,
     infinite: true,
     speed: 900,
     slidesToShow: 4,
     slidesToScroll: 4,
     responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1
      }
    }
  ]
 });
 });

//   logo slider

$(document).ready(function(){
  $('.your-class').slick({
    infinite: true,
    slidesToShow: 6,    
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 4
        }
      },

     {
       breakpoint: 768,
       settings: {
         slidesToShow: 2
       }
     },
     {
       breakpoint: 550,
       settings: {
         slidesToShow: 1
       }
     }
   ],
  });
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  $('.your-class').slick('setPosition');
})


$(document).ready(function() {
  $(".glimpses-items").slick({
     autoplay: true,
     autoplaySpeed: 5000,
     dots: true,
     infinite: true,
     speed: 900,
     slidesToShow: 2,
     slidesToScroll: 1,
     responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1
      }
    }
  ]
 });
 });

 $(document).ready(function() {
  $(".related-items").slick({
     autoplay: true,
     autoplaySpeed: 5000,
     dots: true,
     infinite: true,
     speed: 900,
     slidesToShow: 3,
     slidesToScroll: 1,
     responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1
      }
    }
  ]
 });
 });