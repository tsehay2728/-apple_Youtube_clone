import React, { useState, useEffect } from "react";
import "./YoutubeVideos.css";

function YoutubeVideos() {
  const [youtubeVido, setYoutvido] = useState([]);
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&channelType=channelTypeUnspecified&maxResults=9&order=date&key=AIzaSyDe1-Ro2hN1D0kwQqDlTZ0DiLaFN6zzhWw"
    )
      .then((res) => res.json())
      .then((data) => {
        const youtubeVideousAppl = data.items;
        setYoutvido(youtubeVideousAppl);
      })
      .catch(() => {
        console.log("Wrong,not able to fetch !");
      });
  }, []);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>
          {youtubeVido?.map((elment, i) => {
            let vidId = elment.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div key={i} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  +
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={elment.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {elment.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {elment.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
}
export default YoutubeVideos;
