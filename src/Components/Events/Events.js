import data from "../../Data/Events.json"
import DayEvent from "./DayEvent";
import styles from"./Events.css"

const Events = () => {

    var eventsData=data.Events;
    return ( 
        <div>
            <h1>Events</h1>
            <div className="Events">
                {eventsData.map((dayevent,index) => (
                    <DayEvent dayevent={dayevent} index={index}/>
                ))}
            </div>
        </div>
     );
}
 
export default Events;