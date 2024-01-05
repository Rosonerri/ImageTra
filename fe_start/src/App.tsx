import { useRef, useEffect, useState } from "react";
import pix from "./assets/1.jpg";
import pix1 from "./assets/148974102_445466609892383_7874184193133531924_n.jpg";
import pix2 from "./assets/155318566_10216072686689873_1007444146574051055_n.jpg";
import pix3 from "./assets/162765943_10222815417111596_4303365903815819513_n.jpg";
import pix4 from "./assets/75446632_10218307015804381_1177849383123681280_n.jpg";

import { MdExpandLess } from "react-icons/md";
const Card = () => {
  const dot: React.MutableRefObject<any> = useRef();
  const dot1: React.MutableRefObject<any> = useRef();
  const dot2: React.MutableRefObject<any> = useRef();
  const dot3: React.MutableRefObject<any> = useRef();
  const dot4: React.MutableRefObject<any> = useRef();

  let images = [pix, pix1, pix2, pix3, pix4];

  const [state, setState] = useState<number>(0);
  const addState = () => {
    setState((el) => el + 1);
  };
  const removeState = () => {
    if (state > 0) {
      setState((el) => el - 1);
    } else if (state <= 0) {
      setState(images.length - 1);
    }
  };

  let myColor = ["white", "lightgray", "lightgray", "lightgray", "lightgray"];
  let myColor1 = ["lightgray", "white", "lightgray", "lightgray", "lightgray"];
  let myColor2 = ["lightgray", "lightgray", "white", "lightgray", "lightgray"];
  let myColor3 = ["lightgray", "lightgray", "lightgray", "white", "lightgray"];
  let myColor4 = ["lightgray", "lightgray", "lightgray", "lightgray", "white"];

  useEffect(() => {
    dot.current.style.backgroundColor = myColor[state % myColor.length];
    dot1.current.style.backgroundColor = myColor1[state % myColor1.length];
    dot2.current.style.backgroundColor = myColor2[state % myColor2.length];
    dot3.current.style.backgroundColor = myColor3[state % myColor3.length];
    dot4.current.style.backgroundColor = myColor4[state % myColor4.length];
  }, [state]);

  useEffect(() => {
    addState();
    removeState();
  }, []);

  return (
    <div className=" mx-2 shadow-md flex min-w-[600px] h-80 bg-white border rounded-md">
      <div className="w-[40%] h-80 object-cover rounded-l-md relative ">
        <div className="w-full h-full absolute flex  text-white top-2 left-[45%] ">
          <div className="w-2 h-2 bg-white rounded-full mx-[2px]" ref={dot} />
          <div className="w-2 h-2 bg-white rounded-full mx-[2px] " ref={dot1} />
          <div className="w-2 h-2 bg-white rounded-full mx-[2px] " ref={dot2} />
          <div className="w-2 h-2 bg-white rounded-full mx-[2px] " ref={dot3} />
          <div className="w-2 h-2 bg-white rounded-full mx-[2px] " ref={dot4} />
        </div>

        <div className="w-full h-full absolute top-0 opacity-0 hover:opacity-100 transition-all duration-300 hover:cursor-pointer ">
          <div
            className="bg-white h-[20px] flex justify-center items-center w-[20px] rounded-full rotate-90 absolute top-[50%] right-2 hover:scale-110 transition-all duration-300 hover:bg-[rgba(255,255,255,0.9)]  "
            onClick={addState}
          >
            <MdExpandLess />
          </div>
          <div
            className="bg-white h-[20px] flex justify-center items-center w-[20px] rounded-full -rotate-90 absolute top-[50%] left-2 hover:scale-110 transition-all duration-300 hover:bg-[rgba(255,255,255,0.9)] "
            onClick={removeState}
          >
            <MdExpandLess />
          </div>
        </div>
        <img
          src={images[state % images.length]}
          className="w-full h-80 object-cover rounded-l-md "
        />
      </div>

      <div className="flex-1 p-4 h-full flex flex-col ">
        <div className="flex justify-between items-center mr-[70px] ">
          <h1 className="font-[700] text-[20px] ">Classic Utility Jacket</h1>
          <div className="font-bold text-gray-400 ml-[50px]">$115</div>
        </div>
        <div className="text-[12px] mb-8 ">In Stock</div>
        <div className="w-full flex mb-6">
          <div className="bg-black rounded-md py-2 px-3 text-white font-bold mr-2 ">
            XS
          </div>
          <div
            className="text-gray-700 rounded-md py-2 px-3 font-bold mr-2 transition-all duration-300 hover:bg-black hover:text-white hover:cursor-pointer
            "
          >
            M
          </div>
          <div className="text-gray-700 rounded-md py-2 px-3 font-bold mr-2 transition-all duration-300 hover:bg-black hover:text-white hover:cursor-pointer">
            LG
          </div>
          <div className="text-gray-700 rounded-md py-2 px-3 font-bold mr-2 transition-all duration-300 hover:bg-black hover:text-white hover:cursor-pointer">
            XL
          </div>
        </div>
        <hr />

        <div className="flex items-center my-6 flex-1 ">
          <button className="px-4 py-2 mr-3 bg-black text-white rounded-sm hover:cursor-pointer hover:scale-[1.02] transition-all duration-300 ">
            Buy Now
          </button>
          <button className="px-4 py-2 mr-3 bg-white text-black rounded-sm border hover:cursor-pointer hover:scale-[1.02] transition-all duration-300">
            Add to bag
          </button>
        </div>

        <div className="text-[12px]">
          Free shipping on all continential US orders
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <div className="w-full h-[100vh] flex justify-center items-center ">
        <div className="flex border p-8 w-[95%] overflow-x-scroll ">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
