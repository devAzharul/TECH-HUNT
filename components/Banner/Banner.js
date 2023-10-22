import Slider from "react-slick";
import bannerOne from '@/Assests/Images/itsolu-1.jpg'
import bannerTwo from '@/Assests/Images/itsolu-2.jpg'
import Image from "next/image";
import Link from "next/link";
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
                        <div className="absolute top-[30%] left-4 z-10">
                            <h1 className="text-white font-bold mb-8 text-[2rem] md:text-[3rem]">Best Web Design & Development Services: <br/> <span className="primaryText">Enhance Your Online Presence Today</span></h1>
                            <p className="text-gray-300">The Art challenges the technology, and technology inspires the art. - John Lasseter</p>
                            <Link href={"/contact"}><button className="primaryBtn">Contact Us</button></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <Image src={bannerTwo} alt="Banner two" />
                        <div className="absolute top-[30%] left-4 z-10">
                        <h1 className="text-white font-bold mb-8 text-[2rem] md:text-[3rem]">Expert Web Design & Development Services: <br/> <span className="primaryText">Enhance Your Online Presence Today</span></h1>
                            <p className="text-gray-300">The Art challenges the technology, and technology inspires the art. - John Lasseter</p>
                            <Link href={"/contact"}><button className="primaryBtn">Contact Us</button></Link>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;