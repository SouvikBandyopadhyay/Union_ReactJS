const Image = (props) => {
    const userImg=props.src.split("/")[5];
    return ( 
        <div>
            <img className={props.className} height={"inherit"} width={"inherit"} src={"https://drive.google.com/uc?export=view&id="+userImg} alt="drive image"/>
        </div>
     );
}
 
export default Image;