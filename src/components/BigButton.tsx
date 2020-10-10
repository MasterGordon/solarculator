import React from "react";
import { Box, Text } from "rebass";

const BigButton: React.FC<{
  selected: number;
  margin?: string;
  height?: string;
  index: number;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}> = ({ children, selected, margin, height, index, onClick }) => {
  return (
    <Box p={[1, 2]} width={0.5} margin={margin} onClick={onClick}>
      <Text
        p={1}
        fontFamily="font"
        fontSize="fontSizeText"
        textAlign="center"
        padding="1em"
        height={height}
        margin={["0.5em", "0.75em"]}
        css={{
          boxShadow: "1px 1px 20px 1px rgba(0,0,0,.22)",
        }}
        backgroundColor={selected === index ? "red" : "white"}
      >
        {children}
      </Text>
    </Box>
  );
};

export default BigButton;
