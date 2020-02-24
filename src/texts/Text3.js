import React from 'react'

function Text3(){

  return (
    <span>
      Appstractor is a <a target="__blank" href='https://github.com/pavloskaralis/appstractor/blob/master/controllers/appstractor.js'>full-stack</a> application that provides users with a means of creating abstract art that can be downloaded to share online or print as wall art. Given that any image can be converted into an Appstraction, there exists an infinite supply of source material for users to manipulate. For its backend functionality, the app relies on Express, Mongoose, and Capture-Chrome (Puppeteer). On the frontend, EJS is employed to render views server-side, and jQuery to manipulate the DOM. Finally, the app's ability to download the iframe as a PNG file stems from Puppeteer's screen capturing capabilities.
      <br/><br/>
      The most important feature of this application is without a doubt the <a target="__blank" href='https://github.com/pavloskaralis/appstractor/blob/master/public/js/blank.js'>rendering script</a>, which utilizes Math.random() and flexbox to generate mosaic patterns. The script also processes the alignment of each cell's background to be in range of the original image's x and y-axis, meaning that the top portions of the original image will only appear in top cells of the Appstraction, and bottom portions only in bottom cells. When the user clicks the save button, they initiate a post request that transfers the iframe's html as a string. Due to the html string's large size, the middleware requires an increased 50mb limit to pass to the server.
      <br/><br/>
      Another important aspect of this site is that it allows the user to download their content via the <a target="__blank" href='https://github.com/pavloskaralis/appstractor/blob/master/public/js/show.js'>gallery page</a>. Unfortunately, Puppeteer screen capture does not work with Heroku’s redeployment times, though instructions are provided on how to manually convert the HTML file into a PNG image. Summarily, when the download button is clicked, a post request is sent to the server and directs capture-chrome to visit the selected Appstraction’s show route. While the screen is being recorded, a timer appears to keep the user updated. Once complete, an HTML file and PNG file are downloaded to the user's computer. 
      <br/><br/>
    </span>
  )
}

export default Text3


