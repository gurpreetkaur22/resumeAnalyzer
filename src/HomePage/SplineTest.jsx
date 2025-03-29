import React from "react";
import Spline from "@splinetool/react-spline";
import Btn from "./Btn";

const SplineTest = () => {
  return (
    <div className="relative">
      <div className="hero w-[40%] h-auto flex flex-col gap-3 absolute top-52 bg-transparent left-40">
        <h1 className="text-[2.5rem] font-semibold">
          Boost Your Career with AI-Powered Resume & Interview Analysis
        </h1>
        <h3 className="text-[1.2rem]">
          Optimize your resume, ace mock interviews, and get job recommendations
          - all in one place!
        </h3>
        <div className="btns flex gap-8">
          <Btn label="Upload Resume" />
          <Btn label="Start Mock Interview" />
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <Spline
          className="w-full h-full"
          scene="https://prod.spline.design/FxzHvalyrO-yCovj/scene.splinecode"
        ></Spline>
      </div>
    </div>
  );
};

export default SplineTest;
