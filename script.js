$(document).ready(function() {
  //code adapted on 23/11/17 from
  // https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2

  $("#about").click(function() {
    $("html, body").animate({
      scrollTop: $("#about2").offset().top
    }, 800);
  });

  $("#portfolio").click(function() {
    $("html, body").animate({
      scrollTop: $("#portfolio2").offset().top
    }, 800);
  });

  $("#contact").click(function() {
    $("html, body").animate({
      scrollTop: $("#contact2").offset().top
    }, 800);
  });

  $("#solidity-btn").click(function() {
    $("html, body").animate({
      scrollTop: $("#solidity").offset().top
    }, 800);
  });

  $("#node-btn").click(function() {
    $("html, body").animate({
      scrollTop: $("#node").offset().top
    }, 800);
  });

  $("#d3-btn").click(function() {
    $("html, body").animate({
      scrollTop: $("#d3").offset().top
    }, 800);
  });

  $("#react-btn").click(function() {
    $("html, body").animate({
      scrollTop: $("#react").offset().top
    }, 800);
  });

  $("#jquery-btn").click(function() {
    $("html, body").animate({
      scrollTop: $("#jquery").offset().top
    }, 800);
  });

});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("topBtn").style.display = "block";
  } else {
      document.getElementById("topBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
