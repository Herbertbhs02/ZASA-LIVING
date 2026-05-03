import React from "react";

const About = () => {
  return (
     <div className="p-4">
      <img
        src="images/lifestyle.png"
        alt=""
        className="float-left mr-4 mb-2 w-40"
      />

      <p>
        This text should start to the right of the image. As it continues,
        it will wrap underneath the image once it reaches the bottom.
        Keep adding more text here to see the effect clearly.
      </p>
    </div>
  );
};

export default About;