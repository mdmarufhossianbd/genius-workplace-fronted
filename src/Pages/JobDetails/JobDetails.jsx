import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const job = useLoaderData()

    console.log(job);
    const { jobBanner, jobTitle, jobCategory, minSalary, maxSalary, deadline, jobDescription, applied_count } = job;

    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <img src={jobBanner} alt="" />
                <h2>{jobTitle}</h2>
                <p>{jobDescription}</p>
                <p>Total Apply : {applied_count} person</p>
                <div>
                    <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Apply Now</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;