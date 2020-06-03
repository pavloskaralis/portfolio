import React from 'react'

function Text7(){

  return (
    <span>
     Astral is a multi-room chat application that relies on <a target="_blank" rel="noopener noreferrer" href='https://github.com/pavloskaralis/chat-app/blob/master/venv/astral_server/astral_server/settings.py'>Django Channels</a> to create a databaseless communication network. The website’s frontend is built using React and employs an organizational strategy of separating structures into views and components. In total, there exist 3 views that represent the app’s pages – Home, Lobby, and Chat – as well as 10 other reusable components within those structures. Users are able to access existing rooms within the Lobby view, or create their own public and private chats. These rooms accommodate for up to 8 users and are programmed to delete when empty.
      <br/><br/>
      As mentioned before, Django Channels is the backbone of the live-update interface and uses <a target="_blank" rel="noopener noreferrer" href='https://github.com/pavloskaralis/chat-app/blob/master/venv/astral_server/astral/consumers.py'>two consumer classes</a> to process data. When the site is first visited, a websocket connection is routed to the lobby consumer to track rooms and facilitate access. In order to enter a private chat, a correct password must be provided for this consumer to return the required URL hash parameter. Once the client redirects a user to the chat’s URL, a new websocket connection is routed to the chat consumer. This consumer is in charge of passing messages between clients in real time, as well as updating the list of connected users. 
      <br/><br/>
      The <a target="_blank" rel="noopener noreferrer" href='https://github.com/pavloskaralis/chat-app/blob/master/astral_client/src/views/Chat.js'>Chat view</a> is one of the most important components, as it is where the real time rendering of messages occurs. When a user is routed to this view, a useEffect hook gets called to initiate the websocket connection by pulling the room name and hash from the URL. The server uses these parameters to authenticate the connection and return message history to the client. This data then gets dynamically rendered depending on whether the display name stored within the connection matches that of the message. In submitting new content, data is sent to the consumer and then returned to the history array within the component’s state. 
    </span>
  )
}

export default Text7


