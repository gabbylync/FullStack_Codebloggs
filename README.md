# WEEK 9

### What, if any DATA is required from the backend to render the wireframe? Generate documentation for any required API. If no dynamic data are required, indicate that.

   Wireframing is a method of backend organization that depicts the layout of pages and button navigation. Wireframes are a vital tool in understanding how a website is going to function as well as what the user interface should look like. The purpose of a wireframe is to plan the user interface design in an easy to understand format that can be changed and updated as the planning process moves forward. 
	  You could put dummy data into your wireframe just for aesthetics however, you need working endpoints in your wireframe in order to render specific data from your backend. For example, in this project, we needed to fetch our functional API endpoints from the server side in order to create our the blog and user posts. We also needed API endpoints to call for the login and register page to work as well. If we didn’t have these endpoints, our users wouldn’t be saved and the login process would not be able to work correctly.

### What, if any, ACTIONS is this wireframe responsible for? Button clicks and form submissions often trigger logic that leverages the API layer. Generate documentation for any required API. If no actions are required, indicate that.

  I have been running into issues with submission buttons when making the wireframe for the frontend. The page will pop up with errors if the actions are undefined or don’t have the correct API calls needed to complete the submission. This makes the wireframe harder to complete because the errors need to be cleared in order to see the page and continue with your project. I found that commenting out these actions like the onChanges and the onClicks was a good way to keep the page structured and also error free. Then once I got my information from the backend, I was able to uncomment the corresponding action. 
