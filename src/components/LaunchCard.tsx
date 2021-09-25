import { FC } from "react";
import { Container, Box, Heading, Text, VStack } from "@chakra-ui/layout";
import { Image, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { ILaunch } from "types";
import { formatDate, PATHS } from "utils";
import { LaunchBadge } from "components";

export const LaunchCard: FC<ILaunch> = ({
  id,
  mission_name,
  links: { flickr_images },
  launch_date_unix,
  launch_success,
  upcoming,
}) => {
  const router = useRouter();
  const hoverBg = useColorModeValue("gray.200", "whiteAlpha.200");

  return (
    <Container
      variant="card"
      onClick={() => router.push(PATHS.LAUNCH(id))}
      cursor="pointer"
      _hover={{ boxShadow: "sm", bg: hoverBg }}
    >
      <VStack spacing="4" align={["center", "start"]}>
        <Image
          src={flickr_images?.[0]}
          fallbackSrc="/fallback.png"
          alt={`spaceX rocket: ${mission_name}`}
          borderRadius="full"
          boxSize="70px"
        />
        <VStack align={["center", "start"]}>
          <LaunchBadge upcoming={upcoming} launch_success={launch_success} />
          <VStack spacing="0" align={["center", "start"]}>
            <Heading as="h3" size="md" textAlign={["center", "start"]}>
              {mission_name}
            </Heading>
            <Text variant="muted" fontSize="sm">
              {formatDate(launch_date_unix)}
            </Text>
          </VStack>
        </VStack>
      </VStack>
    </Container>
  );
};
