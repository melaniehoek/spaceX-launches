import { FC } from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/layout";
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
  const bg = useColorModeValue("blackAlpha.50", "whiteAlpha.50");

  return (
    <Box
      borderRadius="lg"
      onClick={() => router.push(PATHS.LAUNCH(id))}
      cursor="pointer"
      boxShadow="md"
      _hover={{ boxShadow: "xl" }}
      bg={bg}
    >
      <VStack spacing="4" align="start" p="4">
        <Image
          src={flickr_images[0]}
          // todo fallback img
          fallbackSrc="https://via.placeholder.com/70"
          alt={`spaceX rocket: ${mission_name}`}
          borderRadius="full"
          boxSize="70px"
        />
        <VStack align="start">
          <LaunchBadge upcoming={upcoming} launch_success={launch_success} />
          <Box>
            <Heading as="h3" size="md">
              {mission_name}
            </Heading>
            <Text color="gray.500" fontSize="sm">
              {formatDate(launch_date_unix)}
            </Text>
          </Box>
        </VStack>
      </VStack>
    </Box>
  );
};
