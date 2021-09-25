import Icon from "@chakra-ui/icon";
import { Container, HStack, Text, Link } from "@chakra-ui/layout";
import { FaGithub } from "react-icons/fa";

export const Footer = () => (
  <footer>
    <Container maxW="container.lg" py="4">
      <HStack justifyContent={["center"]}>
        <Text variant="muted" fontSize="sm">
          Site by{" "}
          <Link href="https://www.linkedin.com/in/melaniehoek/">
            Melanie Hoek
          </Link>
        </Text>
        <Link href="https://github.com/melaniehoek/spaceX-launches">
          <Icon as={FaGithub} />
        </Link>
      </HStack>
    </Container>
  </footer>
);
