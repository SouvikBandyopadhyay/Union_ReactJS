import texavisionlogo from "../../Data/IMAGES/Texavision2K23Logo.png"
import styles from "./Home.css"

const Home = () => {
    return ( 
        <div className="Home">
            <div className="main_logo">
                <img src={texavisionlogo} alt="" />
            </div>
            <div className="edition">
            <h3>2023 Edition</h3>
            </div>
            <div className="main_title subtitle">
            <h1>Annual Fest</h1>
            </div>
            <div className="main_title">
            <h2>TEXAVISION 2K23</h2>
            </div>
        </div>
     );
}
 
export default Home;