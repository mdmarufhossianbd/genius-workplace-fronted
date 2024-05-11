import { Link } from "react-router-dom";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from '../../assets/images/slider/1.png';
import slider2 from '../../assets/images/slider/2.png';
import slider3 from '../../assets/images/slider/3.png';
const Banner = () => {

    return (
        <div className="max-w-7xl mx-auto">           
            <div className="relative">
                <Swiper className="mySwiper"
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                >
                    <SwiperSlide>
                    <img className="rounded-md" src={slider1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img className="rounded-md" src={slider2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img className="rounded-md" src={slider3} alt="" />
                    </SwiperSlide>                   
                </Swiper>
            </div>
            <div className="absolute top-[30%] ml-20 z-10 max-w-[400px]">
                <h2 className="text-white text-5xl font-bold ">Find Your Dream <span className="text-[#05A659] text-5xl">Job</span> In One Place</h2>
                <p className="text-white my-10">Explore handpicked opportunities aligned with your ambitions. Our user-friendly platform simplifies your search, seamlessly connecting you with your perfect role. Let us guide you through the vast professional landscape. Welcome to a realm where dreams materialize into reality.</p>
                <Link to={'/all-jobs'}> <button className="bg-[#05A659] text-white py-2 px-4 rounded text-xl">Find Now</button> </Link>
            </div>
        </div>
    );
};

export default Banner;