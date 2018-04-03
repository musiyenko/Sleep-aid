// Copyright
var copyrightStartDate = 2018;
$(document).ready(function () {
  var d = new Date();
  var currentYear = d.getFullYear();
  if (copyrightStartDate >= currentYear) {
    $(".copyright").text("© " + currentYear + ". All rights reserved.");
  } else {
    $(".copyright").text("© " + copyrightStartDate + "-" + currentYear + ". All rights reserved.");
  }
});

$(document).ready(function () {

  // Vars
  let isPlayingForest = false;
  let isPlayingRain = false;
  let isPlayingThunderstorm = false;
  let isPlayingBirds = false;
  let isPlayingCampfire = false;
  let isPlayingTrain = false;
  let isPlayingBoat = false;
  $favicon = $('link[rel="icon"]');

  // Forest
  $('#forest').on('click', () => {
    if (isPlayingForest === false) {
      $('#forestsound').trigger("play");
      isPlayingForest = true;
      $('#forest').css({
        opacity: 1.0
      });
    } else {
      $('#forestsound').trigger("pause");
      isPlayingForest = false;
      $('#forest').css({
        opacity: 0.5
      });
    }

    $('body').css({
      transition: 'background 2s',
      background: 'url("../img/backgrounds/forest1.jpg") no-repeat fixed',
      backgroundSize: 'cover'
    })
    $favicon.attr('href', '../img/favicons/forest.ico');
    document.title = 'Forest';
  })

  // Rain
  $('#rain').on('click', () => {
    if (isPlayingRain === false) {
      $('#rainsound').trigger("play");
      isPlayingRain = true;
      $('#rain').css({
        opacity: 1.0
      });
    } else {
      $('#rainsound').trigger("pause");
      isPlayingRain = false;
      $('#rain').css({
        opacity: 0.5
      });
    }

    $('body').css({
      transition: 'background 2s !important',
      background: 'url("../img/backgrounds/rain1.jpg") no-repeat fixed',
      backgroundSize: 'cover'
    })
    $favicon.attr('href', '../img/favicons/rain.ico');
    document.title = 'Rain';
  })

  // Thunderstorm
  $('#thunderstorm').on('click', () => {
    if (isPlayingThunderstorm === false) {
      $('#thunderstormsound').trigger("play");
      isPlayingThunderstorm = true;
      $('#thunderstorm').css({
        opacity: 1.0
      });
    } else {
      $('#thunderstormsound').trigger("pause");
      isPlayingThunderstorm = false;
      $('#thunderstorm').css({
        opacity: 0.5
      });
    }

    $('body').css({
      transition: 'background 2s !important',
      background: 'url("../img/backgrounds/thunderstorm1.jpg") no-repeat fixed',
      backgroundSize: 'cover'
    })
    $favicon.attr('href', '../img/favicons/thunderstorm.ico');
    document.title = 'Thunderstorm';
  })

  // Birds
  $('#birds').on('click', () => {
    if (isPlayingBirds === false) {
      $('#birdssound').trigger("play");
      isPlayingBirds = true;
      $('#birds').css({
        opacity: 1.0
      });
    } else {
      $('#birdssound').trigger("pause");
      isPlayingBirds = false;
      $('#birds').css({
        opacity: 0.5
      });
    }

    $('body').css({
      transition: 'background 2s !important',
      background: 'url("../img/backgrounds/birds1.jpg") no-repeat fixed',
      backgroundSize: 'cover'
    })
    $favicon.attr('href', '../img/favicons/birds.ico');
    document.title = 'Summer birds';
  })

  // Campfire
  $('#campfire').on('click', () => {
    if (isPlayingCampfire === false) {
      $('#campfiresound').trigger("play");
      isPlayingCampfire = true;
      $('#campfire').css({
        opacity: 1.0
      });
    } else {
      $('#campfiresound').trigger("pause");
      isPlayingCampfire = false;
      $('#campfire').css({
        opacity: 0.5
      });
    }

    $('body').css({
      transition: 'background 2s !important',
      background: 'url("../img/backgrounds/campfire1.jpg") no-repeat fixed',
      backgroundSize: 'cover'
    })
    $favicon.attr('href', '../img/favicons/campfire.ico');
    document.title = 'Campfire';
  })

  // Train
  $('#train').on('click', () => {
    if (isPlayingTrain === false) {
      $('#trainsound').trigger("play");
      isPlayingTrain = true;
      $('#train').css({
        opacity: 1.0
      });
    } else {
      $('#trainsound').trigger("pause");
      isPlayingTrain = false;
      $('#train').css({
        opacity: 0.5
      });
    }

    $('body').css({
      transition: 'background 2s !important',
      background: 'url("../img/backgrounds/train1.jpg") no-repeat fixed',
      backgroundSize: 'cover'
    })
    $favicon.attr('href', '../img/favicons/railway.ico');
    document.title = 'Train';
  })

  // Boat
  $('#boat').on('click', () => {
    if (isPlayingBoat === false) {
      $('#boatsound').trigger("play");
      isPlayingBoat = true;
      $('#boat').css({
        opacity: 1.0
      });
    } else {
      $('#boatsound').trigger("pause");
      isPlayingBoat = false;
      $('#boat').css({
        opacity: 0.5
      });
    }

    $('body').css({
      transition: 'background 2s !important',
      background: 'url("../img/backgrounds/boat1.jpg") no-repeat fixed',
      backgroundSize: 'cover'
    })
    $favicon.attr('href', '../img/favicons/boat.ico');
    document.title = 'Boat';

    
  })

  // Turn off all sounds;
  turnOffSounds = () => {
    isPlayingForest = false
    isPlayingRain = false
    isPlayingThunderstorm = false
    isPlayingBirds = false
    isPlayingCampfire = false
    isPlayingTrain = false
    isPlayingBoat = false

    $('#forestsound').trigger("pause")
    $('#rainsound').trigger("pause")
    $('#thunderstormsound').trigger("pause")
    $('#birdssound').trigger("pause")
    $('#campfiresound').trigger("pause")
    $('#trainsound').trigger("pause")
    $('#boatsound').trigger("pause")

    $('#forest').css({
      opacity: 0.5
    });
    $('#rain').css({
      opacity: 0.5
    });
    $('#thunderstorm').css({
      opacity: 0.5
    });
    $('#birds').css({
      opacity: 0.5
    });
    $('#campfire').css({
      opacity: 0.5
    });
    $('#train').css({
      opacity: 0.5
    });
    $('#boat').css({
      opacity: 0.5
    });
  }

  $('#mute').on('click', () => {
    turnOffSounds();
  })

});