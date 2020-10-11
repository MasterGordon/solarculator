import { useTheme } from "emotion-theming";
import React from "react";
import { Box, Text } from "rebass";

const BigButton: React.FC<{
  selected: number;
  index: number;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  margin?: string;
  height?: string;
}> = ({ children, selected, index, onClick, margin, height }) => {
  const theme = useTheme() as any;
  return (
    <Box p={[1, 2]} width={0.5} margin={margin} onClick={onClick} css={{ cursor: "pointer" }}>
      <Text
        margin={["0.5em", "0.75em"]}
        height={height}
        p={1}
        fontFamily="font"
        fontSize="fontSizeText"
        textAlign="center"
        padding="1em"
        css={{
          boxShadow: "1px 1px 20px 1px rgba(0,0,0,.22)",
          border: selected === index ? "2px solid " + theme.colors.secondary : "none", //TODO: da
        }}
      >
        {children}
      </Text>
    </Box>
  );
};

export default BigButton;
