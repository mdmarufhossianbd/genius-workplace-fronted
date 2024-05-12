import { useContext } from "react";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const JobDetails = () => {
    const { user } = useContext(AuthContext)
    const job = useLoaderData()
    // console.log(user);

    const { jobBanner, jobTitle, jobCategory, minSalary, maxSalary, deadline, jobDescription, applied_count } = job;

    const handleApply = e => {
        e.preventDefault();
        const form = e.target;
        const applicantEmail = form.applicant_email.value;
        const applicantName = form.applicant_name.value;
        const applicantResume = form.applicant_resume.value;
        const applyData = {
            applicantEmail, applicantName, applicantResume
        }
        const today = new Date().toDateString()
        const expriedDate = new Date(deadline).toDateString()
        console.log(today);

        if (today > expriedDate) {
            toast.error("This job apply date is expried.")
            return
        }

        fetch(`${import.meta.env.VITE_API_URL}/applies`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(applyData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged == true) {
                    toast.success("your applicaiton successfully added.")
                }
            })
    }

    return (
        <div>
            <h2 className="text-center text-4xl font-bold md:mt-20 mt-10">Job Details</h2>
            <div className="max-w-7xl lg:mx-auto md:flex gap-5 border-2 px-4 py-8 my-10 rounded md:mx-5 mx-3">
                <div className="md:w-[70%]">
                    <img className="w-full" src={jobBanner} />
                    <h2 className="my-5 text-2xl font-semibold">{jobTitle}</h2>
                    <p>{jobDescription}</p>
                </div>

                <div className="md:ml-10 ml-0 md:mt-0 mt-5">
                    <div className="mb-4">
                        <p className="font-semibold">Job Category </p>
                        <p>{jobCategory}</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold">Salary (monthly)</p>
                        <p>${minSalary} - ${maxSalary}</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold">Deadline  </p>
                        <p >{new Date(deadline).toLocaleDateString()}</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold">Total Apply</p>
                        <p>{applied_count} person</p>
                    </div>
                    <div>
                        <button className="text-xl font-semibold px-4 py-2 rounded bg-[#05A659] text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>Apply Now</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Application From!</h3>
                                <p className="py-4">For apply in this job sumbit your resume link</p>
                                <form onSubmit={handleApply} className="flex flex-col gap-3">
                                    <input className="bg-blue-gray-300 p-2" type="text" name="applicant_name" disabled defaultValue={user?.displayName} />
                                    <input className="bg-blue-gray-300 p-2" type="email" name="applicant_email" disabled defaultValue={user?.email} />
                                    <input className="bg-blue-gray-300 p-2" type="text" name="applicant_resume" placeholder="enter your resume link" />
                                    <input className="btn" type="submit" value="Apply" />
                                </form>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;