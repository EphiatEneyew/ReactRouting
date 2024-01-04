import { Outlet } from "react-router-dom"
import EventsNavigation from "../components/EventsNavigation"

function EventsRoot() {
    return (
        <>
          <EventsNavigation />
          <Outlet />
        </>
    )

}

export default EventsRoot;