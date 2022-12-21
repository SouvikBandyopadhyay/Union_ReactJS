import emailicon from "../../Data/IMAGES/email_icon.png"
import styles from "./Footer.css"

const Footer = () => {
    return ( 
        <div className="Footer flex_row center">
            <a className="flex_row center" href="mailto:texavision2k23@gmail.com">
            <img src={emailicon} alt="" />
            <p>texavision2k23@gmail.com</p>
            </a>
        </div>
     );
}
 
export default Footer;