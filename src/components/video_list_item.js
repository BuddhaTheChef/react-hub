import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)}>
      <div>
        <div>
          <img src={imageUrl} alt='No video is shown'/>
          <div>
            <div>
              {video.snippet.title}
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
