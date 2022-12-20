import texavisionlogo from "../../Data/IMAGES/Texavision2K23Logo.png"
import styles from "./Home.css"

const Home = () => {
    return ( 
        <div>
            <div className="main_logo">
                <img src={texavisionlogo} alt="" />
            </div>
            <div className="main_title">
            <h1>TEXAVISION 2K23</h1>
            </div>
        </div>
     );
}
 
export default Home;