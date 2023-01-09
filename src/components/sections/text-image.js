import React from 'react'
import styled from 'styled-components'
import Image from '../../images/pexels-philippe-donn-1169754.jpg'

const TextImage = () => {
  return (
    <StyledTextImageSection>
      <div>
        <h2>Text Section Header</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          nulla quidem. Blanditiis unde laudantium at tempora non? Ad
          consectetur eos quam, sequi repellendus nisi officia quis. Assumenda
          odio nihil quos.
        </p>
      </div>
      <div>
        <img
          src={Image}
          alt="image"
        />
      </div>
    </StyledTextImageSection>
  );
}

export default TextImage


const StyledTextImageSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-basis: 1;
  justify-content: center;
  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    align-items: center;
    div {
      flex-basis: 40%;
    }
    flex-direction: row;
  }
`;