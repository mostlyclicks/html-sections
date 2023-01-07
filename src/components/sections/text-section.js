import React from 'react'
import styled from 'styled-components'

const TextSection = () => {
  return (
    <StyledTextSection>
      <div>
        <p>
          This is hero text. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Perspiciatis saepe distinctio dolores culpa laudantium
          blanditiis nesciunt vitae voluptas!
        </p>
      </div>
    </StyledTextSection>
  );
}

export default TextSection

const StyledTextSection = styled.section`
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: #d8d8d8;
  min-height:30vh;
  div {
    flex-basis:80%;
  }

  @media (min-width:768px) {
    div {
      flex-basis:40%;
    }
  }
`;
