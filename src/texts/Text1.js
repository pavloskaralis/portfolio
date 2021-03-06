import React from 'react'

function Text1(){

  return (
    <span>
      Traveler is designed to provide users with a platform for planning trip itineraries with friends. Once created, an itinerary deploys two types of tables: the planning table where a group can input and gage interest in an activity, and the scheduling table, which renders for each trip date and allows users to sequence their activities. The app’s backend is created with Ruby on Rails, and employs PostgreSQL for its database, while the frontend is exemplary of an <a target="_blank" rel="noopener noreferrer" href='https://github.com/pavloskaralis/traveler/blob/master/traveler_frontend/package.json'>advanced React application</a>, as it uses React-Router-Dom, Styled Components, and Redux-Thunk to build a dynamic and maintainable structure.
      <br/><br/>
      One of the app’s most important elements is the <a target="_blank" rel="noopener noreferrer" href='https://github.com/pavloskaralis/traveler/blob/master/traveler_frontend/src/actions/postItinerary.js'>postItinerary action</a>. When a user submits their departure and return dates via the itinerary create form, the data gets passed to this action for validation. First, a regex is used to ensure the date format is valid. Then, the dates are run through a series of conditionals to check whether the departure date occurs before the return date, and no earlier than today’s date. Finally, a JavaScript Date object is used to populate an array with all trip dates via a while loop. When an itinerary’s show page is accessed, this array is used to generate the scheduling tables. 
      <br/><br/>
      Another crucial aspect of this application is the <a target="_blank" rel="noopener noreferrer" href='https://github.com/pavloskaralis/traveler/blob/master/traveler_frontend/src/components/Row.js'>Row component</a>, which is designed to conditionally render depending on its association to a planning or scheduling table. If a user were to switch tables, or return to the index page, any recent input would be retained as the component is configured to automatically dispatch a put request when modified. This automatic updating also applies to non-text fields such as the interest button that allows users to record their preferences. When clicked, the user’s id gets added into an array, and the length of that array becomes rendered as the current interest level. 
    </span>
  )
}

export default Text1


