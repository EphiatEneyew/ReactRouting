

import { useLoaderData, json } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
   const data = useLoaderData(); //special hook to get access to the clesest loader data. events is data returned by that loader
   
  // if(data.isError){
    //  return <p>{data.message}</p>
   //}
  
  
  const events = data.events;
  return <EventsList events={events} />;
   }

export default EventsPage;

export async function loader () {
  const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
      //return {isError: true, message: 'could not fetch the events'}
     // throw new Response(JSON.stringify({message: 'Could not fetch events'}),{
      //status: 500});
      
      //json is a function provided by react-router-dom, it creates a response object that include data in the json format.
      //we pass the data that include in response(in this case message)
      throw json (
        {message: 'Could not fetch events.' },
        {
          status: 500,
        }
      );
    } else {
      
      return response;//we can return response with out extraction the data from response.useLoaderData hook authomatically give us the data that is part of the response
     }
             
}