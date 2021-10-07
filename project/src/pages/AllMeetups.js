import { useState } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() { 
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    // default is a GET request
    fetch(
        'https://react-getting-started-757a0-default-rtdb.firebaseio.com/meetups.json'
    ).then((response)=>{
        return response.json();
    }).then((data)=>{
        setIsLoading(false); // set to false once we have the data
        setLoadedMeetups(data);
    }); 

    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    return (
    <div>
        <h1>Al Meetups</h1>
        <MeetupList meetups={loadedMeetups} />
    </div>);
}

export default AllMeetupsPage;