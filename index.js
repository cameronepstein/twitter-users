// Connects to twitter API via twit: https://github.com/ttezel/twit
const Twit = require('twit');
const Config = require('./config.js');

const T = new Twit({
  consumer_key: Config.Keys.consumer_key,
  consumer_secret: Config.Keys.consumer_secret,
  access_token: Config.Keys.access_token,
  access_token_secret: Config.Keys.access_token_secret,
  timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL: true,     // optional - requires SSL certificates to be valid.
})

T.get('statuses/user_timeline', { screen_name: 'cameronepstein' })
.catch(function (err) {
  console.log('caught error', err.stack)
})
.then(function (result) {
  console.log('data', result.data);
})
