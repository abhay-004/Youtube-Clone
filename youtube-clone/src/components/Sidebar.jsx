import React from "react";
import home from "../assets/home.png";
import game_icon from "../assets/game_icon.png";
import automobiles from "../assets/automobiles.png";
import sports from "../assets/sports.png";
import entertainment from "../assets/entertainment.png";
import tech from "../assets/tech.png";
import music from "../assets/music.png";
import blogs from "../assets/blogs.png";
import news from "../assets/news.png";
import jack from "../assets/jack.png";
import simon from "../assets/simon.png";
import tom from "../assets/tom.png";
import megan from "../assets/megan.png";
import cameron from "../assets/cameron.png";

const Sidebar = ({sidebar,category,setCategory}) => {
  return <div className= {`bg-white w-[15%] h-screen fixed top-0 pl-[2%] pt-20  ${sidebar?"":"small-sidebar"} `} >


    {/* ShortCut Links */}

    <div className="shortcut-links">
        <div className={`side-link ${category===0?"active":""}`} onClick={()=>{setCategory(0)}} >
            <img src={home} /> <p>Home</p>
        </div>
        <div className={`side-link ${category===20?"active":""}`} onClick={()=>{setCategory(20)}} >
            <img src={game_icon} /> <p>Gaming</p>
        </div>
        <div className={`side-link ${category===2?"active":""}`} onClick={()=>{setCategory(2)}} >
            <img src={automobiles} /> <p>Automobiles</p>
        </div>
        <div className={`side-link ${category===17?"active":""}`} onClick={()=>{setCategory(17)}} >
            <img src={sports} /> <p>Sports</p>
        </div>
        <div className={`side-link ${category===24?"active":""}`} onClick={()=>{setCategory(24)}} >
            <img src={entertainment} /> <p>Entertainment</p>
        </div>
        <div className={`side-link ${category===28?"active":""}`} onClick={()=>{setCategory(28)}} >
            <img src={tech} /> <p>Tech</p>
        </div>
        <div className={`side-link ${category===10?"active":""}`} onClick={()=>{setCategory(10)}} >
            <img src={music} /> <p>Music</p>
        </div>
        <div className={`side-link ${category===22?"active":""}`} onClick={()=>{setCategory(22)}} >
            <img src={blogs} /> <p>Blogs</p>
        </div>
        <div className={`side-link ${category===25?"active":""}`} onClick={()=>{setCategory(25)}} >
            <img src={news} /> <p>News</p>
        </div>
        <hr className="border-0  h-px bg-[#ccc] w-[85%]  " />
    </div>


    {/* Subscribed-List */}

    <div className="subscribed-list" >
        <h3 className=" text-[13px] my-5 mx-0 text-[#5a5a5a] ">Subscribed</h3>
        <div className="side-link">
            <img src={jack}  /> <p>PewDiePie</p>
        </div>
        <div className="side-link">
            <img src={simon}  /> <p>Mr. Beast</p>
        </div>
        <div className="side-link">
            <img src={tom}  /> <p>Justin Bieber</p>
        </div>
        <div className="side-link">
            <img src={megan}  /> <p>5-minutes Craft</p>
        </div>
        <div className="side-link">
            <img src={cameron}  /> <p>Nas Daily</p>
        </div>
    </div>
  </div>;
};

export default Sidebar;
