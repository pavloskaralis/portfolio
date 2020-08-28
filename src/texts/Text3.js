import React from 'react'

function Text3(){

  return (
    <span>
      Appstractor is a fullstack application that provides users with a means of creating abstract art to share online or download for print. Given that any image can be converted into an Appstraction, there exists an infinite supply of source material for users to manipulate. For its backend, the app relies on Google’s Firebase platform to store user data. On the frontend, React is employed to create a <a target="_blank" rel="noopener noreferrer" href='https://github.com/pavloskaralis/appstractor-client/blob/master/src/App.js'>dynamic SPA interface</a> with several public and private routes. Finally, the app's ability to convert HTML into a PNG file can be credited to the dom-to-image package, as well as several optimization techniques.
      <br/><br/>
      The most important part of this application is without a doubt the <a target="_blank" rel="noopener noreferrer" href='https://github.com/pavloskaralis/appstractor-client/blob/master/src/Components/Canvas/Canvas.js'>rendering script</a>, which utilizes flex to generate mosaic patterns of a provided image. The script also processes the alignment of each tile's background to be in range of the original image's x and y-axis, meaning that the top portions of the original image will only appear in top tiles of the Appstraction, and bottom portions only in bottom tiles. Through the control panel, a user has the ability to alter the script in real time. Since this can be taxing, all images are compressed prior to rendering via the browser-image-compression package. 
      <br/><br/>
      An additional key feature of the site is that it allows the user to download, edit, or share their content via a <a target="_blank" rel="noopener noreferrer" href='https://github.com/pavloskaralis/appstractor-client/blob/master/src/Components/Home/Gallery/Gallery.js'>rendering viewing gallery</a>. On this page, multiple files can be selected to batch download or delete. Individually, a user can reopen an Appstraction for editing, as all rendering data gets saved to the backend. Furthermore, these files can be viewed within an expandable lightbox, renamed, shared via a copy link button, or shared directly to Facebook. Given that the user has the ability to generate infinite Appstractions, these interactive components get lazy loaded into view in an effort to optimize page loading times.   
      <br/><br/>
    </span>
  )
}

export default Text3


