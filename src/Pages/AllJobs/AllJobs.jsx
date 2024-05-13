import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllJobs = () => {
    const alljobs = useLoaderData()
    const [jobs, setJobs] = useState(alljobs);
    const [searchJob, setSearchJob] = useState('')

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/job-search?search=${searchJob}`)
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)
        })
    },[searchJob])

    const handleSearch = e => {
        e.preventDefault();
        const search = e.target.search.value;        
        setSearchJob(search)
    }
    console.log(searchJob);

    return (
        <Card className="h-full max-w-7xl mx-auto">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            All Jobs List
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Search your jobs in this list and build your career.
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <div className="w-full md:w-80 flex gap-4">
                            <form onSubmit={handleSearch}>
                                <input className="border p-2 rounded" type="text" name="search" placeholder="search here" id="" />
                                <input className="px-4 py-2 bg-[#05A659] text-white font-semibold rounded" type="submit" value="Search" />
                            </form>
                        </div>
                    </div>
                </div>                
            </CardHeader>
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
                                Job Publish Date
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
                            jobs?.map(job=><tr key={job._id} className="border-b border-blue-gray-50 py-4">
                            <td className="p-4">
                                <h2>{job.jobTitle}</h2>
                            </td>
                            <td className="flex gap-3 p-4">
                                <h1>Min Salary : $ {job.minSalary}</h1>
                                <h1>Max Salary : $ {job.maxSalary}</h1>
                            </td>
                            <td className="p-4">
                                <p>{new Date (job.publishDate).toLocaleDateString()}</p>
                            </td>
                            <td className="p-4">
                                <p>{new Date (job.deadline).toLocaleDateString()}</p>
                            </td>
                            <td className="p-4">
                                <Link to={`/job-details/${job._id}`}><button>View</button></Link>
                            </td>
                        </tr>)
                        }

                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <div className="flex justify-between w-full">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}

export default AllJobs;