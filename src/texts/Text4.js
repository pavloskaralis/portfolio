import React from 'react'

function Text4(){

  return (
    <span>
      As a means to get acclimated with merging GitHub branches between multiple developers, the concept of a shared-model list app was selected for the group project. Thus, Foodie is designed to provide users with a platform for creating and editing sharable shopping lists. To help organize the project, my group employed a <a target="_blank" href='https://trello.com/b/z1mnXZJq/project'>Trello board</a> to keep track of tasks. The strategy implemented was to separate the work into three parts: design, frontend, and backend. As such, my primary focus became to structure React components and implement user authentication via Passport.js middleware.  
      <br/><br/>
      The application’s most important feature is its shared user-model, which is made possible through the Mongoose schema design. Within an array field, each list model keeps track of all users with access rights. When the Index component mounts after <a target="_blank" href='https://github.com/pavloskaralis/foodie/blob/master/backend/controllers/user.js'>user authentication</a>, an Axios get request is dispatched and sends the accessing username to the server via a URL parameter. The server then responds with all associated lists, allowing the component to fully render. At this point any list can now be accessed, and the user is able to add other valid usernames to the document via a form. 
      <br/><br/>
      In regard to the app’s user authentication, the front end takes advantage of conditionally rendered React components to control page visibility. Once mounted, the <a target="_blank" href='https://github.com/pavloskaralis/foodie/blob/master/frontend/src/components/App/App.js'>App component</a> controls these permissions via JWT authentication. First, any existing token gets passed to the backend to be verified with Passport.js. If successful, the isLoggedIn property within the component’s state is updated to true, enabling the conditional requirement for multiple pages to render. Otherwise, only the home page is accessible, and a user must either sign up or log in to receive a new JWT from the server. 
    </span>
  )
}

export default Text4


