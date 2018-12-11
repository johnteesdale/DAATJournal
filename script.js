$(document).ready(function(){

  var windowWidth = $(window).width();
  var lightboxMargin = (windowWidth*.3)/2;
  var videoMargin = ((windowWidth-1100)/2);

  function setVideoSize(){
    var videoWidth = ($(window).width())*.9;
    console.log(videoWidth);
    var videoHeight = Math.floor(videoWidth/1.77);
    $("iframe").css({"width": videoWidth, "height": videoHeight})
    return["work"];
  };

  function close(){
  $("#closeVideo").fadeIn(300)
  };

  function closeVideo(){
    setTimeout(close, 3000);
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

  $(".thumbnail").click(function(){
    var imageId = $(this).attr("id");
    var n = $(this).attr("imageId");
    $("#lightboxBackground").css({"opacity": ".3"});
    closeLightbox();
    $("#"+imageId+"Large").fadeIn(300);
    $("#close").fadeIn(300);
    $("#next").fadeIn(300);
    $("#previous").fadeIn(300);
    console.log(lightboxMargin);
    console.log(imageId);
    console.log(n);
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
    $("#next").fadeOut(300);
    $("#previous").fadeOut(300);
  });


  $("#next").click(function(){
    $("#lightboxBackground").css("opacity", "1");
    closeLightbox();
    $("#close").fadeOut(300);
    $("iframe").fadeOut(300);
    var jf = $(".thumbnail").css("display");
    console.log(jf);
  });

  $(".lightbox").click(function(){
    var n = $(this).attr("imageId");
    console.log(n);
    n = parseInt(n);
    console.log('parsework');
    $("#image"+n+"Large").fadeOut(300);
    n = n+1;
    console.log(n);
    $("#image"+n+"Large").fadeIn(300);
    if (n = 11){
      n = 1;
    }
  });

  /*function imageNumber() {
    $(".thumbnail").click(function(){
      var n = $(this).attr("imageId");
      var jf = $(".thumbnail").css("display");
      console.log(jf);
      console.log(n);
      return n;
    });
    return fuck;
  }*/

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
    $(".navItem").css("color", "white");
    $("#week1Link").css("color", "#c2882c");
    console.log("work");
  });

  $("#week2Link").click(function(){
    hideJournals();
    $("#week2").show();
    $(".navItem").css("color", "white");
    $("#week2Link").css("color", "#c2882c");
    console.log("work");
  });

  $("#week3Link").click(function(){
    hideJournals();
    $("#week3").show();
    $(".navItem").css("color", "white");
    $("#week3Link").css("color", "#c2882c");
    console.log("work");
  });

  $("#week4Link").click(function(){
    hideJournals();
    $("#week4").show();
    $(".navItem").css("color", "white");
    $("#week4Link").css("color", "#c2882c");
    console.log("work");
  });

  $("#week5Link").click(function(){
    hideJournals();
    $("#week5").show();
    $(".navItem").css("color", "white");
    $("#week5Link").css("color", "#c2882c");
    console.log("work");
  });

  $("#week6Link").click(function(){
    hideJournals();
    $("#week6").show();
    $(".navItem").css("color", "white");
    $("#week6Link").css("color", "#c2882c");
    console.log("work");
  });

  $("#week7Link").click(function(){
    hideJournals();
    $("#week7").show();
    $(".navItem").css("color", "white");
    $("#week7Link").css("color", "#c2882c");
    console.log("work");
  });

  $("#week8Link").click(function(){
    hideJournals();
    $("#week8").show();
    $(".navItem").css("color", "white");
    $("#week8Link").css("color", "#c2882c");
    console.log("work");
  });

  $("#week9Link").click(function(){
    hideJournals();
    $("#week9").show();
    $(".navItem").css("color", "white");
    $("#week9Link").css("color", "#c2882c");
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

  $("#week12Link").click(function(){
    hideJournals();
    $("#week12").show();
    console.log("work");
  });

});
