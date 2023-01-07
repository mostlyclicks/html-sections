import React from 'react'
import Image from '../../images/pexels-philippe-donn-1169754.jpg'

const TextImage = () => {
  return (
    <section>
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
    </section>
  );
}

export default TextImage