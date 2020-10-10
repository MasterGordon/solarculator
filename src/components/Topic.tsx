import React from "react";
import { Heading } from "rebass";

const variations = {
  large: "fontSizeLargeHeading",
  medium: "fontSizeMediumHeading",
};

const Topic: React.FC<{
  children: string;
  variation: "large" | "medium";
  marginTop?: string;
}> = ({ children, marginTop, variation }) => {
  return (
    <Heading
      textAlign="center"
      fontFamily="font"
      color="primary"
      marginTop={marginTop}
      fontSize={variations[variation]}
    >
      {children}
    </Heading>
  );
};

export default Topic;
