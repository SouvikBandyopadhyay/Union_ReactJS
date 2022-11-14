import Image from "../Image";
import styles from "./SmallProfile.css";
const SmallProfile = (props) => {

    const data=props.profiledata;
    console.log(data);
    return ( 
        <div>
            <Image className={styles.img} src={data.Image}></Image>
            <p>{data.Name}</p>
            <p>{data.Desg}</p>
        </div>
     );
}
 
export default SmallProfile;