import React from 'react'

function Text2(){

  return (
    <span>
      Go-Fish exists as a 2 to 4 player DOM version of the card game it's named after. As the first General Assembly project, the app’s functionality is written in plain JavaScript, though utilizes jQuery for its DOM manipulation. The concept was selected over other options since the card game presented an added challenge of implementing AI opponents for the user to play against. Overall, the <a target="__blank" href='https://github.com/pavloskaralis/pavloskaralis.github.io/blob/master/go-fish/js/app.js'>game’s logic</a> runs through 4 phases that employ 35 methods, 10 helper functions, and 4 classes. All non-game-piece items were hard coded into the HTML, while the players and cards programmatically render. 
      <br/><br/>
      One of Go-Fish’s key highlights is its <a target="__blank" href='https://github.com/pavloskaralis/pavloskaralis.github.io/blob/master/go-fish/js/ai.js'>AI class</a>, which adopts a strategy of memorizing any requested or swapped card. During turn selection, the AI will prioritize choosing the card in its memory bank that matches the most repeated value in its hand. If no cards exist in the AI’s memory, or no memorized values match that of the AI’s hand, the AI will instead select their most repeated value card. Certain conditions are also employed to prevent the AI from casting duplicate turns in adjacent rounds. Summarily, each turn the AI employs a method to quantify its hand’s values, followed by another method to sort their frequency.
      <br/><br/>
      Another important highlight of the game is its use of <a target="__blank" href='https://github.com/pavloskaralis/pavloskaralis.github.io/blob/master/go-fish/css/style.css'>animation</a>, specifically the float effect that has the cards swim in and out of play. This was a rather challenging feature to implement as it required a specific logic order to get working correctly. Originally, the float animation would skip over rendering a card if was disrupted by a player’s selection. Also, the flip card animation would not always render because AI were capable of fishing off-screen. To fix these issues, the float animation was re-applied each turn phase until all cards successfully render, and AI were made to select only cards with an animation class.     </span>
  )
}

export default Text2


