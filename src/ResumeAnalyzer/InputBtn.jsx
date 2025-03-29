import React from "react";
import styled from "styled-components";

const InputBtn = () => {
  return (
    <StyledWrapper>
      <button className="btn-53">
        <div className="original">Submit</div>
        <div className="letters">
          <span>S</span>
          <span>U</span>
          <span>B</span>
          <span>M</span>
          <span>I</span>
          <span>T</span>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn-53,
  .btn-53 *,
  .btn-53 :after,
  .btn-53 :before,
  .btn-53:after,
  .btn-53:before {
    border: 0 solid;
    box-sizing: border-box;
  }

  .btn-53 {
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: button;
    background-color: #dfecf5;
    border: 2px solid #b2d1e7;
    background-image: none;
    color: #212121;
    cursor: pointer;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-size: 1.2rem; /* Reduced font size */
    line-height: 1.5;
    margin: 0;
    -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
    padding: 0;
  }

  .btn-53:disabled {
    cursor: default;
  }

  .btn-53:-moz-focusring {
    outline: auto;
  }

  .btn-53 svg {
    display: block;
    vertical-align: middle;
  }

  .btn-53 [hidden] {
    display: none;
  }

  .btn-53 {
    border-radius: 40px; /* Adjusted border-radius */
    box-sizing: border-box;
    display: block;
    font-weight: 900;
    overflow: hidden;
    padding: 0.4rem 2rem; /* Reduced padding */
    position: relative;
    text-transform: uppercase;
  }

  .btn-53 .original {
    background: linear-gradient(135deg, #add8e6, #007bff);
    color: rgba(255, 255, 255, 0.9);
    display: grid;
    font-weight: 700;
    inset: 0;
    place-content: center;
    position: absolute;
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1);
    font-size: 1.2rem; /* Ensure smaller text */
  }

  .btn-53:hover .original {
    transform: translateY(100%);
  }

  .btn-53 .letters {
    display: inline-flex;
  }

  .btn-53 span {
    opacity: 0;
    transform: translateY(-10px);
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1), opacity 0.2s;
    font-size: 1.2rem; /* Reduce animation text size */
  }

  .btn-53 span:nth-child(2n) {
    transform: translateY(10px);
  }

  .btn-53:hover span {
    opacity: 1;
    transform: translateY(0);
  }

  .btn-53:hover span:nth-child(2) {
    transition-delay: 0.1s;
  }

  .btn-53:hover span:nth-child(3) {
    transition-delay: 0.2s;
  }

  .btn-53:hover span:nth-child(4) {
    transition-delay: 0.3s;
  }

  .btn-53:hover span:nth-child(5) {
    transition-delay: 0.4s;
  }

  .btn-53:hover span:nth-child(6) {
    transition-delay: 0.5s;
  }
`;

export default InputBtn;
