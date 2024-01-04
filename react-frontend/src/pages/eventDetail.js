import { useRouteLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
    const data = useRouteLoaderData('event-detail');

    return (
        <EventItem event = {data.event}/>
    )
 }
 
 export default EventDetailPage;

 export async function loader({request, params}) {
     
    const id = params.eventid;
      
    const response = await fetch ('http://localhost:8080/events/' + id);
    
    if(!response.ok){
        throw json({message: 'events detail can not be fetched'}, { status: 500 });
    } else {
        return response;
    }

}