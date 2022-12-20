import Image from "../Image";
import styles from "./SmallProfile.css";
const SmallProfile = (props) => {

    const data=props.profiledata;

    return ( 
        <div className="One_Profile">
            <Image className="member_profile_img" src={data.Image}></Image>
            <p className="member_name">{data.Name}</p>
            <p>{data.Desg}</p>
            <p>Ph. No.: {data.phno}</p>
            <p>Email: {data.Email}</p>
        </div>
     );
}
 
export default SmallProfile;