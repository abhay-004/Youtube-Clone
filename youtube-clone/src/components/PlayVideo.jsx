import React, { useEffect, useState } from "react";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import jack from "../assets/jack.png";
import { API_KEY, valueConverter } from "../data.js";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {

  const {videoId} = useParams()

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    //fetching Video Data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    //fetcing channel data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    //fetch comment data

    const commentData_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(commentData_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="play-video basis-[69%]">
      <iframe
        className="w-full h-[37vw]"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <h3 className="mt-2.5 font-semibold text-2xl">
        {apiData ? apiData.snippet.title : "Title Here"}
      </h3>

      <div className="play-video-info flex items-center justify-between flex-wrap mt-2.5 text-[14px] text-[#5a5a5a]">
        <p>
          {apiData ? valueConverter(apiData.statistics.viewCount) : "16K"} views
          &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div className="flex gap-2 px-2">
          <span>
            <img src={like} alt="like" />
            {apiData ? valueConverter(apiData.statistics.likeCount) : "125"}
          </span>
          <span>
            <img src={dislike} alt="dislike" />
            {apiData ? valueConverter(apiData.statistics.dislikeCount) : "2"}
          </span>
          <span>
            <img src={share} alt="share" />
            Share
          </span>
          <span>
            <img src={save} alt="save" />
            Save
          </span>
        </div>
      </div>

      <hr className="border-0 h-px bg-[#ccc] my-2.5 mx-0" />

      {/* Publisher */}
      <div className="publisher flex items-center mt-5 px-2">
        <img
          className="w-10 rounded-full mr-3.5"
          src={apiData ? apiData.snippet.thumbnails.default.url : jack}
          alt="channel"
        />
        <div className="flex-1 leading-[18px]">
          <p className="text-black font-semibold text-[18px]">
            {apiData ? apiData.snippet.channelTitle : "GreatStack"}
          </p>
          <p className="text-[13px] text-[#5a5a5a]">
            {channelData
              ? valueConverter(channelData.statistics.subscriberCount)
              : "1M"}{" "}
            subscribers
          </p>
        </div>
        <button className="bg-red-600 text-white py-2 px-8 border-0 outline-0 rounded-sm cursor-pointer active:scale-95">
          Subscribe
        </button>
      </div>

      {/* Video Description */}
      <div className="video-description pl-[55px] my-[15px] mx-0">
        <p className="text-3.5 mb-[5px] text-[#5a5a5a]">
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Channel that makes learning Easy"}
        </p>
        <hr />
        <h4 className="text-3.5 text-[#5a5a5a] mt-[15px]">
          {apiData ? valueConverter(apiData.statistics.commentCount) : "130"}{" "}
          comments
        </h4>

        {/* Comment */}

        {commentData.map((item, index) => {
          return (
            <div key={index} className="comment">
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user" />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="like" />
                  <span>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src={dislike} alt="dislike" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
