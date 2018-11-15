$(document).ready(function(){

  var windowWidth = $(window).width();
  var lightboxMargin = (windowWidth*.3)/2;
  var videoMargin = ((windowWidth-1100)/2);

  function setVideoSize(){
    var videoWidth = $(window).width();
    console.log(videoWidth);
    var videoHeight = Math.floor(videoWidth/1.77);
    $("iframe").css({"width": videoWidth, "height": videoHeight})
    return["work"];
  };

  function close(){
  $("#closeVideo").fadeIn(300)
  };

  function closeVideo(){
    setTimeout(close, 105000);
    console.log("work");
    return["work"];
  };

  setVideoSize();

  $("#customLogo").click(function(){
    $("iframe").fadeIn(300);
    closeVideo();
    console.log("work");
  });

  $("#closeVideo").click(function(){
    $("iframe").fadeOut(300);
    $("#closeVideo").fadeOut(300);
    console.log("work");
  })

  $("#image1").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    closeLightbox();
    $("#image1Large").fadeIn(300);
    $("#close").fadeIn(300);
    console.log(lightboxMargin);
  });

  $("#image2").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    closeLightbox();
    $("#image2Large").fadeIn(300);
    $("#close").fadeIn(300);
    console.log(lightboxMargin);
  });

  $("#image3").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    closeLightbox();
    $("#image3Large").fadeIn(300);
    $("#close").fadeIn(300);
    console.log(lightboxMargin);
  });

  $("#image4").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    closeLightbox();
    $("#image4Large").fadeIn(300);
    $("#close").fadeIn(300);
    console.log(lightboxMargin);
  });

  $("#image5").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    closeLightbox();
    $("#image5Large").fadeIn(300);
    $("#close").fadeIn(300);
    console.log(lightboxMargin);
  });

  $("#image6").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    closeLightbox();
    $("#image6Large").fadeIn(300);
    $("#close").fadeIn(300);
    console.log(lightboxMargin);
  });

  $("#image7").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    closeLightbox();
    $("#image7Large").fadeIn(300);
    $("#close").fadeIn(300);
    console.log(lightboxMargin);
  });

  $("#image8").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    closeLightbox();
    $("#image8Large").fadeIn(300);
    $("#close").fadeIn(300);
    console.log(lightboxMargin);
  });

  $("#image9").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    closeLightbox();
    $("#image9Large").fadeIn(300);
    $("#close").fadeIn(300);
    console.log(lightboxMargin);
  });

  $("#image10").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    closeLightbox();
    $("#image10Large").fadeIn(300);
    $("#close").fadeIn(300);
    console.log(lightboxMargin);
  });

  $("#image11").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    closeLightbox();
    $("#image11Large").fadeIn(300);
    $("#close").fadeIn(300);
    console.log(lightboxMargin);
  });

  $("#image12").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    closeLightbox();
    $("#image12Large").fadeIn(300);
    $("#close").fadeIn(300);
    console.log(lightboxMargin);
  });

  function closeLightbox() {
    $("#image1Large").fadeOut(300);
    $("#image2Large").fadeOut(300);
    $("#image3Large").fadeOut(300);
    $("#image4Large").fadeOut(300);
    $("#image5Large").fadeOut(300);
    $("#image6Large").fadeOut(300);
    $("#image7Large").fadeOut(300);
    $("#image8Large").fadeOut(300);
    $("#image9Large").fadeOut(300);
    $("#image10Large").fadeOut(300);
    $("#image11Large").fadeOut(300);
    $("#image12Large").fadeOut(300);
  };

  $("#close").click(function(){
    $("#lightboxBackground").css("opacity", "1");
    closeLightbox();
    $("#close").fadeOut(300);
    $("iframe").fadeOut(300);
  });

  function hideJournals(){
    $("#week1").hide();
    $("#week2").hide();
    $("#week3").hide();
    $("#week4").hide();
    $("#week5").hide();
    $("#week6").hide();
    $("#week7").hide();
    $("#week8").hide();
    $("#week9").hide();
    $("#week10").hide();
    $("#week11").hide();
    $("#week12").hide();
    $("#week13").hide();
  }

  $("#week1Link").click(function(){
    hideJournals();
    $("#week1").show();
    console.log("work");
  });

  $("#week2Link").click(function(){
    hideJournals();
    $("#week2").show();
    console.log("work");
  });

  $("#week3Link").click(function(){
    hideJournals();
    $("#week3").show();
    console.log("work");
  });

  $("#week4Link").click(function(){
    hideJournals();
    $("#week4").show();
    console.log("work");
  });

  $("#week5Link").click(function(){
    hideJournals();
    $("#week5").show();
    console.log("work");
  });

  $("#week6Link").click(function(){
    hideJournals();
    $("#week6").show();
    console.log("work");
  });

  $("#week7Link").click(function(){
    hideJournals();
    $("#week7").show();
    console.log("work");
  });

  $("#week8Link").click(function(){
    hideJournals();
    $("#week8").show();
    console.log("work");
  });

  $("#week9Link").click(function(){
    hideJournals();
    $("#week9").show();
    console.log("work");
  });

  $("#week10Link").click(function(){
    hideJournals();
    $("#week10").show();
    console.log("work");
  });

  $("#week11Link").click(function(){
    hideJournals();
    $("#week11").show();
    console.log("work");
  });

});
