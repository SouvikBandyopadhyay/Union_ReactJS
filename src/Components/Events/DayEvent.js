import styles from"./Events.css"

const DayEvent = (props) => {
    var dayeventdata=props.dayevent.names;
    return ( 
        <div className="DayEvents">
            <h2>Day {props.index+1}:</h2>
            <div className="events_perday_list">
                {dayeventdata.map((event) => (
                    <h3 className="event_name">{event}</h3>
                ))}
            </div>
        </div>
     );
}
 
export default DayEvent;