import 'https://unpkg.com/@vonage/vivid/layout';
import 'https://unpkg.com/@vonage/vivid/button';
import 'https://unpkg.com/@vonage/vivid/text-field';
import 'https://unpkg.com/@vonage/vivid/nav-item';

import { html } from 'https://unpkg.com/@microsoft/fast-element';

let apiKey = '46469012';
let sessionId = '2_MX40NjQ2OTAxMn5-MTY5NDUxMTQ5OTc1MH5SOWc5YlFvem9VQlk2WnNrK3BjVDYzUGd-fn4';
let token =
  'T1==cGFydG5lcl9pZD00NjQ2OTAxMiZzaWc9ZDA1NmE3MDk4MGIxNThhNGI2M2EwZDJmYzQwMzRhNGM3ZjkwNTBjYTpzZXNzaW9uX2lkPTJfTVg0ME5qUTJPVEF4TW41LU1UWTVORFV4TVRRNU9UYzFNSDVTT1djNVlsRnZlbTlWUWxrMlduTnJLM0JqVkRZelVHZC1mbjQmY3JlYXRlX3RpbWU9MTY5NDUxMTUwOSZub25jZT0wLjM2Njk3NDY4OTQ0MDkxMTgmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTY5NzEwMzUwOSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';

const session = OT.initSession(apiKey, sessionId);
const publisherObj = OT.initPublisher('publisher', { publishAudio: false, style: { buttonDisplayMode: 'off' } });

session.on({
  streamCreated: (event) => {
    session.subscribe(event.stream, 'subscribers', {
      subscribeToVideo: false,
      style: { buttonDisplayMode: 'off', audioLevelDisplayMode: 'off' },
    });
    const videoSubs = document.querySelector(`.OT_subscriber`);
    videoSubs.insertAdjacentHTML(
      'beforeend',
      `
        <vwc-button onclick="toggleFullscreen()" style="position : absolute; top: 3px; right: 10px; z-index: 3" icon="full-screen-solid"></vwc-button>
        `
    );
  },
  streamDestroyed: (event) => {
    console.log(`Stream ${event.stream.name} ended because ${event.reason}.`);
  },
  sessionConnected: (event) => {
    console.log('session connected', event);
    session.publish(publisherObj);
  },
  connectionCreated: (event) => {
    console.log(event);
  },
  signal: (event) => {
    console.log(event.data);
    const phoneId = `<div>${event.data} is on the call</div>`;
    document.getElementById('subscribers').insertAdjacentHTML('afterend', phoneId);
  },
});

session.connect(token, (error) => {
  if (error) {
    console.log('error connecting to session');
  }
});
