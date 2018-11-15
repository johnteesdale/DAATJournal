$(document).ready(function(){

  var windowWidth = $(window).width();
  var lightboxMargin = (windowWidth*.3)/2;
  var videoMargin = ((windowWidth-1100)/2);

  function setVideoSize(){
    var windowWidth2 = $(window).width();
    var videoMargin = ((windowWidth2-1100)/2);
    $("#video").css("left", videoMargin);
    console.log(videoMargin);
    return[videoMargin];
  };

  $("#customLogo").click(function(){
    $("iframe").css({"z-index": "10", "opacity": "1"});
    console.log("work");
  });

  $("#image1").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    $("#image1Large").css({"display": "block", "position": "absolute", "margin-left": lightboxMargin, "opacity": "1"});
    $("#close").css("display", "block");
    console.log(lightboxMargin);
  });

  $("#image2").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    $("#image2Large").css({"display": "block", "position": "absolute", "margin-left": lightboxMargin, "opacity": "1"});
    $("#close").css("display", "block");
    console.log(lightboxMargin);
  });

  $("#image3").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    $("#image3Large").css({"display": "block", "position": "absolute", "margin-left": lightboxMargin, "opacity": "1"});
    $("#close").css("display", "block");
    console.log(lightboxMargin);
  });

  $("#image4").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    $("#image4Large").css({"display": "block", "position": "absolute", "margin-left": lightboxMargin, "opacity": "1"});
    $("#close").css("display", "block");
    console.log(lightboxMargin);
  });

  $("#image5").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    $("#image5Large").css({"display": "block", "position": "absolute", "margin-left": lightboxMargin, "opacity": "1"});
    $("#close").css("display", "block");
    console.log(lightboxMargin);
  });

  $("#image6").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    $("#image6Large").css({"display": "block", "position": "absolute", "margin-left": lightboxMargin, "opacity": "1"});
    $("#close").css("display", "block");
    console.log(lightboxMargin);
  });

  $("#image7").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    $("#image7Large").css({"display": "block", "position": "absolute", "margin-left": lightboxMargin, "opacity": "1"});
    $("#close").css("display", "block");
    console.log(lightboxMargin);
  });

  $("#image8").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    $("#image8Large").css({"display": "block", "position": "absolute", "margin-left": lightboxMargin, "opacity": "1"});
    $("#close").css("display", "block");
    console.log(lightboxMargin);
  });

  $("#image9").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    $("#image9Large").css({"display": "block", "position": "absolute", "margin-left": lightboxMargin, "opacity": "1"});
    $("#close").css("display", "block");
    console.log(lightboxMargin);
  });

  $("#image10").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    $("#image10Large").css({"display": "block", "position": "absolute", "margin-left": lightboxMargin, "opacity": "1"});
    $("#close").css("display", "block");
    console.log(lightboxMargin);
  });

  $("#image11").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    $("#image11Large").css({"display": "block", "position": "absolute", "margin-left": lightboxMargin, "opacity": "1"});
    $("#close").css("display", "block");
    console.log(lightboxMargin);
  });

  $("#image12").click(function(){
    $("#lightboxBackground").css({"opacity": ".3"});
    $("#image12Large").css({"display": "block", "position": "absolute", "margin-left": lightboxMargin, "opacity": "1"});
    $("#close").css("display", "block");
    console.log(lightboxMargin);
  });

  $("#close").click(function(){
    $("#lightboxBackground").css("opacity", "1");
    $("#image1Large").css("display", "none");
    $("#image2Large").css("display", "none");
    $("#image3Large").css("display", "none");
    $("#image4Large").css("display", "none");
    $("#image5Large").css("display", "none");
    $("#image6Large").css("display", "none");
    $("#image7Large").css("display", "none");
    $("#image8Large").css("display", "none");
    $("#image9Large").css("display", "none");
    $("#image10Large").css("display", "none");
    $("#image11Large").css("display", "none");
    $("#image12Large").css("display", "none");
    $("#close").css("display", "none");
  });

  function hideJournals(){
    $("#week1").css("display", "none");
    $("#week2").css("display", "none");
    $("#week3").css("display", "none");
    $("#week4").css("display", "none");
    $("#week5").css("display", "none");
    $("#week6").css("display", "none");
    $("#week7").css("display", "none");
    $("#week8").css("display", "none");
    $("#week9").css("display", "none");
    $("#week10").css("display", "none");
    $("#week11").css("display", "none");
    $("#week12").css("display", "none");
    $("#week13").css("display", "none");
  }

  $("#week1Link").click(function(){
    hideJournals();
    $("#week1").css("display", "inline-block");
    console.log("work");
  });

  $("#week2Link").click(function(){
    hideJournals();
    $("#week2").css("display", "inline-block");
    console.log("work");
  });

  $("#week3Link").click(function(){
    hideJournals();
    $("#week3").css("display", "inline-block");
    console.log("work");
  });

  $("#week4Link").click(function(){
    hideJournals();
    $("#week4").css("display", "inline-block");
    console.log("work");
  });

  $("#week5Link").click(function(){
    hideJournals();
    $("#week5").css("display", "inline-block");
    console.log("work");
  });

  $("#week6Link").click(function(){
    hideJournals();
    $("#week6").css("display", "inline-block");
    console.log("work");
  });

  $("#week7Link").click(function(){
    hideJournals();
    $("#week7").css("display", "inline-block");
    console.log("work");
  });

  $("#week8Link").click(function(){
    hideJournals();
    $("#week8").css("display", "inline-block");
    console.log("work");
  });

  $("#week9Link").click(function(){
    hideJournals();
    $("#week9").css("display", "inline-block");
    console.log("work");
  });

  $("#week10Link").click(function(){
    hideJournals();
    $("#week10").css("display", "inline-block");
    console.log("work");
  });

  $("#week11Link").click(function(){
    hideJournals();
    $("#week11").css("display", "inline-block");
    console.log("work");
  });

});
