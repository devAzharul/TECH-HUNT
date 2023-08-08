import back from "@/Assests/Images/typing.jpg";
import man from "@/Assests/Images/man-1.png";
import Image from "next/image";
import styles from "@/styles/Mission/Mission.module.css";
const Mission = () => {
  return (
    <div className={`flex ${styles.container} flex-col md:flex-row `}>
      <div className="bg-black/40 md:pt-28">
        <h2 className="font-bold text-[2rem] md:text-[3rem] text-white my-4 text-center">"Our <span className="primaryText">mission</span> is to
          <span className="primaryText"> protect</span> your{" "}
          <span className="primaryText">businesses</span> and help them thrive"
        </h2>
        <div className="mr-16 grid place-content-end">
          <button className="primaryBtn ">Discover More</button>
        </div>
      </div>
      <div className="bg-black/60">
        <Image src={man} alt="man's picture" className="w-full" />
      </div>
    </div>
  );
};

export default Mission;
