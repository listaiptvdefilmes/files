$(document).ready(function(){
    var videotag = $(&#39;.playads&#39;);
		var myPlayer = videojs(&#39;video_1&#39;);
  $(&quot;.moveToVideoJs&quot;).appendTo($(&#39;#video_1&#39;));
		// show urlanunciante label while play urlanunciante
		myPlayer.on(&#39;play&#39;, function() {
	  		if(myPlayer.hasClass(&quot;playads&quot;)){
		  		$(&#39;.urlanunciante&#39;).removeClass(&#39;hide2&#39;);
			}
		});
		// Stop from seeking while playing urlanunciante
		myPlayer.on(&quot;seeking&quot;, function(event) {
      		if (currentTime &lt; myPlayer.currentTime() &amp;&amp; myPlayer.hasClass(&quot;playads&quot;)) {
	        	myPlayer.currentTime(currentTime);
	      	}
	    });
	    myPlayer.on(&quot;seeked&quot;, function(event) {
	      	if (currentTime &lt; myPlayer.currentTime() &amp;&amp; myPlayer.hasClass(&quot;playads&quot;)) {
	        	myPlayer.currentTime(currentTime);
	      	}
	    });
	    setInterval(function() {
	      	if (!myPlayer.paused() &amp;&amp; myPlayer.hasClass(&quot;playads&quot;)) {
	        	currentTime = myPlayer.currentTime();
	      	}
    	}, 1000);
		
		// Hide2 urlanunciante label and change data-src of player to play actual video
		myPlayer.on(&#39;ended&#39;, function() {
	  		if(this.hasClass(&quot;playads&quot;)){
          this.src({type: videotag.attr(&#39;mimetype&#39;), src: videotag.attr(&#39;video-url&#39;)});
	  			this.play();
		  		this.removeClass(&#39;playads&#39;);
		  		$(&#39;.urlanunciante&#39;).addClass(&#39;hide2&#39;);
			}
		});
});
