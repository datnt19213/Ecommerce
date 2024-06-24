"use client";
import Image1 from "@/assets/images/bluebrown.png";
import Image2 from "@/assets/images/dark.png";
import Image3 from "@/assets/images/green.png";
import ImageDevice1 from "@/assets/images/blue_headphones.jpg";
import ImageDevice2 from "@/assets/images/black_earbuds.webp";
import ImageDevice3 from "@/assets/images/green_earbuds.webp";
import {useEffect, useRef, useState} from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {Button} from "../button";
import {Props} from "@/type";

const listSlide = [];

export default function Home({children, className, verbose}: Props) {
  const [srcImg, setSrcImg] = useState(Image1.src);
  const [srcDevice, setSrcDevice] = useState(ImageDevice1.src);

  const [stateChange, setStateChange] = useState(1);

  // useEffect(() => {
  //   function loopImage(num: number) {
  //     setTimeout(() => {
  //       if (num === 1) {
  //         setSrcImg(Image1.src);
  //         setSrcDevice(ImageDevice1.src);
  //         setStateChange(1);
  //         loopImage(2);
  //       } else if (num === 2) {
  //         setSrcImg(Image2.src);
  //         setSrcDevice(ImageDevice2.src);
  //         setStateChange(2);
  //         loopImage(3);
  //       } else if (num === 3) {
  //         setSrcImg(Image3.src);
  //         setSrcDevice(ImageDevice3.src);
  //         setStateChange(3);
  //         loopImage(1);
  //       }
  //     }, 5000);
  //   }
  //   loopImage(stateChange);
  // }, [stateChange]);
  // ----------------------------------------------------------------
  //#region
  // const [dashOffsets, setDashOffsets] = useState([100, 100, 100]);

  // const intervalRef = useRef<NodeJS.Timeout | null>(null);
  // const dashOffsetIntervalRefs = useRef<(NodeJS.Timeout | null)[]>([
  //   null,
  //   null,
  //   null,
  // ]);

  // const startInterval = () => {
  //   intervalRef.current = setInterval(() => {
  //     setStateChange((prev) => (prev === 3 ? 1 : prev + 1));
  //   }, 6000);
  // };

  // const startDashOffsetInterval = (index: number) => {
  //   let offset = 100;
  //   dashOffsetIntervalRefs.current[index] = setInterval(() => {
  //     offset -= 20;
  //     setDashOffsets((prev) => {
  //       const newOffsets = [...prev];
  //       newOffsets[index] = offset;
  //       return newOffsets;
  //     });
  //     if (offset <= 0) {
  //       clearInterval(dashOffsetIntervalRefs.current[index]!);
  //     }
  //   }, 1000);
  // };

  // const resetInterval = () => {
  //   if (intervalRef.current) {
  //     clearInterval(intervalRef.current);
  //   }
  //   dashOffsetIntervalRefs.current.forEach((interval, index) => {
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //     setDashOffsets((prev) => {
  //       const newOffsets = [...prev];
  //       newOffsets[index] = 100;
  //       return newOffsets;
  //     });
  //   });
  //   startInterval();
  // };

  // useEffect(() => {
  //   startInterval();
  //   return () => {
  //     clearInterval(intervalRef.current!);
  //     dashOffsetIntervalRefs.current.forEach((interval) => {
  //       if (interval) {
  //         clearInterval(interval);
  //       }
  //     });
  //   };
  // }, []);

  // useEffect(() => {
  //   switch (stateChange) {
  //     case 1:
  //       setSrcImg(Image1.src);
  //       setSrcDevice(ImageDevice1.src);
  //       break;
  //     case 2:
  //       setSrcImg(Image2.src);
  //       setSrcDevice(ImageDevice2.src);
  //       break;
  //     case 3:
  //       setSrcImg(Image3.src);
  //       setSrcDevice(ImageDevice3.src);
  //       break;
  //     default:
  //       break;
  //   }
  //   resetInterval();
  //   startDashOffsetInterval(stateChange - 1);
  // }, [stateChange]);

  // const handleStateChange = (num: number) => {
  //   setStateChange(num);
  //   resetInterval();
  //   startDashOffsetInterval(num - 1);
  // };
  //#endregion
  //#region
  const [dashOffsets, setDashOffsets] = useState([100, 100, 100]);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const dashOffsetIntervalRefs = useRef<(NodeJS.Timeout | null)[]>([
    null,
    null,
    null,
  ]);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setStateChange((prev) => (prev === 3 ? 1 : prev + 1));
    }, 6000);
  };

  const startDashOffsetInterval = (index: number) => {
    let offset = 100;
    dashOffsetIntervalRefs.current[index] = setInterval(() => {
      offset -= 20;
      setDashOffsets((prev) => {
        const newOffsets = [...prev];
        newOffsets[index] = offset;
        return newOffsets;
      });
      if (offset <= 0) {
        clearInterval(dashOffsetIntervalRefs.current[index]!);
      }
    }, 1000);
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    dashOffsetIntervalRefs.current.forEach((interval, index) => {
      if (interval) {
        clearInterval(interval);
      }
      setDashOffsets((prev) => {
        const newOffsets = [...prev];
        newOffsets[index] = 100;
        return newOffsets;
      });
    });
    startInterval();
  };

  useEffect(() => {
    startInterval();
    return () => {
      clearInterval(intervalRef.current!);
      dashOffsetIntervalRefs.current.forEach((interval) => {
        if (interval) {
          clearInterval(interval);
        }
      });
    };
  }, []);

  useEffect(() => {
    switch (stateChange) {
      case 1:
        setSrcImg(Image1.src);
        setSrcDevice(ImageDevice1.src);
        break;
      case 2:
        setSrcImg(Image2.src);
        setSrcDevice(ImageDevice2.src);
        break;
      case 3:
        setSrcImg(Image3.src);
        setSrcDevice(ImageDevice3.src);
        break;
      default:
        break;
    }
    resetInterval();
    startDashOffsetInterval(stateChange - 1);
  }, [stateChange]);

  const handleStateChange = (num: number) => {
    setStateChange(num);
    resetInterval();
    startDashOffsetInterval(num - 1);
  };
  // #endregion

  return (
    // #region old
    // <div className="w-full bg-black">
    //   <div className="w-full h-[894px] overflow-hidden relative">
    //     <img
    //       key={srcImg}
    //       src={srcImg}
    //       alt="image-bg"
    //       className="w-full h-[894px] object-fill object-center z-10 absolute top-0 left-0 animate-slowfadeintonozoom bg-no-repeat"
    //     />
    //     <div className="px-8 w-full">
    //       <div className="max-w-[1600px] max-h-[720px] h-screen z-20 relative w-full flex items-center mx-auto overflow-hidden rounded-xl top-24">
    //         <img
    //           key={srcDevice}
    //           src={srcDevice}
    //           alt="imgslide"
    //           className="h-full w-full object-cover object-center rounded-xl ease-in-out animate-slowfadeinto"
    //         />

    //         <div className="absolute bottom-9 right-9 flex items-center z-[1] rounded-full gap-2">
    //           {[1, 2, 3].map((num) => (
    //             <Button
    //               key={num}
    //               className="cursor-pointer rounded-full overflow-hidden"
    //               onClick={() => handleStateChange(num)}
    //             >
    //               <div className="relative size-9">
    //                 <svg
    //                   className="size-full"
    //                   width="36"
    //                   height="36"
    //                   viewBox="0 0 36 36"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <circle
    //                     cx="18"
    //                     cy="18"
    //                     r="16"
    //                     fill="none"
    //                     className="stroke-current text-gray-slay"
    //                     strokeWidth="2"
    //                   ></circle>
    //                   <g className="origin-center -rotate-90 transform">
    //                     <circle
    //                       cx="18"
    //                       cy="18"
    //                       r="16"
    //                       fill="none"
    //                       className="stroke-current text-white transition-all ease-linear duration-1000"
    //                       strokeWidth="2"
    //                       strokeDasharray="100"
    //                       strokeDashoffset={dashOffsets[num - 1]}
    //                     ></circle>
    //                   </g>
    //                 </svg>
    //                 <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
    //                   <span className="text-center text-sm font-bold text-gray">
    //                     {num}
    //                   </span>
    //                 </div>
    //               </div>
    //             </Button>
    //           ))}
    //         </div>

    //         <div
    //           className={`absolute h-full w-full flex items-center ${
    //             stateChange === 1 && "justify-end"
    //           }`}
    //         >
    //           {stateChange === 3 && (
    //             <div className="flex flex-col px-20 text-white font-bold gap-4">
    //               <span className="mb-4 animate-slowslidebotttop overflow-hidden">
    //                 Introduction the MW08 Sport
    //               </span>
    //               <div className="overflow-hidden flex flex-col gap-4">
    //                 <span className="animate-slowslidebotttop text-6xl">
    //                   High-Performance &
    //                 </span>
    //                 <span className="animate-slowslidebotttop text-6xl mb-2">
    //                   Elegant Design
    //                 </span>
    //               </div>
    //               <Button className="bg-white mt-4 py-5 px-2 w-full max-w-60 text-deepGreen font-bold hover:opacity-90 transition-all">
    //                 Shop the MW08 Sport
    //               </Button>
    //             </div>
    //           )}
    //           {stateChange === 2 && (
    //             <div className="flex flex-col px-20 text-white font-bold gap-4">
    //               <span className="mb-4 animate-slowslidebotttop">
    //                 High-end Earphones
    //               </span>
    //               <div className="overflow-hidden flex flex-col gap-4">
    //                 <span className="animate-slowslidebotttop text-6xl">
    //                   Premium Audio
    //                 </span>
    //                 <span className="animate-slowslidebotttop text-6xl mb-2">
    //                   Products
    //                 </span>
    //               </div>
    //               <Button className="bg-white mt-4 py-5 px-2 w-full max-w-60 text-deepDark font-bold hover:opacity-90 transition-all">
    //                 Discover Collection
    //               </Button>
    //             </div>
    //           )}
    //           {stateChange === 1 && (
    //             <div className="flex flex-col items-end text-right px-20 text-white font-bold gap-4">
    //               <span className="mb-4 animate-slowslidebotttop">
    //                 High-end Earphones
    //               </span>
    //               <div className="overflow-hidden flex flex-col gap-4">
    //                 <span className="animate-slowslidebotttop text-6xl">
    //                   High-Performance Sound
    //                 </span>
    //                 <span className="animate-slowslidebotttop text-6xl mb-2">
    //                   Tools
    //                 </span>
    //               </div>
    //               <Button className="bg-deepBlue mt-4 py-5 px-2 w-full max-w-60 text-white font-bold hover:opacity-90 transition-all">
    //                 Discover Collection
    //               </Button>
    //             </div>
    //           )}
    //         </div>
    //       </div>
    //     </div>

    //     {/* content body */}

    //     <div className=""></div>
    //   </div>
    // </div>

    // #endregion
    <div
      className={className}
      style={{width: "100%", backgroundColor: "black"}}
    >
      <div
        style={{
          width: "100%",
          height: "894px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          key={srcImg}
          src={srcImg}
          alt="image-bg"
          style={{
            width: "100%",
            height: "894px",
            objectFit: "fill",
            objectPosition: "center",
            zIndex: "10",
            position: "absolute",
            top: "0",
            left: "0",
            animation: "slowfadeintonozoom 1s linear",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div style={{paddingLeft: "2rem", paddingRight: "2rem", width: "100%"}}>
          <div
            style={{
              maxWidth: "1600px",
              maxHeight: "720px",
              height: "100vh",
              zIndex: "20",
              position: "relative",
              width: "100%",
              display: "flex",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
              overflow: "hidden",
              borderRadius: "0.75rem",
              top: "6rem",
            }}
          >
            <img
              key={srcDevice}
              src={srcDevice}
              alt="imgslide"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "0.75rem",
                transition: "ease-in-out 0.3s",
                animation: "slowfadeinto 1s linear",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "2.25rem",
                right: "2.25rem",
                display: "flex",
                alignItems: "center",
                zIndex: "1",
                borderRadius: "9999px",
                gap: "0.5rem",
              }}
            >
              {[1, 2, 3].map((num) => (
                <Button
                  key={num}
                  style={{
                    cursor: "pointer",
                    borderRadius: "9999px",
                    overflow: "hidden",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  onClick={() => handleStateChange(num)}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "2.25rem",
                      height: "2.25rem",
                    }}
                  >
                    <svg
                      style={{width: "100%", height: "100%"}}
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        style={{stroke: "currentColor", color: "gray"}}
                        strokeWidth="2"
                      ></circle>
                      <g
                        style={{
                          transformOrigin: "center",
                          transform: "rotate(-90deg)",
                        }}
                      >
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          style={{
                            stroke: "currentColor",
                            color: "white",
                            transition: "all linear 1s",
                            strokeWidth: "2",
                            strokeDasharray: "100",
                            strokeDashoffset: dashOffsets[num - 1],
                          }}
                        ></circle>
                      </g>
                    </svg>
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <span
                        style={{
                          textAlign: "center",
                          fontSize: "0.875rem",
                          fontWeight: "bold",
                          color: "gray",
                        }}
                      >
                        {num}
                      </span>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: stateChange === 1 ? "flex-end" : "flex-start",
              }}
            >
              {stateChange === 3 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "5rem",
                    paddingRight: "5rem",
                    color: "white",
                    fontWeight: "bold",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      marginBottom: "1rem",
                      animation: "slowslidebotttop 1s linear",
                      overflow: "hidden",
                    }}
                  >
                    Introduction the MW08 Sport
                  </span>
                  <div
                    style={{
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <span
                      style={{
                        animation: "slowslidebotttop 1s linear",
                        fontSize: "4rem",
                      }}
                    >
                      High-Performance &
                    </span>
                    <span
                      style={{
                        animation: "slowslidebotttop 1s linear",
                        fontSize: "4rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Elegant Design
                    </span>
                  </div>
                  <Button
                    style={{
                      backgroundColor: "white",
                      marginTop: "1rem",
                      padding: "1.25rem 0.5rem",
                      width: "100%",
                      maxWidth: "15rem",
                      color: "#495F4B",
                      fontWeight: "bold",
                      transition: "all 0.3s",
                      border: "none",
                      borderRadius: "999px",
                    }}
                  >
                    Shop the MW08 Sport
                  </Button>
                </div>
              )}
              {stateChange === 2 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "5rem",
                    paddingRight: "5rem",
                    color: "white",
                    fontWeight: "bold",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      marginBottom: "1rem",
                      animation: "slowslidebotttop 1s linear",
                    }}
                  >
                    High-end Earphones
                  </span>
                  <div
                    style={{
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <span
                      style={{
                        animation: "slowslidebotttop 1s linear",
                        fontSize: "4rem",
                      }}
                    >
                      Premium Audio
                    </span>
                    <span
                      style={{
                        animation: "slowslidebotttop 1s linear",
                        fontSize: "4rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Products
                    </span>
                  </div>
                  <Button
                    style={{
                      backgroundColor: "white",
                      marginTop: "1rem",
                      padding: "1.25rem 0.5rem",
                      width: "100%",
                      maxWidth: "15rem",
                      color: "#1A1A1A",
                      fontWeight: "bold",
                      transition: "all 0.3s",
                      border: "none",
                      borderRadius: "999px",
                    }}
                  >
                    Discover Collection
                  </Button>
                </div>
              )}
              {stateChange === 1 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    textAlign: "right",
                    paddingLeft: "5rem",
                    paddingRight: "5rem",
                    color: "white",
                    fontWeight: "bold",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      marginBottom: "1rem",
                      animation: "slowslidebotttop 1s linear",
                    }}
                  >
                    High-end Earphones
                  </span>
                  <div
                    style={{
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <span
                      style={{
                        animation: "slowslidebotttop 1s linear",
                        fontSize: "4rem",
                      }}
                    >
                      High-Performance Sound
                    </span>
                    <span
                      style={{
                        animation: "slowslidebotttop 1s linear",
                        fontSize: "4rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Tools
                    </span>
                  </div>
                  <Button
                    style={{
                      backgroundColor: "#313F5F",
                      marginTop: "1rem",
                      padding: "1.25rem 0.5rem",
                      width: "100%",
                      maxWidth: "15rem",
                      color: "white",
                      fontWeight: "bold",
                      transition: "all 0.3s",
                      border: "none",
                      borderRadius: "999px",
                    }}
                  >
                    Discover Collection
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
