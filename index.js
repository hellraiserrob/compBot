console.log('running');

var twit = require('twit');  
var config = require('./config.js');

var T = new twit(config);  



var stream = T.stream('statuses/filter', { track: ['#competition', '#giveaway'] })

stream.on('tweet', function (tweet) {
  //...

  if(tweet.in_reply_to_screen_name === null){
    console.log(tweet.text);
  }

//   console.log(tweet.retweeted);
})

