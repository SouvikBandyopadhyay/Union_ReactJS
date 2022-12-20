import { useNavigate } from "react-router-dom";
import styles from "./Navbar.css"

const Navbar = () => {
    const navigate=useNavigate();
    const navigatetoevents=()=>{
        navigate(`./events`);
    }
    const navigatetohome=()=>{
        navigate(`./`);
    }
    const navigatetoprofilelist=()=>{
        navigate(`./membersarea`);
    }
    const navigatetoabout=()=>{
        navigate(`./about`);
    }
    return ( 
        <ul className="">
            
            <li><button onClick={navigatetoevents}>Events</button></li>      
            <li><button onClick={navigatetohome}>Home</button></li>
            <li><button onClick={navigatetoprofilelist}>Members</button></li>            
            <li><button onClick={navigatetoabout}>About Us</button></li>
            
        </ul>
     );
}
 
export default Navbar;