import { Button, Card, CardBody, CardHeader, Input, Typography } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';

import { AuthContext } from "../../Provider/AuthProvider";
import TableBody from "./TableBody";

const MyJobs = () => {

    const { user } = useContext(AuthContext)
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

    // delete job
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/all-jobs/${_id}`, {
                    method: "DELETE"
                })
                .then(res=>res.json())
                .then(data=>{

                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    const remainingJobs = jobs.filter( job=> job._id !== _id)
                    setJobs(remainingJobs)
                    }
                })              
            }
          });
    }

    return (
        <div>           
           <Card className="h-full max-w-7xl mx-auto">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                           My Listed Jobs
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Search your jobs in this list and build your career.
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <div className="w-full md:w-72 flex gap-4">
                            <Input
                                label="Search"
                            />
                            <Button>Find</Button>
                        </div>
                    </div>
                </div>                
            </CardHeader>
            {
                jobs.length == 0 ?
                <p>You do not add any job.</p>  :            
                <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            <th
                                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                            >
                                Job Title
                            </th>
                            <th
                                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                            >
                                Salary Range (monthly)
                            </th>
                            <th
                                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                            >
                                Job Posting Date
                            </th>
                            <th
                                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                            >
                                Job Apply Deadline
                            </th>
                            <th
                                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                            >
                                View
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            jobs.map(job=> <TableBody key={job._id} job={job} handleDelete={handleDelete} ></TableBody>)
                        }

                    </tbody>
                </table>
            </CardBody>
            }
            {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <div className="flex justify-between w-full">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter> */}
        </Card>

        </div>
    );
};

export default MyJobs;