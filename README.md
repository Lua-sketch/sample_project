# Luanna - Devon things to work on

1. ~~Github pages with url set up [Github Page](https://pages.github.com) - This doesn't seem to be working yet.~~
2. ~~Design top navigation with javascript~~
3. Blog contents
4. Labels
5. Embedded code & Examples
6. ~~Make a logo for the brand~~
7. Icons and other cute stuff
8. ~~Git add/clone/push~~
9. ~~Add favicon - https://stackoverflow.com/questions/35037482/favicon-with-github-pages~~
10. ~~Replace logo.jpg with logo.png~~
11. Examples of labels you want to copy
12. ~~Embed a notebook - export HTML file
  1. ~~Navigate to the notebook file in your terminal~~
  2. ~~Make sure the notebook is saved~~
  3. ~~Run `!jupyter nbconvert --to html your_notebook_name.ipynb` from within the notebook - https://stackoverflow.com/questions/35896866/how-to-export-current-notebook-in-html-on-jupyter~~
  4. ~~You should have an html file inside your notebook now. Move it to your blog source code~~
13. ~~Embed a notebook - iframe~~
  1. ~~add an <iframe /> tag to the blog page you want to use - https://www.w3schools.com/html/html_iframe.asp~~
  2. ~~set the `src` attribute to the location of your html file~~
  3. ~~style the Iframe on the page. In order to make it render the way we like we might have to edit the html file ~~

## Embedded python

1. Tutorial - http://skulpt.org/using.html
2. Add these js includes to your head `<script src="http://www.skulpt.org/js/skulpt.min.js" type="text/javascript"></script>` and `<script src="http://www.skulpt.org/js/skulpt-stdlib.js" type="text/javascript"></script> ` underneath your jquery include
3. Add an HTML element on your page with an id `output`
4. Add the JS in the totorial above to your javascript
5. Here's an example of someone using that to embed a game instead https://stackoverflow.com/questions/30581869/embedding-python-game-into-html-using-skulpt

## Sign in with Google
1. Tutorial - https://www.intricatecloud.io/2019/07/adding-google-sign-in-to-your-webapp-pt-1/
2. Go to the Google API Console - https://console.developers.google.com/apis/dashboard
3. Create a new project, or use an existing project if you already have one set up.
4. Then click on Credentials -> Create Credentials -> OAuth Client ID
5. `Name: google-auth-demo, Authorized Javascript Origins: https://lua-sketch.github.io/, Authorized Redirect URIs: empty`
6. Save your Client ID and Client secret
7. Add this js include to your head `<script src="https://apis.google.com/js/platform.js" async defer></script>`
8. Add this js includ to your head `<meta name="google-signin-client_id" content="your-client-id-goes-here">`
9. Add Html element to your page with the `.g-signin2` classname `<div class="g-signin2"></div>`
10. Add another HTML element on your page with `data-onsuccess` attribute `<div class="g-signin2" data-onsuccess="onSignIn"></div>`
11. Create function in your script called `onSignIn` following the tutorial above
12. Set a logged in cookie in the onSignIn function - https://www.w3schools.com/js/js_cookies.asp
13. Cookies will be stored for your enitre domain, so now on other pages you can read the cookie in javascript and show other elements - https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript



## Nice to haves
1. ~~Google translate to and from Portuguese - https://www.w3schools.com/howto/howto_google_translate.asp~~ - costs money not worth it
2. ~~Embedded videos tiktok - https://developers.tiktok.com/doc/Embed, youtube https://www.w3schools.com/html/html_youtube.asp~~ - tiktok isn't our thing
3. ~~Quizzes~~
