import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UserProfile = () => {
    const {user} = useContext(AuthContext)    
    const [jobs, setJobs] = useState([])
    const [appliedJobs, setAppliedJobs] = useState([])

    const jobUrl = `http://localhost:5000/all-jobs/${user?.email}`
    useEffect(() => {
        fetch(jobUrl, {credentials: "include"})
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [user, jobUrl])

    const appliedJobUrl = `http://localhost:5000/applied-jobs/${user?.email}`
    useEffect(() => {
        fetch(appliedJobUrl, {credentials: "include"})
            .then(res => res.json())
            .then(data => {
                setAppliedJobs(data)
            })
    }, [appliedJobUrl])

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-center items-center h-[200px] my-10 rounded-md bg-[#05a6584b]">
                <h2 className="md:text-5xl text-4xl font-semibold">Profile</h2>
            </div>
            <div className="grid md:grid-cols-2 mx-4 md:mx-0">
                <div>
                    <img className="mb-5" src={user?.photoURL} alt="" />
                    <h4 className="font-medium text-xl my-1">Name : {user?.displayName}</h4>
                    <h4 className="font-medium text-xl">E-mail : {user?.email}</h4>
                </div>                
                <div className="flex flex-col justify-center">
                    <h2 className="text-xl font-semibold my-2">Your Activity</h2>
                    <h4 className="text-xl font-medium my-2">Total Application : {appliedJobs.length}</h4>
                    <h4 className="text-xl font-medium my-2">Total Job Post : {jobs.length}</h4>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;