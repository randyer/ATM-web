import { useState, useEffect } from "react";
import chevron from "../assets/chevron.svg";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 5000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative flex justify-center items-center w-full h-full">
      <div
        className="flex transition-transform ease-out duration-500 h-full w-full items-center"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 flex items-center justify-center"
          >
            {slide}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between max-w-4xl left-0 right-0 mx-auto">
        <button onClick={prev}>
          <img src={chevron} alt="left" className="w-10 md:w-16 rotate-180" />
        </button>
        <button onClick={next}>
          <img src={chevron} alt="left" className="w-10 md:w-16" />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2 max-w-full">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
