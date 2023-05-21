import Slider from "react-slick";
import bannerOne from '@/Assests/Images/itsolu-1.jpg'
import bannerTwo from '@/Assests/Images/itsolu-2.jpg'
import Image from "next/image";
const Banner = () => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <div className="relative">
                        <Image src={bannerOne} alt="Banner one" />
                        <div className="absolute top-[20%] left-4 z-10">
                            <h1 className="text-white font-bold mb-8" style={{ fontSize: "6rem" }}>Creating a Better <br /> <span className="primaryText">IT Solutions.</span> </h1>
                            <p className="text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            <button className="primaryBtn">Contact Us</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <Image src={bannerTwo} alt="Banner two" />
                        <div className="absolute top-[20%] left-4 z-10">
                            <h1 className="text-white font-bold mb-8" style={{ fontSize: "6rem" }}>Creating a Better <br /> <span className="primaryText">IT Solutions.</span> </h1>
                            <p className="text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            <button className="primaryBtn">Contact Us</button>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;