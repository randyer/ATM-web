import { useEffect, useRef, useState } from "react";
import Carousel from "./components/Carousel";
import "./App.css";
import Lenis from "lenis";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const menuRef = useRef(null);

  // Toggle the mobile menu
  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsFadingOut(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (isMenuOpen) {
          toggleMenu();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);
  return (
    <div className="text-center">
      {/* Header */}
      {/* bg-fixed */}
      <div className="relative flex justify-center items-center header w-screen h-screen text-white bg-hero bg-cover bg-center max-w-[100%] mb-10 md:bg-fixed ">
        <div className="flex flex-col justify-center items-center absolute inset-0 bg-black bg-opacity-65">
          <h1 className="italic text-4xl md:text-6xl md:p-4">
            Craniosacral Therapy
          </h1>
          <h2 className="italic text-xl p-2 md:text-4xl md:p-4">
            Healing through gentle touch
          </h2>
        </div>
      </div>
      <nav className="absolute top-0 flex italic justify-between items-center w-full p-4 bg-purple z-50">
        <h1 className="text-lg md:text-xl text-white">
          Alton Therapeutic Massage
        </h1>

        {/* Hamburger button for small screens */}
        <button
          id="hamburger-button"
          className="z-50 h-8 min-w-8 top-4 cursor-pointer text-3xl md:hidden"
          onClick={toggleMenu}
        >
          {/* Hamburger button bars */}
          <div className="relative flex flex-col items-end">
            <div
              className={`h-1 w-8 my-1 rounded bg-white transition-all duration-500 ${
                isMenuOpen ? "origin-center -rotate-45 translate-y-3" : ""
              }`}
            ></div>
            <div
              className={`h-1 w-6 my-1 rounded bg-white transition-opacity duration-500 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`h-1 my-1 rounded bg-white transition-all duration-500 ${
                isMenuOpen
                  ? "origin-center rotate-45 -translate-y-3 w-8"
                  : "w-4"
              }`}
            ></div>
          </div>
        </button>

        {(isMenuOpen || isFadingOut) && (
          <div
            ref={menuRef}
            className={`z-40 absolute top-20 right-0 p-2 mx-2 bg-purple bg-opacity-90  ${
              isMenuOpen && !isFadingOut
                ? "animate-fade-in duration-150"
                : "animate-fade-out duration-150"
            }`}
          >
            <ul className="grid gap-2">
              <li>
                <a
                  href="#Treatments"
                  className="block text-lg text-white p-2 hover:underline"
                  onClick={toggleMenu}
                >
                  Treatments
                </a>
              </li>
              <li>
                <a
                  href="#Expectations"
                  className="block text-lg text-white p-2 hover:underline"
                  onClick={toggleMenu}
                >
                  Expectations
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  className="block text-lg text-white p-2 hover:underline"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#Reviews"
                  className="block text-lg text-white p-2 hover:underline"
                  onClick={toggleMenu}
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#About"
                  className="block text-lg text-white p-2 hover:underline"
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        )}

        <ul className="text-xl justify-between items-center gap-x-4 text-white hidden md:flex">
          <li>
            <a href="#Treatments" className="hover:underline">
              Treatments
            </a>
          </li>
          <li>
            <a href="#Expectations" className="hover:underline">
              Expectations
            </a>
          </li>
          <li>
            <a href="#Contact" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="#Reviews" className="hover:underline">
              Reviews
            </a>
          </li>
          <li>
            <a href="#About" className="hover:underline">
              About
            </a>
          </li>
        </ul>
      </nav>

      <div
        id="Treatments"
        className="flex flex-col bg-black text-white justify-center items-center"
      >
        <h2 className="text-2xl md:text-5xl p-4 self-center ">
          Available Craniosacral Treatments
        </h2>
        <div className="flex flex-col md:flex-row md:gap-4 text-xl md:text-2xl text-purple justify-center">
          <h3 className="md:p-2">30 minutes: $68</h3>
          <h3 className="md:p-2">60 minutes: $130</h3>
          <h3 className="md:p-2">90 minutes: $195</h3>
        </div>

        {/* Treatments */}
        <div className="relative flex flex-wrap mt-8 p-4">
          {/* Each flex-row will contain one header and one paragraph */}
          <div className="flex flex-col gap-2 w-full md:w-1/2 items-center md:p-4">
            <div className="flex items-center gap-2">
              <img className="w-10" src="/person.png" alt="" />
              <h2 className="font-bold text-xl md:text-3xl">
                Soft Tissue Release
              </h2>
            </div>

            <p className="p-4 text-lg md:text-2xl max-w-2xl">
              Pain, tight muscles, or headaches are common complaints treated.
              Flexibility, spine movement, increased circulation, pain relief,
              and muscle relaxation are some effects of this treatment. A more
              focused session rather than a full body treatment is also
              available.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full md:w-1/2 items-center md:p-4">
            <div className="flex items-center gap-2">
              <img className="w-10" src="/happy.png" alt="" />
              <h2 className="font-bold text-xl md:text-3xl">
                Brain Healing & Optimization
              </h2>
            </div>

            <p className="p-4 text-lg md:text-2xl max-w-2xl">
              Restrictions in and around the brain and spinal cord are released,
              resulting in increased nutrition to the brain, clearing of waste
              products, drainage, reduced inflammation, reduced scar tissue, and
              better cognitive processing. This treatment is appropriate for
              concussions, TBIs, and most neurological dysfunction and diseases.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full md:w-1/2 items-center md:p-4">
            <div className="flex items-center gap-2">
              <img className="w-10" src="/calm.png" alt="" />
              <h2 className="font-bold text-xl md:text-3xl">Relaxation</h2>
            </div>

            <p className="p-4 text-lg md:text-2xl max-w-2xl">
              The parasympathetic nervous system is activated and balanced
              through treatment which has a calming effect. Disruption of the
              digestive system due to anxiety and stress can also be addressed
              with this treatment achieving a more complete relaxation.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full md:w-1/2 items-center md:p-4">
            <div className="flex items-center gap-2">
              <img className="w-10" src="/heart.png" alt="" />
              <h2 className="font-bold text-xl md:text-3xl">
                Somato Emotional Release
              </h2>
            </div>

            <p className="p-4 text-lg md:text-2xl max-w-2xl">
              Interestingly, emotion can be stored in body tissue during injury
              or trauma. Somato Emotional Release (SER) allows for the release
              of tension patterns that are held because of an emotional
              component. However, treatment is only intended for use in
              conjunction with psychotherapy.
            </p>
          </div>
        </div>

        <div className="relative w-full h-[40px] md:h-[160px] bg-purple">
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>

        {/* Expectations */}

        <div
          id="Expectations"
          className="flex flex-col p-4 bg-purple text-black"
        >
          <h1 className="font-medium text-3xl md:text-4xl p-4 self-center">
            What to Expect
          </h1>
          <div className="flex flex-col md:flex-row">
            {/* First Section with Image */}
            <div className="flex flex-col items-center">
              <img className=" w-10 md:w-20" src="/levitation.png" alt="" />
              <p className="p-4 text-xl md:text-2xl">
                Light pressure is primarily used, since the craniosacral rhythm
                is very delicate. Tightness and tension patterns in the muscle
                and fascia are found and treated. Energy work can also be used
                when necessary.
              </p>
            </div>

            {/* Second Section with Image */}
            <div className="flex flex-col items-center">
              <img className=" w-10 md:w-20" src="/t-shirt.png" alt="" />
              <p className="p-4 text-xl md:text-2xl">
                You will remain fully clothed during treatment. With that in
                mind, wear comfortable clothing Ex: t-shirt, stretchy pants,
                sweatpants.
              </p>
            </div>

            {/* Third Section with Image */}
            <div className="flex flex-col items-center">
              <img className=" w-10 md:w-20" src="/clean.png" alt="" />
              <p className="p-4 text-xl md:text-2xl">
                Sanitation precautions are taken for the health and wellbeing of
                everyone involved. The office is equipped with a HEPPA filter
                for clean air. Surfaces are wiped clean before and after each
                appointment.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[40px] md:h-[160px] bg-purple">
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>

        {/* <div id="Reviews" className="flex flex-col p-4">
          <h1 className="text-4xl p-4 self-center text-amber-300">Reviews</h1>
          <div className="flex flex-wrap justify-center items-center mt-8">
            <div className="flex flex-col gap-2 w-full md:w-1/2 max-w-2xl justify-center items-center p-4">
              <p className="p-4 md:text-2xl text-amber-300  border-amber-300 rounded">
                Craniosacral is amazing as is Pam! No one better! Do not
                hesitate to make an appointment! Your body will thank you!
                -Becky S. is amazing as is Pam! -Becky S.
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/2 max-w-2xl justify-center items-center p-4">
              <p className="p-4 md:text-2xl text-amber-300  border-amber-300 rounded ">
                Pam is a very detailed, understanding, and the most kind
                therapist I've ever gone to. I would highly recommend her to
                anyone. Her understanding and flexibility is a five-star. -Mary
                T.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/2 max-w-2xl justify-center items-center p-4">
              <p className="p-4 md:text-2xl text-amber-300  border-amber-300 rounded">
                Pam is knowledgeable, thorough, present and most certainly
                therapeutic. Instead of forcing the body to comply, her
                understanding of the body, mind and spirit connection enables
                her to use gentle touch to restore balance. -Vincent D.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/2 max-w-2xl justify-center items-center p-4">
              <p className="p-4 md:text-2xl text-amber-300  border-amber-300 rounded">
                Pam is AMAZING! After a very long time of struggling with hip,
                back, and leg pain, Pam was able to relieve it all in just a few
                visits. It was not what I expected at all. But it is exactly
                what my body needed...and done with great care and compassion.
                This is the place to go...no question!!! -Linda O.
              </p>
            </div>
          </div>
        </div> */}

        {/* Contact */}
        <div
          id="Contact"
          className="flex flex-col justify-center items-center p-2 max-w-[100%]"
        >
          <h1 className="font-medium text-2xl md:text-4xl p-4">Contact Me</h1>

          <p className=" text-lg md:text-2xl">
            Phone: <span className="underline">603-978-0500</span>
          </p>
          <p className=" text-lg md:text-2xl pb-2">
            Email:{" "}
            <span className="underline">AltonTherapeuticMassage@gmail.com</span>
          </p>
          <p className=" text-lg md:text-2xl text-purple">
            Fill out the form below and we'll get back to you within 48 hours to
            schedule an appointment
          </p>
          <a href="https://craniosacralmassagetherapy.com/NewPatientForm.html">
            <button className=" text-lg md:text-2xl px-8 py-2 m-6 bg-purple text-white rounded-3xl hover:bg-purple/65 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out p-4">
              Sign up
            </button>
          </a>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper w-full max-w-5xl h-72 md:h-96 my-8"
          >
            <SwiperSlide className="flex justify-center items-center">
              <img
                className="w-56 md:w-96 md:rounded-2xl aspect-square object-cover rounded-xl"
                src="/outside.jpg"
                alt="Outside entrance"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <img
                className="w-56 md:w-96 md:rounded-2xl aspect-square object-cover rounded-xl"
                src="/inside_entrance.jpg"
                alt="Office entrance"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <img
                className="w-56 md:w-96 md:rounded-2xl aspect-square object-cover rounded-xl"
                src="/inside_chart.jpg"
                alt="Office with charts"
              />
            </SwiperSlide>
          </Swiper>

          <h3 className="md:text-2xl p-4">
            Located at 11B Village Cir, Alton, NH 03809
          </h3>
          <h4 className="md:text-2xl text-amber-300 p-4">
            Hours: by appointment only
          </h4>
          <p className="text-lg md:text-2xl p-4">
            Monday: 10am-7pm <br />
            Tuesday: 10am-7pm <br />
            Wednesday: 11am-7pm <br />
            Thursday: 9am-2pm <br />
            Friday: 12pm-6pm <br />
            Saturday: Closed <br />
            Sunday: Closed
          </p>
          {/* <div className="flex w-1/4"> */}

          {/* <div className="flex flex-col md:flex-row justify-around items-center p-6">
            <img
              className=" mb-10 w-56 aspect-square object-cover rounded-xl m-6"
              src="/inside_entrance.jpg"
              alt="Office entrance"
            />
            <img
              className=" mb-10 w-56 aspect-square object-cover rounded-xl m-6"
              src="/outside.jpg"
              alt="Outside entrance"
            />
            <img
              className=" mb-10 w-56 aspect-square object-cover rounded-xl m-6"
              src="/inside_chart.jpg"
              alt="Office with charts"
            />
          </div> */}
          {/* Reviews */}
          <h1
            id="Reviews"
            className="font-medium p-4 text-4xl self-center text-amber-300"
          >
            Reviews
          </h1>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper w-full max-w-5xl h-72 md:h-80"
          >
            <SwiperSlide className="flex justify-center items-center">
              <p className=" px-16 md:text-2xl text-amber-300 border-amber-300 rounded w-full break-words whitespace-normal max-w-2xl">
                "Craniosacral is amazing as is Pam! No one better! Do not
                hesitate to make an appointment! Your body will thank you!
                -Becky S."
              </p>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <p className="px-16 md:text-2xl text-amber-300 border-amber-300 rounded w-full break-words whitespace-normal max-w-2xl">
                "Pam is a very detailed, understanding, and the most kind
                therapist I've ever gone to. I would highly recommend her to
                anyone. Her understanding and flexibility is a five-star. -Mary
                T."
              </p>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <p className="px-16 md:text-2xl text-amber-300 border-amber-300 rounded w-full break-words whitespace-normal max-w-2xl">
                "Pam is knowledgeable, thorough, present and most certainly
                therapeutic. Instead of forcing the body to comply, her
                understanding of the body, mind and spirit connection enables
                her to use gentle touch to restore balance. -Vincent D."
              </p>{" "}
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <p className="px-16 md:text-2xl text-amber-300 border-amber-300 rounded w-full break-words whitespace-normal max-w-2xl">
                "Pam is AMAZING! After a very long time of struggling with hip,
                back, and leg pain, Pam was able to relieve it all in just a few
                visits. It was not what I expected at all. But it is exactly
                what my body needed...and done with great care and compassion.
                This is the place to go...no question!!! -Linda O."
              </p>{" "}
            </SwiperSlide>
          </Swiper>

          {/* <Carousel>
            <p className="p-10 md:text-2xl text-amber-300 border-amber-300 rounded w-full break-words whitespace-normal max-w-2xl">
              "Craniosacral is amazing as is Pam! No one better! Do not hesitate
              to make an appointment! Your body will thank you! -Becky S."
            </p>
            <p className="p-10 md:text-2xl text-amber-300 border-amber-300 rounded w-full break-words whitespace-normal max-w-2xl">
              "Pam is a very detailed, understanding, and the most kind
              therapist I've ever gone to. I would highly recommend her to
              anyone. Her understanding and flexibility is a five-star. -Mary
              T."
            </p>
            <p className="p-10 md:text-2xl text-amber-300 border-amber-300 rounded w-full break-words whitespace-normal max-w-2xl">
              "Pam is knowledgeable, thorough, present and most certainly
              therapeutic. Instead of forcing the body to comply, her
              understanding of the body, mind and spirit connection enables her
              to use gentle touch to restore balance. -Vincent D."
            </p>
            <p className="p-10 md:text-2xl text-amber-300 border-amber-300 rounded w-full break-words whitespace-normal max-w-2xl">
              "Pam is AMAZING! After a very long time of struggling with hip,
              back, and leg pain, Pam was able to relieve it all in just a few
              visits. It was not what I expected at all. But it is exactly what
              my body needed...and done with great care and compassion. This is
              the place to go...no question!!! -Linda O."
            </p>
          </Carousel> */}

          {/* </div> */}
        </div>

        <div className="relative w-full h-[40px] md:h-[160px] bg-purple">
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>

        {/* About */}
        <div
          id="About"
          className="flex flex-col justify-center items-center p-4 bg-purple text-black w-full"
        >
          <h1 className=" font-medium text-2xl md:text-4xl p-4">About Me</h1>
          <img
            className="w-44 md:w-56 rounded-full p-4"
            src="/profile_pic.jpg"
            alt="profile"
          />
          <p className="text-lg md:text-2xl p-4 max-w-6xl">
            I've been a practicing Massage Therapist since 2009, treating
            clients with Deep Tissue and Swedish Massage for the first few
            years. However, I have transitioned to practicing Craniosacral
            Therapy exclusively. The results are just as good, if not better,
            with a much more gentle approach. I used to live by the saying, "no
            pain, no gain" but I've found that isn't the case when it comes to
            Craniosacral Therapy. Craniosacral Therapy through the Upledger
            Institute has opened my eyes to amazing and effective alternatives
            to the typical massage treatment. I offer my clients a fix for
            muscle tension issues as well as relaxation and stress relief. In
            addition to muscle and fascial tension release, I also specialize in
            treating brain injury and neurological conditions. Common treatment
            of conditions include concussions, migraines, and TBIs. I couldn't
            be happier to offer both relaxation and pain management through
            Craniosacral Therapy.{" "}
          </p>
          <p className="text-lg md:text-2xl p-4 max-w-6xl">
            The human body is miraculous, and we're only beginning to understand
            it's capabilities. My approach is a combination of both eastern and
            western methods with a sound foundation in anatomy and science. If
            you need a positive, energetic and caring Craniosacral Therapist,
            please don't hesitate to contact me to find out how I can help you
            restore and revitalize yourself.
          </p>
          <h1 className=" font-medium text-2xl md:text-4xl p-4">
            Qualifications
          </h1>
          <p className=" text-lg md:text-2xl text-amber-100 ">
            Licensed massage therapist: NH License #3279
          </p>

          <ul className="flex flex-col items-center   text-lg md:text-2xl max-w-4xl self-center list-disc p-6">
            <li className="list-inside">
              2008 Graduate of New Hampshire Institute for Therapeutic Arts
            </li>
            <li className="list-inside">
              Upledeger Institute Medallion Member
            </li>
            <p className="text-amber-100">Completed Disciplines (CEU)</p>
            <li className="list-inside">
              Upledger Institute Craniosacral Therapy 1 (CST1)
            </li>
            <li className="list-inside">
              Upledger Institute Craniosacral Therapy 2 (CST2)
            </li>
            <li className="list-inside">
              Upledger Institute SomatoEmotional Release 1 (SER1)
            </li>
            <li className="list-inside">
              Upledger Institute SomatoEmotional Release 2 (SER2)
            </li>
            <li className="list-inside">
              Upledger Institute CranioSacral Therapy Touching the Brain 1:
              Stimulating Glial Interface (CTTB1)
            </li>
            <li className="list-inside">
              Upledger Institute CranioSacral Therapy Touching the Brain 2:
              Stimulating Self-Correction Through the Glial Interface (CTTB2)
            </li>
            <li className="list-inside">
              Upledger Institute Conception Pregnancy & Birthing 1 (CCPB1)
            </li>
            <li className="list-inside">
              Upledger Institute Craniosacral Therapy for Pediatrics 1 (CSP1)
            </li>
            <li className="list-inside">
              Upledger Institute Unwinding Meridians & Craniosacral Therapy
              (UMAC1)
            </li>
            <li className="list-inside">Myofascial Release</li>
            <li className="list-inside">Cancer & Massage</li>
          </ul>

          <a
            className=" text-lg md:text-2xl text-amber-100 underline "
            href="https://www.upledger.com/therapies/index.php"
          >
            More information on Upledger Institute
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
