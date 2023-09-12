# Full screen API and Picture in picture

This is a simple project that shows how you can leverage the [Full Screen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) to show the subscriber in full screen mode while keeping the publisher in a picture-in-picture like state. Unfortunately Full Screen API and Picture-in-Picture API [do not work well together ](https://stackoverflow.com/questions/59609434/picture-in-picture-and-fullscreen-together-api-can-only-be-initiated-by-a-user) so this is a workaround that mimics that same behaviour

## Running the app

1. Populate the api key, sessionId and token in `public/app.js`
2. Install dependencies `npm install`
3. Run the server `node server.js`
4. Visit localhost:3002 in 2 different browser tabs.
5. You can request the full screen mode by clicking on the Full screen button that is overlayed on the subscriber.

Note: For the sake of simplicity and easy identification of the subscriber when testing locally the subscriber video is disabled on purpose.
