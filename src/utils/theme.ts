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
