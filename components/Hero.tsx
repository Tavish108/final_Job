import { useAuth0 } from "@auth0/auth0-react";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Button } from "./ui/MovingBorders";

const Hero = () => {
  const { user, loginWithRedirect, isAuthenticated,logout } = useAuth0();
  console.log("Current User",user);
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      {/* Logo placed outside the navbar */}
      <div className="absolute top-8 left-10 z-[6000]">
        <a href="/" aria-label="Go to home">
        
          {isAuthenticated ? (
              <button onClick={(e)=>logout()}></button>
            ):(<button onClick={(e) => loginWithRedirect}>Login</button>)}
          <button
            style={{
              position: "absolute", // Make it positionable
              top: "1px", // Move it from the top of the container (adjust value as needed)
              left: "10px", // Move it from the left of the container (adjust value as needed)
              border: "2px solid #4CAF50", // Green border
              padding: "10px 20px",
              // width:"2px,"
              borderRadius: "8px", // Rounded corners
              backgroundColor: "white",
              color: "#4CAF50", // Text color matching the border
              fontSize: "12px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => loginWithRedirect()}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#4CAF50")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "white")
            }
          >
            Log In
          </button>
        </a>
      </div>

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"></p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Empowering Job Seekers with Tailored Opportunities"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! Job Questor connects you with job opportunities that align with
            your skills and aspirations. Simplify your job search with
            intelligent recommendations and tools.
          </p>

          <a href="#about">
            <MagicButton
              title="Explore"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
