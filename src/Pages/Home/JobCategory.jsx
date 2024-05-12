import PropTypes from 'prop-types';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard/JobCard';

const JobCategory = ({ jobs }) => {

    return (
        <div className='flex flex-col justify-center items-center my-20'>
            <h2 className='text-5xl font-semibold mb-10'>Popular Job Category</h2>
            <div className='max-w-7xl mx-auto'>
                <Tabs>
                    <TabList>
                        <div className='text-center'>
                            <Tab>All</Tab>
                            <Tab>On Site</Tab>
                            <Tab>Part Time</Tab>
                            <Tab>Remote</Tab>
                            <Tab>Hybrid</Tab>
                        </div>
                    </TabList>

                    <TabPanel>
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                jobs.map(job => <JobCard key={job._id} job={job} ></JobCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                jobs.filter(j => j.jobCategory === "On Site").map(job => <JobCard key={job._id} job={job} ></JobCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                jobs.filter(j => j.jobCategory === "Part Time").map(job => <JobCard key={job._id} job={job} ></JobCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                jobs.filter(j => j.jobCategory === "Remote").map(job => <JobCard key={job._id} job={job} ></JobCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                jobs.filter(j => j.jobCategory === "Hybrid").map(job => <JobCard key={job._id} job={job} ></JobCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

JobCategory.propTypes = {
    jobs: PropTypes.array
}


export default JobCategory;