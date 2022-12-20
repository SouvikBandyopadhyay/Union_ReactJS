import styles from "./Logos.css"
import collegelogo from "../../Data/IMAGES/CollegeLogo.jpeg"
import unionlogo from "../../Data/IMAGES/UnionLogo.png"
import texavisionlogo from "../../Data/IMAGES/Texavision2K23Logo.png"

const Logos = () => {
    return ( 
        
        <div className="logos">
            <img src={collegelogo} alt="" />
            <img src={unionlogo} alt="" />
            <img src={texavisionlogo} alt="" />
        </div>
     );
}
 
export default Logos;