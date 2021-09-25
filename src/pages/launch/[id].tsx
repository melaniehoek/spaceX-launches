import { FC } from "react";
import { gql } from "@apollo/client";
import {
  Heading,
  Stack,
  Link,
  Text,
  VStack,
  Box,
  Flex,
  Container,
} from "@chakra-ui/layout";
import { Icon, Image } from "@chakra-ui/react";
import { FaRocket, FaYoutube, FaWikipediaW, FaNewspaper } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

import client from "apollo-client";
import { PageLayout, LaunchBadge } from "components";
import { ILaunchDetail } from "types";

const LaunchPage: FC<ILaunchDetail> = ({
  mission_name,
  details,
  launch_success,
  upcoming,
  links: { flickr_images, wikipedia, presskit, video_link },
  launch_site: { site_name, site_name_long },
  rocket: { rocket_name, rocket_type },
}) => {
  return (
    <PageLayout>
      <Stack direction={["column", "column", "row"]} spacing="6" align="start">
        {flickr_images?.length && (
          <Image
            src={flickr_images[0]}
            fallbackSrc="/fallback.png"
            alt={`spaceX rocket: ${mission_name}`}
            w={["100%", "100%", "400px"]}
            h={["200px", "200px", "500px"]}
            objectFit="cover"
          />
        )}
        <VStack align="stretch" spacing="4">
          <Container variant="card">
            <VStack align={["center", "start"]} spacing="4">
              <VStack spacing="1" align={["center", "start"]}>
                <Heading as="h2" textAlign={["center", "start"]}>
                  {mission_name}
                </Heading>
                <LaunchBadge
                  upcoming={upcoming}
                  launch_success={launch_success}
                />
                <Text variant="muted">
                  {video_link?.length && (
                    <Link isExternal href={video_link} mr="2">
                      <Icon as={FaYoutube} />
                    </Link>
                  )}
                  {wikipedia?.length && (
                    <Link isExternal href={wikipedia} mr="2">
                      <Icon as={FaWikipediaW} />
                    </Link>
                  )}
                  {presskit?.length && (
                    <Link isExternal href={presskit}>
                      <Icon as={FaNewspaper} />
                    </Link>
                  )}
                </Text>
              </VStack>

              <VStack spacing="1" align={["center", "start"]}>
                <Text variant="muted" textAlign={["center", "start"]}>
                  <Icon as={FaRocket} mr="2" />
                  <span>
                    {rocket_name} {rocket_type}
                  </span>
                </Text>
                <Text variant="muted" textAlign={["center", "start"]}>
                  <Icon as={MdLocationOn} mr="2" />
                  <span>
                    {site_name_long} ({site_name})
                  </span>
                </Text>
              </VStack>
            </VStack>
          </Container>

          {details && (
            <Container variant="card">
              <Text textAlign={["center", "start"]}>{details}</Text>
            </Container>
          )}
        </VStack>
      </Stack>
    </PageLayout>
  );
};

export default LaunchPage;

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  const { data } = await client.query<{ launch: ILaunchDetail }>({
    query: gql`
      {
        launch(id: ${id}) {
          id
          mission_name
          details
          links {
            flickr_images
            video_link
            wikipedia
            presskit  
          }
          launch_date_unix
          launch_success
          upcoming
          launch_site {
            site_name
            site_name_long
          }
          rocket {
            rocket_name
            rocket_type
          }
        }
      }
    `,
  });

  return {
    props: data.launch,
  };
};
