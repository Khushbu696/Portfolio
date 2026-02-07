import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/Preloader.css";

const Preloader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const name = "Khushbu Patel";
  const letters = name.split("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(".preloader", {
            autoAlpha: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: onComplete,
          });
        },
      });

      // Name dramatic entrance
      tl.fromTo(
        ".letter",
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        },
      )
        // Subtle scale pulse
        .to(".preloader-name", {
          scale: 1.05,
          duration: 0.6,
          ease: "power2.out",
        })
        .to(".preloader-name", {
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        })

        // Progress bar fill
        .fromTo(
          ".progress-bar-fill",
          { width: "0%" },
          {
            width: "100%",
            duration: 1.4,
            ease: "power2.inOut",
          },
          "-=0.4",
        )

        // Small dramatic pause
        .to({}, { duration: 0.4 });
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="preloader" ref={loaderRef}>
      <div className="preloader-content">
        <h1 className="preloader-name">
          {letters.map((letter, index) => (
            <span key={index} className="letter">
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>

        <div className="progress-bar">
          <div className="progress-bar-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
