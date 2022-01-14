import React, { useState } from 'react';

const Form = ({handleSubmit}) => {

    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    

    function onFormSubmit(event) {
        const data = {
            name: name,
            job: job
        };
        event.preventDefault();
        
        handleSubmit(data);
        setName("");
        setJob("");

    }




        return (
            <form onSubmit={onFormSubmit}>
                <label for="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={(e) => setName(e.target.value)} />
                <label for="job">Job</label>
                <input 
                    type="text" 
                    name="job" 
                    id="job"
                    value={job} 
                    onChange={(e) => setJob(e.target.value)} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
}

export default Form;
