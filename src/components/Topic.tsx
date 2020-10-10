import React from "react";
import { Heading } from "rebass";

const variations = {
  large: "fontSizeLargeHeading",
  medium: "fontSizeMediumHeading",
};

const Topic: React.FC<{
  children: string;
  variation: "large" | "medium";
}> = ({ children, variation }) => {
  return (
    <Heading
      textAlign="center"
      fontFamily="font"
      color="primary"
      fontSize={variations[variation]}
    >
      {children}
    </Heading>
  );
};

export default Topic;
