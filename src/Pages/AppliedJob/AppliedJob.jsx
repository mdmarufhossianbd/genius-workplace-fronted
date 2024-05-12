import { Button, Card, CardBody, CardHeader, Input, Typography } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AppliedCard from "./AppliedCard";

const AppliedJob = () => {
    const {user} = useContext(AuthContext);

    const [myAppliedJobs, setMyAppliedJobs] = useState()

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/applied-jobs/${user?.email}`)
        .then(res=>res.json())
        .then(data=>
            setMyAppliedJobs(data)
        )
    },[user])

    return (
        <div>
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
                myAppliedJobs?.length == 0 ?
                <p>You do not applied any job.</p>  :            
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
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {                            
                            myAppliedJobs?.map(job=> <AppliedCard key={job._id} job={job} ></AppliedCard>)
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
        </div>
    );
};

export default AppliedJob;