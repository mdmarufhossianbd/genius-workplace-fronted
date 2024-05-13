import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const JobCard = ({ job }) => {
    const { _id, jobBanner, jobTitle,  deadline} = job;

    return (
        <div className='p-4 border rounded-md bg-[#05a6584b]'>
            <img className='rounded' src={jobBanner} />
            <h2 className='mt-2 font-semibold'>{jobTitle}</h2>
            <div className='flex justify-between py-2 items-center'>
                <p>Deadline : {new Date (deadline).toLocaleDateString()}</p>
                <Link to={`/job-details/${_id}`}><button className='py-2 px-4 bg-[#05A659] rounded text-white'>View</button></Link>
            </div>
        </div>
    );
};

JobCard.propTypes = {
    job: PropTypes.object
}

export default JobCard;