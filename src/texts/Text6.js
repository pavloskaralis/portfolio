import React from 'react'

function Text6(){

  return (
    <span>
     Café Racers is a <a target="_blank" rel="noopener noreferrer" href='https://github.com/pavloskaralis/cafe-racers/blob/master/cr-client/src/components/TwoPlayer.vue'>live update typing game</a> where 2 players race to copy a hipster ipsum text block. For the frontend, Vue, Vuex, and Vue Router are used to render the café themed app, along with JWT for client identification. Players are alerted of their current typing speed and progress via a coffee cup being sipped, and have access to an additional AI mode with 3 difficulty settings. On the backend, Laravel is used to route to a MySQL database that contains each game’s current state. Given that the 2 player mode requires the client to update in real time, Pusher is employed as a third party websocket library.
      <br/><br/>
      The game’s ability to live render player progress is its most crucial attribute. Several frontend and backend structures play a part in making this happen, such as the previously mentioned Pusher websocket. When a user correctly inputs a letter, the client initiates a put request to update the game’s state within the database. This route also <a target="_blank" rel="noopener noreferrer" href='https://github.com/pavloskaralis/cafe-racers/blob/master/cr-api/app/Http/Controllers/ApiController.php'>triggers an event</a> to carry that updated state through a channel, where it is eventually received by any connected client. As data gets repopulated, computed properties that are passed to the Cup and Letter components become refactored, and thus change a user’s view. 
      <br/><br/>
      Though seemingly invisible, the app’s capacity to identify a user and prevent cross-player or spectator input is another key feature. It does so by first checking for any <a target="_blank" rel="noopener noreferrer" href='https://github.com/pavloskaralis/cafe-racers/blob/master/cr-api/app/Http/Controllers/AuthController.php'>existing JWT</a>. If no token can be authenticated, the server generates an identification number and passes it back to the client within the payload of a new JWT. This ID eventually gets housed inside the Vuex store so that it may be accessed by components without the need to be passed multiple levels. When a game is created, or when a second player joins, their ID is added to the game’s state.  Relatedly, the TwoPlayer component contains a userIs computed property, which checks to see whether the client matches the ID of either player1 or player2.
    </span>
  )
}

export default Text6


