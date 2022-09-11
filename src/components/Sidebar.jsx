import {AnimatePresence, motion} from "framer-motion";
import {FaBars,FaHome, FaUser,FaLanguage} from 'react-icons/fa';
import {} from 'react-icons/bi';
import { BiSearch} from 'react-icons/bi';
import {BiCog} from 'react-icons/bi';
import {AiFillHeart} from 'react-icons/ai';
import {BsFillFileEarmarkMusicFill} from 'react-icons/bs';
import {GiLoveSong,GiIndiaGate} from 'react-icons/gi';
import { NavLink } from "react-router-dom";
import { useState } from "react";

const routes = [{
    path:"/",
    name:"Home",
    icon: <FaHome/>,
},

{
    path:"/Mymusic",
    name:"My Music",
    icon: <GiLoveSong/>,
},
{
    path:"/Createplaylists",
    name:"Create Playlists",
    icon: <BsFillFileEarmarkMusicFill/>,
},
{
    path:"/Indiamusic",
    name:"India's Music",
    icon: <GiIndiaGate/>,
},
{
    path:"/language",
    name:"Language",
    icon: <FaLanguage/>,
},
{
    path:"/alltimehit",
    name:"All Time Hit",
    icon: <AiFillHeart/>,
},
{
    path:"/Login",
    name:"Login",
    icon: <FaUser/>,
},
{
    path:"/Register",
    name:"Register",
    icon: <BiCog/>,
},
]
const Sidebar =({children})=> {
    const[isOpen,setIsOpen] = useState(false);
    const toggle =() => setIsOpen (!isOpen); // toggle is assigned
    
    const inputAnimation = {       // inputanimation is assigned value
    hidden: {
        width: 0,
        padding: 0,
        opacity:0,

    },
    show:{
        width: "140px",
        padding: "5px 15px",
        opacity:1,
        transition: {
            duration: 0.5,
        }
    },
    
    }
    return(
         <div className="main-container">
      <motion.div animate={{width: isOpen ? "200px":"36px"}} className="Sidebar">
        <div className="top-section">
            {isOpen && 
            <h1 className="logo">Beat Music</h1>
            }
            <div className="bars">
                <FaBars onClick={toggle}/>
            </div>
        </div>
        <div className="search">
           <div className="search-icon">
           <BiSearch/>
            </div> 
     <AnimatePresence>
     {isOpen && (
     <motion.input 
     initial="hidden"
     animate="show"
     exit="hidden"
     variants={inputAnimation}
      placeholder="search.." />)}
     </AnimatePresence>
        </div>
        <section className="routes">
            {routes.map((route) =>(
                <NavLink 
                className = "active link" 
                to={route.path} 
                key={route.name} 
               >
                    <div className="icon">{route.icon}</div>
                    <div className="Link-text">{route.name}</div>
                </NavLink>
            ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>);
};

export default Sidebar;