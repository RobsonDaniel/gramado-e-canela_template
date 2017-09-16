$(document).ready(function() {
  var btnTopo = $("#btn-topo");

  btnTopo.on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 900);
  });

  $(window).on("scroll", function() {
    var janela = $(this),
        altura = janela.height(),
        topo   = janela.scrollTop();

    // console.log(topo);
    // console.log(altura);

    if (topo > altura) {
      btnTopo.fadeIn(300);
    }else {
      btnTopo.fadeOut(300);
    }
  });
});
