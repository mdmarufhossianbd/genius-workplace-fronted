import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const UserProfile = () => {
    const {user} = useContext(AuthContext)    
    const [jobs, setJobs] = useState([])
    const [appliedJobs, setAppliedJobs] = useState([])
   
    useEffect(() => {
        fetch(`http://localhost:5000/all-jobs/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [user])

    const url = `http://localhost:5000/applied-jobs/${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAppliedJobs(data)
            })
    }, [url])

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-center items-center h-[200px] my-10 rounded-md bg-[#1b304477]">
                <h2 className="text-5xl text-white font-semibold">Profile</h2>
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <img className="mb-5" src={user?.photoURL} alt="" />
                    <h4 className="font-medium text-xl my-1">Name : {user?.displayName}</h4>
                    <h4 className="font-medium text-xl">E-mail : {user?.email}</h4>
                </div>                
                <div>
                    <h2 className="text-xl font-semibold my-2">Your Activity</h2>
                    <h4 className="text-xl font-medium my-2">Total Application : {appliedJobs.length}</h4>
                    <h4 className="text-xl font-medium my-2">Total Job Post : <Link to={'/my-jobs'}>{jobs.length}</Link></h4>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;