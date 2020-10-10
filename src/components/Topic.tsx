import React from "react";
import { Heading } from "rebass";

const variations = {
  large: "fontSizeLargeHeading",
  medium: "fontSizeMediumHeading",
};

const Topic: React.FC<{
  variation: "large" | "medium";
  marginTop?: string;
}> = ({ children, variation, marginTop }) => {
  return (
    <Heading
      fontSize={variations[variation]}
      marginTop={marginTop}
      textAlign="center"
      fontFamily="font"
      color="primary"
    >
      {children}
    </Heading>
  );
};

export default Topic;
