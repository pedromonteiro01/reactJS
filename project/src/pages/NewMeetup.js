import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() { 
    function addMeetupHandler(meetupData) { 
        fetch(
            'https://react-getting-started-757a0-default-rtdb.firebaseio.com/meetups.json',
            {
                method:'POST',
                body:JSON.stringify(meetupData),
                headers:{
                    'Content-Type':'application/json'
                }
            }
        ); //js function -> sends http request, by default sends GET request
    }

    return (
        <section>
            <h1>Add New Meetup</h1> 
            <NewMeetupForm onAddMeetup={addMeetupHandler} />

        </section>
    );
}

export default NewMeetupPage;