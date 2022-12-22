import styles from "./Logos.css"
import collegelogo from "../../Data/IMAGES/CollegeLogo.png"
import unionlogo from "../../Data/IMAGES/UnionLogo.png"

const Logos = () => {
    return ( 
        
        <div className="logos">
            <img src={collegelogo} alt="" />
            <img src={unionlogo} alt="" />
        </div>
     );
}
 
export default Logos;