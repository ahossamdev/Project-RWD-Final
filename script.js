$(document).ready(() => {
  //typing Animation:
  var typed = new Typed(".job", {
    strings: [
      "Full-Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Full-Stack Developer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
  });

  var typed = new Typed(".typing", {
    strings: [
      "Full-Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Full-Stack Developer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
  });

  $(window).scroll(function () {
    // when scroll nav bar appear
    if (this.scrollY > 15) {
      $(".bckgrd").addClass("sticky");
      $(".folio").css("color", "white");
      $(".navContainer").addClass("sticky");
    } else {
      $(".folio").css("color", "crimson");
      $(".bckgrd").removeClass("sticky");
      $(".navContainer").removeClass("sticky");
    }
  });

  // for toggle menu bar
  $(".navDiv img").click(function () {
    console.log(1);

    $(".navContainer").toggleClass("show");
  });

  $(".navItem").click(function () {
    console.log(2);
    $(".navContainer").toggleClass("show");
  });
});
