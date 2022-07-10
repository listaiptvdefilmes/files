$(document).ready(function(){
    var videotag = $('.playads');
		var myPlayer = videojs('video_1');
  $(".moveToVideoJs").appendTo($('#video_1'));
		// show urlanunciante label while play urlanunciante
		myPlayer.on('play', function() {
	  		if(myPlayer.hasClass("playads")){
		  		$('.urlanunciante').removeClass('hide3');
			}
		});
		// Stop from seeking while playing urlanunciante
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
		
		// Hide3 urlanunciante label and change data-src of player to play actual video
		myPlayer.on('ended', function() {
	  		if(this.hasClass("playads")){
          this.src({type: videotag.attr('mimetype'), src: videotag.attr('video-url')});
	  			this.play();
		  		this.removeClass('playads');
		  		$('.urlanunciante').addClass('hide3');
			}
		});
});
