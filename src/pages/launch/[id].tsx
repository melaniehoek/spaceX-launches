import { FC } from "react";
import { gql } from "@apollo/client";
import { Heading, HStack, Text, VStack, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

import client from "apollo-client";
import { PageLayout, LaunchBadge } from "components";
import { ILaunchDetail } from "types";

const LaunchPage: FC<ILaunchDetail> = ({
  mission_name,
  details,
  launch_success,
  upcoming,
  links: { flickr_images },
}) => {
  return (
    <PageLayout>
      <HStack spacing="6" align="start">
        <Image
          src={flickr_images[0]}
          // todo fallback img
          fallbackSrc="https://via.placeholder.com/70"
          alt={`spaceX rocket: ${mission_name}`}
          w="400px"
          h="500px"
          objectFit="cover"
        />
        <VStack align="start">
          <Heading as="h2">{mission_name}</Heading>
          <LaunchBadge upcoming={upcoming} launch_success={launch_success} />
          <Text maxW="xl">{details}</Text>
        </VStack>
      </HStack>
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
          }
          launch_date_unix
          launch_success
          upcoming
        }
      }
    `,
  });

  return {
    props: data.launch,
  };
};
