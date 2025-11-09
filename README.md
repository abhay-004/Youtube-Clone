🎥 YouTube Clone
A fully functional YouTube clone built with React.js and YouTube Data API v3. This project replicates the core features of YouTube including video browsing, playback, and real-time statistics.
Show Image Show Image Show Image
🚀 Features

🎬 Video Playback - Embedded YouTube player with autoplay
🔍 Search Functionality - Search videos using YouTube Data API
📊 Real-time Statistics - Display views, likes, and publish date
💬 Comments Section - View video comments
📱 Responsive Design - Works seamlessly on all devices
⚡ Fast Performance - Optimized React components
🎨 Modern UI - Clean and intuitive interface similar to YouTube

## 🔗 Live Demo

👉 [Click Here to Try Edemy](https://youtube-clone-wt9o.vercel.app/)

🛠️ Technologies Used

Frontend Framework: React.js
API: YouTube Data API v3
Styling: Tailwind CSS
Date Formatting: Moment.js
HTTP Client: Fetch API
Build Tool: Create React App / Vite

📋 Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14 or higher)
npm or yarn
A YouTube Data API Key

🔑 Getting YouTube API Key

Go to Google Cloud Console
Create a new project or select an existing one
Enable YouTube Data API v3
Go to Credentials and create an API key
Copy your API key

⚙️ Installation

Clone the repository

bash   git clone https://github.com/abhay-004/youtube-clone.git
   cd youtube-clone

Install dependencies

bash   npm install

Create a data.js file
Create a file named data.js in your src folder:

javascript   export const API_KEY = "YOUR_YOUTUBE_API_KEY_HERE";
   
   export const valueConverter = (value) => {
     if (value >= 1000000000) {
       return (value / 1000000000).toFixed(1).replace(/\.0$/, '') + "B";
     } else if (value >= 1000000) {
       return (value / 1000000).toFixed(1).replace(/\.0$/, '') + "M";
     } else if (value >= 1000) {
       return (value / 1000).toFixed(1).replace(/\.0$/, '') + "K";
     } else {
       return value.toString();
     }
   };

Start the development server

bash   npm start

Open http://localhost:3000 in your browser

📁 Project Structure
youtube-clone/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── like.png
│   │   ├── dislike.png
│   │   ├── share.png
│   │   └── save.png
│   ├── components/
│   │   ├── PlayVideo.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── Feed.jsx
│   ├── data.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
🎯 Key Components
PlayVideo Component

Displays video player using YouTube iframe embed
Shows video title, views, likes, and publish date
Displays channel information
Shows video description and comments

Feed Component

Lists trending or searched videos
Displays video thumbnails and metadata
Implements infinite scrolling (optional)

Navbar Component

Search bar for video queries
Navigation menu
User profile section

Sidebar Component

Category navigation
Subscription list
Quick access links

🌐 API Endpoints Used
javascript// Get video details
https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id={VIDEO_ID}&key={API_KEY}

// Search videos
https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q={QUERY}&key={API_KEY}

// Get channel details
https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id={CHANNEL_ID}&key={API_KEY}

🚧 Roadmap

 Add user authentication
 Implement video upload functionality
 Add playlist creation and management
 Include video recommendations
 Add dark mode toggle
 Implement comment posting
 Add video history tracking

🤝 Contributing
Contributions are welcome!


GitHub: @abhay-004
LinkedIn: https://www.linkedin.com/in/abhay-chauhan-456869266/

🙏 Acknowledgments

YouTube Data API Documentation
React Documentation
Tailwind CSS
Inspiration from YouTube's original design

⚠️ Disclaimer
This project is for educational purposes only. It is not affiliated with, endorsed by, or in any way officially connected with YouTube, Google LLC, or any of its subsidiaries or affiliates.
📞 Support
If you have any questions or need help, please open an issue or contact me at your.email@example.com
