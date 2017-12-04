$(function () {
  // $("body").fadeOut();
});


 $(document).ready(function() {
        $(".popup__content").magnificPopup({type:"inline", midClick: true});

        $(".specials__item").each(function (i) {
          $(this).find("a").attr("href","#receipt_" + i);
          $(this).find(".receipt").attr("id", "receipt_" + i);
        })

        function slowScroll(id) {
          var offset = 0;
          $("html, body").animate ({
            scrollTop: $(id).offset ().top - offset
          }, 1000);
          return false;
        };
      });