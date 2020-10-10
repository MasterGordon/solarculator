import React from "react";
import { Image } from "rebass";

const StepOneImage: React.FC<{
  src: string;
}> = ({ src }) => {
  return (
    <Image
      css={{
        position: "relative",
        top: "50%",
        transform: "translate(0, -50%)",
      }}
      src={src}
    />
  );
};

export default StepOneImage;
