import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import JobCategory from "./JobCategory";
import OurClients from "./OurClients";


const Home = () => {
    const jobs = useLoaderData()    
    return (
        <div>
            <Banner></Banner>
            <JobCategory jobs={jobs}></JobCategory>
            <OurClients></OurClients>
        </div>
    );
};


export default Home;