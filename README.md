# RipperClient
### A tampermonkey script used in conjunction with RipperServer

RipperClient is a very simple JavaScript that adds a (very ugly) download button to every youtube video. This lets you download the music from any video you come across without leaving the page for external tools. 

### Installation

- Install RipperServer from https://github.com/Realitaetsverlust/RipperServer on a target server
- Install tampermonkey from your preferred store
- Create a new userscript and add the contents of ripper.js as content
- Replace `apiKey` and `baseUrl` with your API-Key and the ripper base URL.
- Do not forget to save!

Now you should see a (pretty ugly) below every video. On click, nothing will happen for a while until a new tab opens and a download is triggered. Yes, I am working on an indication that actually something is happening.  