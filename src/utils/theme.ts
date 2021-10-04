import { extendTheme } from "@chakra-ui/react";

const customTheme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  components: {
    Container: {
      variants: {
        card: (props) => ({
          borderRadius: "lg",
          p: 6,
          bg: props.colorMode === "light" ? "gray.100" : "whiteAlpha.50",
          maxW: "container.xl",
          w: "100%",
        }),
        cardOuter: {
          borderRadius: "lg",
          maxW: "container.xl",
          w: "100%",
          h: "250px",
          cursor: "pointer",
          p: 0,
        },
        cardFace: (props) => ({
          p: 6,
          borderRadius: "inherit",
          bg: props.colorMode === "light" ? "gray.100" : "whiteAlpha.50",
          w: "100%",
          h: "100%",
          backfaceVisibility: "hidden",
          transition: "transform 0.8s",
        }),
      },
    },
    Text: {
      variants: {
        muted: (props) => ({
          color:
            props.colorMode === "light" ? "blackAlpha.700" : "whiteAlpha.700",
        }),
      },
    },
  },
};

const theme = extendTheme(customTheme);

export { theme };
