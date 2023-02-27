import React, { useEffect, useState } from 'react';

const ShowDetails = () => {
    const [employeedata,setEmployeedata] = useState([]);
    useEffect(()=>{
        fetch(' https://bredex-job-task-server.vercel.app/employee')
        .then(res=>res.json())
        .then(data => setEmployeedata(data))
    },[]);
    console.log(employeedata)
    return (
        <div>
            { employeedata.map(data =><>
                <h1>name: {data.name}</h1>
                <h2>username: {data.username}</h2>
                <h3>phone number: {data.phone}</h3>
                <h3>email: {data.email}</h3>
                </>
            )

            }
            <button>POST</button>
        </div>
    );
};

export default ShowDetails;