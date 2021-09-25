import { FC, useMemo, useState } from "react";
import { SimpleGrid, Container, VStack, Text } from "@chakra-ui/layout";
import { gql } from "@apollo/client";
import { orderBy, uniqBy } from "lodash-es";

import client from "apollo-client";
import { ILaunch } from "types";
import { LaunchCard, PageLayout, SearchField } from "components";

interface HomeProps {
  launches: ILaunch[];
}

const Home: FC<HomeProps> = ({ launches }) => {
  const [search, setSearch] = useState<string | null>();

  const filteredLaunches = useMemo(() => {
    if (search?.length) {
      return launches.filter(({ mission_name }) =>
        mission_name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    }

    return launches;
  }, [search, launches]);

  return (
    <PageLayout>
      <VStack align="start" spacing="4">
        <SearchField value={search} setValue={setSearch} />
        {!filteredLaunches?.length ? (
          <Container variant="card" py="2">
            <Text variant="muted">No launches found</Text>
          </Container>
        ) : (
          <SimpleGrid gridGap="4" columns={[1, 2, 3]} my="4">
            {filteredLaunches?.map((launch) => (
              <LaunchCard key={launch.id} {...launch} />
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </PageLayout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data } = await client.query<{ launches: ILaunch[] }>({
    query: gql`
      {
        launches {
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
      launches: orderBy(
        uniqBy(data.launches, "id"),
        "launch_date_unix",
        "desc"
      ),
    },
  };
};
