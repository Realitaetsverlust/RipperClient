// ==UserScript==
// @name         Ripper-Client
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @namespace    Realitätsverlust
// @version      0.1
// @description  Ripper-Client for youtube
// @author       Realitätsverlust
// @match        *://*.youtube.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    "use strict";

    waitForKeyElements('#info-contents', function () {
            var infobox = document.getElementById('info-contents');
            var parent = document.getElementById('info-contents').parentNode;

            var apiKey = 'YOUR_API_KEY';
            var baseUrl = 'https://ripper.url';
            var ripperUrl = baseUrl + '/Ripper';
            var downloadUrl = baseUrl + '/Download?videoTitle=';

            // Create button
            var button = document.createElement('button');
            button.id = 'ripper-download-button';
            button.innerHTML = 'Let it rip!';
            button.style.background = '#ff0000';

            parent.insertBefore(button, infobox)

            var btn = document.getElementById('ripper-download-button');

            btn.addEventListener("click", function () {
                var youtubeId = window.location.href.match('http(?:s?):\\/\\/(?:www\\.)?youtu(?:be\\.com\\/watch\\?v=|\\.be\\/)([\\w\\-\\_]*)(&(amp;)?‌​[\\w\\?‌​=]*)?');

                var headlineElement = document.querySelector('h1.title.style-scope.ytd-video-primary-info-renderer');
                var headlineTitle = '';

                if(headlineElement === null) {
                    headlineTitle = prompt('The title of the video could not be parsed due to DOM issues, probably. Please enter a title manually:')
                } else {
                    headlineTitle = headlineElement.childNodes[0].innerHTML
                }

                $.ajax({
                    url: ripperUrl,
                    data: {
                        videoId: youtubeId[1],
                        name: headlineTitle,
                        key: apiKey,
                        r: Date.now() // We only send this to avoid caching, it's not used by the server
                    }
                }).done(function(data) {
                    if(data.videoTitle) {
                        window.open(downloadUrl+data.videoTitle, '_blank')
                    } else {
                        alert(data.error);
                    }
                });
            });
        },
        true)
})();