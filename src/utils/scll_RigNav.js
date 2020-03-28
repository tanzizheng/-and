const scll_RigNav = function () {
  var btn_bg = $("#Rimg");
  var btn_nav = $(".Right-nav li");
  var flbox = $(".nav-menu");
  var nav = $(".nav");
  var box = $(".mainbox");
  flbox.click(function () {
    btn_bg.animate(
      {
        width:"40%"
      },
      500
    );
    box.animate(
      {
        right: "40%"
      },
      "500"
    );
    nav.animate(
      {
        right: "0px"
      },
      "500"
    );
    btn_bg.css("display", "block");
    nav.css("display", "block");
    $(".mainboxbg").css("display", "block");
    return;
  });
  $(".mainboxbg").click(function () {
    box.animate(
      {
        right: "0"
      },
      "500"
    );
    btn_bg.animate(
      {
        width:"0"
      },
      500
    );
    nav.animate(
      {
        right: "-40%"
      },
      "500"
    );
    $(this).hide();
    return;
  });
  btn_nav.click(function () {
    box.animate(
      {
        right: "0"
      },
      "500"
    );
    nav.animate(
      {
        right: "-40%"
      },
      "500"
    );
    btn_bg.animate(
      {
        width:"0"
      },
      500
    );
    $(".mainboxbg").hide();
    return;
  })
}
// 抛出
export default scll_RigNav
