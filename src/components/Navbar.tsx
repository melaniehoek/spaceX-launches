import { useColorMode } from "@chakra-ui/color-mode";
import { Container, Heading, Box, Text, HStack } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";
import Link from "next/link";

import { PATHS } from "utils";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Container
        as="header"
        maxW="container.lg"
        py="4"
        display="flex"
        flexDirection={["column", "row"]}
        justifyContent="space-between"
      >
        <Heading textDecoration="none" as="h1" size="lg">
          <Link href={`${PATHS.HOME}`}>SpaceX Launches</Link>
        </Heading>

        <HStack s="4" alignSelf="flex-end">
          <Text
            fontSize="sm"
            fontWeight="bold"
            color={colorMode === "dark" && "whiteAlpha.500"}
          >
            Light
          </Text>
          <Switch
            defaultChecked={colorMode === "dark"}
            size="lg"
            onChange={toggleColorMode}
          />
          <Text
            fontSize="sm"
            fontWeight="bold"
            color={colorMode === "light" && "blackAlpha.500"}
          >
            Dark
          </Text>
        </HStack>
      </Container>
    </Box>
  );
};
