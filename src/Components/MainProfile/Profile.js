import datafile from "../../Data/UnionMembers.json";
import styles from "./Profile.css";
import Image from "../Image";

const Profile = (props) => {

    const userid=props.id
    const userData=datafile.Members[userid];
    
    return ( 
        <div>
            <h1>Profile</h1>
            <div>
                <Image className={styles.img} src={userData.Image}></Image>
                <p>Name: {userData.Name}</p>
                <p>{userData.Desg}</p>
                <p>Year: {userData.Year}</p>
                <p>Email: {userData.Email}</p>
            </div>
            
        </div>
     );
}
 
export default Profile;