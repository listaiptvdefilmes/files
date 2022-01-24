$(document).ready(function(){
    var videotag = $('.playads');
		var myPlayer = videojs('video_1');
  $(".moveToVideoJs").appendTo($('#video_1'));
		// show baixar label while play baixar
		myPlayer.on('play', function() {
	  		if(myPlayer.hasClass("playads")){
		  		$('.baixar').removeClass('hide1');
			}
		});
		// Stop from seeking while playing baixar
		myPlayer.on("seeking", function(event) {
      		if (currentTime < myPlayer.currentTime() && myPlayer.hasClass("playads")) {
	        	myPlayer.currentTime(currentTime);
	      	}
	    });
	    myPlayer.on("seeked", function(event) {
	      	if (currentTime < myPlayer.currentTime() && myPlayer.hasClass("playads")) {
	        	myPlayer.currentTime(currentTime);
	      	}
	    });
	    setInterval(function() {
	      	if (!myPlayer.paused() && myPlayer.hasClass("playads")) {
	        	currentTime = myPlayer.currentTime();
	      	}
    	}, 1000);
		
		// Hide1 baixar label and change data-src of player to play actual video
		myPlayer.on('ended', function() {
	  		if(this.hasClass("playads")){
          this.src({type: videotag.attr('mimetype'), src: videotag.attr('video-url')});
	  			this.play();
		  		this.removeClass('playads');
		  		$('.baixar').addClass('hide1');
			}
		});
});
