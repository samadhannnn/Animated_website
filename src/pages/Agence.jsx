import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 20%",
        end: "top -110%",
        markers: false,
        pin: true,
        pinSpacing:true,
        pinReparent:true,
        pinType:"transform",
        scrub:1,
        anticipatePin:1,
        invalidateOnRefresh:true, 
        onUpdate: (elem) => {
          let imageIndex;

          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }

          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });
    return (
        <div className="relative min-h-screen ">
            <div className="section1 relative py-1 min-h-screen">
                <div ref={imageDivRef} className="h-[20vw] overflow-hidden rounded-2xl w-[15vw] absolute top-60 left-[30vw] z-0">
                    <img ref={imageRef} className="h-full w-full object-cover" src="/picture/pic1.jpg" alt="Agency image" />
                </div>
                <div className="font-[font2] relative z-40 text-black">
                    <div className="mt-[55vh]">
                        <h1 className="text-[19vw] text-center uppercase leading-[17vw]">
                            SEVEN7Y <br />
                            TWO
                        </h1>
                    </div>
                    <div className="pl-[40%] mt-20 text-black">
                        <p className="text-6xl leading-14">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We're inquisitive and open-minded, and we make sure creativity
                            crowds out ego from every corner. A brand is a living thing, with
                            values, a personality and a story. If we ignore that, we can
                            achieve short-term success, but not influence that goes the
                            distance. We bring that perspective to every brand story
                             we help tell.
                        </p>
                    </div>
                </div>
            </div>

            <div className="section2 h-screen relative z-40">

            </div>

        </div>
    );
};

export default Agence;
