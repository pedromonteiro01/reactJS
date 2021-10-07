import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() { 
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(()=>{
        setIsLoading(true);
        // default is a GET request
        fetch(
            'https://react-getting-started-757a0-default-rtdb.firebaseio.com/meetups.json'
        ).then((response)=>{
            return response.json();
        }).then((data)=>{
            const meetups = [];

            for (const key in data) {
                const meetup = {
                    id:key,
                    ...data[key]
                };

                meetups.push(meetup);
            }

            setIsLoading(false); // set to false once we have the data
            setLoadedMeetups(meetups);
        }); 
    }, []); // empty array because there are not external dependencies

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