import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import HowItWork from "./HowItWork";
import JobCategory from "./JobCategory";
import OurClients from "./OurClients";


const Home = () => {
    const jobs = useLoaderData()    
    return (
        <div>
            <Banner></Banner>
            <JobCategory jobs={jobs}></JobCategory>
            <HowItWork></HowItWork>
            <OurClients></OurClients>
        </div>
    );
};


export default Home;