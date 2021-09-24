import { FC } from "react";
import { SimpleGrid } from "@chakra-ui/layout";
import { gql } from "@apollo/client";

import client from "apollo-client";

import { ILaunch } from "types";
import { LaunchCard, PageLayout } from "components";

interface HomeProps {
  launches: ILaunch[];
}

const Home: FC<HomeProps> = ({ launches }) => {
  return (
    <PageLayout>
      <SimpleGrid gridGap="4" columns={[1, 2, 3]} my="4">
        {launches.map((launch) => (
          <LaunchCard key={launch.id} {...launch} />
        ))}
      </SimpleGrid>
    </PageLayout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data } = await client.query<{ launches: ILaunch[] }>({
    query: gql`
      {
        launches(limit: 20) {
          id
          mission_name
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
    props: {
      launches: data.launches,
    },
  };
};
