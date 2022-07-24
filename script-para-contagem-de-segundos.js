var downloadButton = document.getElementById(&quot;download&quot;);
var counter = 0;
var newElement = document.createElement(&quot;p&quot;);
  newElement.innerHTML = &quot;&lt;h1&gt;&lt;b&gt;&lt;/b&gt;&lt;/h1&gt;&quot;;
var id;

downloadButton.parentNode.replaceChild(newElement, downloadButton);

function startDownload() {
    this.style.display = &#39;none&#39;;
    id = setInterval(function () {
        counter--;
        if (counter &lt; 0) {
            newElement.parentNode.replaceChild(downloadButton, newElement);
            clearInterval(id);
        } else {
            newElement.innerHTML = +counter.toString() + &quot; segundos.&quot;;
        }
    }, 1000);
};

var clickbtn = document.getElementById(&quot;btn&quot;);
clickbtn.onclick = startDownload;
