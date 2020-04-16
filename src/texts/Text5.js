import React from 'react'

function Text5(){

  return (
    <span>
      Pushing the limits of supported browser behavior by mixing text fields with interactive elements, Spell Check It serves as a phonetically oriented spell-checking API. The backend is written in Java using the Spring Boot framework, and operates by employing Soundex and Levenshtein functions within its queries to a MySQL database. On the frontend, <a target="_blank" href='https://github.com/pavloskaralis/SBA/tree/master/sba-client/src/app'>Angular</a> is used to structure the client into 6 components, and users have the ability to toggle a dropdown menu of suggestions by clicking on a word. Once submitted, a user’s decision is returned to the server to accumulate data on common misspellings. 
      <br/><br/>
      A crucial configuration within this application is the <a target="_blank" href='https://github.com/pavloskaralis/SBA/blob/master/sba-api/src/main/java/main/MainController.java'>put route</a>, which begins by dissecting a string of text into individual words via regex expressions. Given the database only has singular versions of words, the backend relies on an inflector to transform any pluralities. Once this process completes, each word is queried for an exact match within the MySQL database. If nothing is returned, a second query is applied using Soundex to retrieve phonetic similarities. The server then applies the Levenshtein algorithm to sequence these results, selecting the top five to return as suggestions. 
      <br/><br/>
      The <a target="_blank" href='https://github.com/pavloskaralis/SBA/blob/master/sba-client/src/app/content/content.component.ts'>Content component</a> exists as the frontend’s most vital structure, as it employs the contenteditable attribute to mix user input with other clickable elements. While the interaction may appear seamless, contenteditable is prone to bugs, and thus prompted the implementation of several methods to create an illusion over normal browser behavior. The most dishearten of these errors is contenteditable’s deletion of inner elements after a user over-presses backspace or delete. To fix this, an event listener was attached to monitor such actions, and replace functionality with the client’s own erase method.
    </span>
  )
}

export default Text5


