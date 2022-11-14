import { useNavigate } from "react-router-dom";
import styles from "./Navbar.css"
const Navbar = () => {
    const navigate=useNavigate();
    const navigatetohome=()=>{
        navigate(`./`);
    }
    const navigatetoprofilelist=()=>{
        navigate(`./membersarea`);
    }
    const navigatetosponsor=()=>{
        navigate(`./sponsor`);
    }
    return ( 
        <ul className="">
            <li><button onClick={navigatetohome}>Home</button></li>
            <li><button onClick={navigatetoprofilelist}>Members</button></li>            
            <li><button onClick={navigatetosponsor}>Sponsor</button></li>
        </ul>
     );
}
 
export default Navbar;