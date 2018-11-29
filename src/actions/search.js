import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
 
  //TODO:  Write an asynchronous action to handle a video search!
  var options = {
    q: q,
    key: YOUTUBE_API_KEY
  }
  var videos = [];
  var callback = function(){}
  searchYouTube(options, callback);
  changeVideo(videos[0]);
  changeVideoList(videos);
  return function(videos) {
    return {
      videos: videos
    }
  }

};

export default handleVideoSearch;
