function processTimelineData(data) {

  var processedData = {"tweets": []};
  processedData.totalTweets = data[0].user.statuses_count;
  processedData.followers = data[0].user.followers_count;
  processedData.following = data[0].user.friends_count;

  data.map(status => {
    var statusObj = {
      "created_at": status.created_at,
      "username": status.user.name,
      "screen_name": status.user.screen_name,
      "text": status.text,
      "retweets": status.retweet_count,
      "favourites": status.favourite_count
    };
    processedData.tweets.push(statusObj);
  })

  return processedData;
}

module.exports.processTimelineData = processTimelineData;
