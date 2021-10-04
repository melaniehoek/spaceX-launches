import { FC } from "react";
import { Container, Box, Heading, Text, VStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
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
  details,
}) => {
  const router = useRouter();

  return (
    <Container
      variant="cardOuter"
      onClick={() => router.push(PATHS.LAUNCH(id))}
    >
      <Box
        position="relative"
        transformStyle="preserve-3d"
        width="100%"
        height="100%"
        transition="transform 0.8s"
        borderRadius="inherit"
        sx={{
          "&:hover .card-front": {
            transform: "rotateY(180deg)",
          },
          "&:hover .card-back": {
            transform: "rotateY(0deg)",
          },
        }}
      >
        <Container className="card-front" variant="cardFace">
          <VStack spacing="4" align={["center", "start"]}>
            <Image
              src={flickr_images?.[0]}
              fallbackSrc="/fallback.png"
              alt={`spaceX rocket: ${mission_name}`}
              borderRadius="full"
              boxSize="70px"
            />
            <VStack align={["center", "start"]}>
              <LaunchBadge
                upcoming={upcoming}
                launch_success={launch_success}
              />
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
        <Container
          variant="cardFace"
          transform="rotateY(180deg)"
          className="card-back"
          position="absolute"
          top="0"
        >
          <Text textAlign={["center", "start"]} noOfLines={8}>
            {details}
          </Text>
        </Container>
      </Box>
    </Container>
  );
};
