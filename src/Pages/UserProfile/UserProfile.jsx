import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const UserProfile = () => {
    const {user} = useContext(AuthContext)
    
    const [jobs, setJobs] = useState([])

    const url = `http://localhost:5000/all-jobs/${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setJobs(data)
            })
    }, [url])

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-center items-center h-[300px] bg-brown-400">
                <h2>Profile</h2>
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <img src={user?.photoURL} alt="" />
                    <h4>Name :{user?.displayName}</h4>
                    <h4>E-mail :{user?.email}</h4>
                </div>                
                <div>
                    <h2>Your Activity</h2>
                    <h4>Total Application : {0}</h4>
                    <h4>Total Job Post : <Link to={'/my-jobs'}>{jobs.length}</Link></h4>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;