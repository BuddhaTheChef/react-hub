import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="outer-list-border">
        <div className="inner-list-div">
          <img src={imageUrl} alt='No video is shown'/>
          <div>
            <div className="sidebar-list-title">
              {video.snippet.title}
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
