import React from "react";
import { Box, Text } from "rebass";

const BigButton: React.FC<{
  selected: number;

  index: number;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  margin?: string;
  height?: string;
}> = ({ children, selected, index, onClick, margin, height }) => {
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
          border: selected === index ? "2px solid #fab01a" : "none", //TODO: da
        }}
      >
        {children}
      </Text>
    </Box>
  );
};

export default BigButton;
