import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY } from "../data";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Use default category (0 = All) if category is undefined
      const categoryId = category || 0;
      
      const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
      
      const response = await fetch(videoList_url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }
      
      const result = await response.json();
      
      if (result.items && Array.isArray(result.items)) {
        setData(result.items);
      } else {
        setData([]);
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching videos:', err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const formatViewCount = (count) => {
    if (!count) return '0';
    const num = parseInt(count);
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num;
  };

  const getTimeAgo = (publishedAt) => {
    if (!publishedAt) return '';
    const now = new Date();
    const published = new Date(publishedAt);
    const diffInMs = now - published;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return '1 day ago';
    if (diffInDays < 30) return `${diffInDays} days ago`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
    return `${Math.floor(diffInDays / 365)} years ago`;
  };

  if (loading) {
    return <div className="feed">Loading...</div>;
  }

  if (error) {
    return <div className="feed">Error: {error}</div>;
  }

  if (!data || data.length === 0) {
    return <div className="feed">No videos found</div>;
  }

  return (
    <div className="feed">
      {data.map((item, index) => {
        if (!item || !item.snippet) {
          return null;
        }

        return (
          <Link 
            key={item.id || index} 
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            className="card"
          >
            <img 
              src={item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url} 
              alt={item.snippet.title || 'Video thumbnail'}
            />
            <h2>{item.snippet.title || 'Untitled'}</h2>
            <h3>{item.snippet.channelTitle || 'Unknown Channel'}</h3>
            <p>
              {formatViewCount(item.statistics?.viewCount)} views &bull; {getTimeAgo(item.snippet.publishedAt)}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed; 