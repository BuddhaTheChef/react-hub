import React from 'react';

const VideoListItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li>
      <div>
        <div>
          <img src={imageUrl} />
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
