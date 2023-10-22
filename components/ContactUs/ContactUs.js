import { TiTick } from "react-icons/ti";
import { useForm /* ValidationError */ } from "@formspree/react";
import styles from "@/styles/Contact/Contact.module.css";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xzbowgvq");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thanks for email us. We will contact to you soon!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (state.errors.length > 0) {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [state.errors.length, state.succeeded]);

  return (
    <div className={`bg-black p-4 py-16 ${styles.container}`}>
      <div className="bg-black/70 grid gap-5 grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-white text-[2rem] md:text-[3rem] font-bold">
            We Are <span className="primaryText">Perfect Solutions</span> For{" "}
            <span className="primaryText">Your Business</span>
          </h1>
          <p className="my-8 text-gray-400 font-semibold">
            Our dedication to excellence is evident in our
            top-notch IT services. Understanding customers unique requirements
            is our forte. Delivered by seasoned experts, aimed at tackling your
            most crucial operations. We specialize in refining processes to
            achieve unparalleled excellence.
          </p>
          <div>
            <div className="flex items-center">
              <TiTick size={32} className="primaryText" />
              <p className="font-bold text-white ml-2">
                We are committed to providing quality IT Services.
              </p>
            </div>
            <div className="flex items-center">
              <TiTick size={32} className="primaryText" />
              <p className="font-bold text-white ml-2">
                Really know the true needs and expectations of customers.
              </p>
            </div>
            <div className="flex items-center">
              <TiTick size={32} className="primaryText" />
              <p className="font-bold text-white ml-2">
                Provided by experts to help challenge critical activities
              </p>
            </div>
            <div className="flex items-center">
              <TiTick size={32} className="primaryText" />
              <p className="font-bold text-white ml-2">
                Processes of achieving the excellence improvements
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="p-5">
          <div className="grid gap-5 grid-cols-2">
            <input
              required
              placeholder="Your Name"
              name="name"
              className="border border-1 border-white px-4 py-3 bg-transparent outline-none text-white w-full"
            />
            <input
              required
              placeholder="Your Email"
              name="email"
              className="border border-1 border-white px-4 py-3 bg-transparent outline-none text-white w-full"
            />
            <input
              required
              placeholder="Your Phone"
              name="phone"
              className="border border-1 border-white px-4 py-3 bg-transparent outline-none text-white w-full"
            />
            <input
              required
              placeholder="Your Address"
              name="address"
              className="border border-1 border-white px-4 py-3 bg-transparent outline-none text-white w-full"
            />
          </div>
          <textarea
            required
            placeholder="Additional Details..."
            name="message"
            className="mt-5 border border-1 border-white px-4 py-3 bg-transparent outline-none text-white w-full min-h-[180px]"
          />
          {state?.errors?.length > 0 && (
            <p className="text-red-600">You cannot submit empty form </p>
          )}
          <button type="submit" className="primaryBtn">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
