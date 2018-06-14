import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading...</div>
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail">
      <div>
        <iframe className="video-display" src={url}></iframe>
      </div>
      <div className="details">
        <div className="video-title">{video.snippet.title}</div>
        <div className="video-description">{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;
