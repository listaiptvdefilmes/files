$(document).ready(function(){
    var videotag = $('.playads');
		var myPlayer = videojs('video_1');
  $(".moveToVideoJs").appendTo($('#video_1'));
		// show advertisement label while play advertisement
		myPlayer.on('play', function() {
	  		if(myPlayer.hasClass("playads")){
		  		$('.advertisement').removeClass('hide');
			}
		});
		// Stop from seeking while playing advertisement
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
		
		// Hide Advertisement label and change data-src of player to play actual video
		myPlayer.on('ended', function() {
	  		if(this.hasClass("playads")){
          this.src({type: videotag.attr('mimetype'), src: videotag.attr('video-url')});
	  			this.play();
		  		this.removeClass('playads');
		  		$('.advertisement').addClass('hide');
			}
		});
});
