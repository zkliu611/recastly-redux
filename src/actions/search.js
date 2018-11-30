import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return _.debounce((dispatch) => {
    var options = {
      query: q,
      key: YOUTUBE_API_KEY
    }
    var callback = function(videos){
        dispatch(changeVideo(videos[0]));
        dispatch(changeVideoList(videos));
    };
    searchYouTube(options, callback);
  }, 500);
  //TODO:  Write an asynchronous action to handle a video search!
  
};

export default handleVideoSearch;
