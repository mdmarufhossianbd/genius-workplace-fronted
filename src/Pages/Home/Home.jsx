import Banner from "./Banner";
import HowItWork from "./HowItWork";
import JobCategory from "./JobCategory";
import OurClients from "./OurClients";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <HowItWork></HowItWork>
            <OurClients></OurClients>
        </div>
    );
};


export default Home;