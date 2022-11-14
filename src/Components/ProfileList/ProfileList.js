import data from "../../Data/UnionMembers.json";
import SmallProfile from "./SmallProfile";

const ProfileList = () => {

    const userData=data.Members;

   
console.log(userData)

    return ( 
        <div>
            <h1>Profiles</h1>
            <div className="users">
                {userData.map((user) => (
                    <SmallProfile profiledata={user}/>
                ))}
            </div>
        </div>
     );
}
 
export default ProfileList;