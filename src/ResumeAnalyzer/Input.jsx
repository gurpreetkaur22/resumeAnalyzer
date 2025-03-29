import React from "react";
import styled from "styled-components";

const Input = () => {
  return (
    <StyledWrapper>
      <input
        placeholder="Enter your text..."
        className="input"
        name="text"
        type="text"
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input {
    background-color: #212121;
    font-size: 1.4rem;
    width: 380px;
    height: 55px;
    padding: 10px;
    // border: 2px solid white;
    border-radius: 16px;
    color: white; /* Ensures the input text is white */
  }

  .input::placeholder {
    color: white; /* Changes placeholder text color to white */
    opacity: 0.7; /* Adjusts opacity if needed */
  }

  .input:focus {
    color: rgb(109, 166, 226);
    background-color: #212121;
    outline: none;
    // outline-color: rgb(109, 166, 226);
    box-shadow: -3px -3px 15px rgb(109, 166, 226); /* Updated box shadow color */
    transition: .1s;
    transition-property: box-shadow;
  }
`;


export default Input;
