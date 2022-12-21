import styles from "./SmallProfile.css";
import images from "../../Data/MemberImages";
import phn_icon from "../../Data/IMAGES/phn_icon.png"


const SmallProfile = (props) => {

    const data=props.profiledata;
    console.log()

    return ( 
        <div className="One_Profile flex_col center">
            <img className="member_profile_img" src={images[data.Image]}></img>
            <p className="member_name">{data.Name}</p>
            <div className="flex_row center phn_details">
            <img className="phn_icon" src={phn_icon}></img>
            <p>{data.phno}</p>
            </div>
        </div>
     );
}
 
export default SmallProfile;