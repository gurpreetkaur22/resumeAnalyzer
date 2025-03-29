import React from "react";
import Upload from "./Upload";
import Input from "./Input";
import InputBtn from "./InputBtn";

const Resume = () => {
  return (
    <>
      <div className="h-screen overflow-hidden relative flex flex-col gap-24  bg-gradient-to-b from-[#b2d1e7] to-white">
        <div class="hero-shape">
          <div class="hero-1"></div>
          <div class="hero-2"></div>
          <div class="hero-3"></div>
        </div>
        <div class="hero-shape-2">
          <div class="hero-1"></div>
          <div class="hero-2"></div>
          <div class="hero-3"></div>
        </div>

        <div className="top"></div>
        <div className="title flex flex-col items-center top-20 gap-3">
          <h1 className="text-5xl font-semibold z-10">AI-Powered Resume Analyzer</h1>
          <h3>Upload your resume and get AI-driven feedback to improve it!</h3>
        </div>
        <div className="flex gap-80 justify-center">
          <div className="flex flex-col gap-16">
            <h1 className="text-center text-2xl font-medium">
              Upload your resume:
            </h1>
            <div>
              <Upload />
            </div>
          </div>
          <div className="flex flex-col gap-16 items-center">
            <h1 className="text-center text-2xl font-medium">
              Upload your Job Description:
            </h1>
            <div className="flex flex-col items-center gap-7">
              <Input />
              <InputBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
