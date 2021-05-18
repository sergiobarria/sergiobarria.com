import { Heading, Link, Text, Code, Flex, Box } from '@chakra-ui/react';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Heading as="h1" size="2xl" mb="2">
          Welcome to{' '}
          <Link color="teal.500" href="https://nextjs.org">
            Next.js
          </Link>
        </Heading>
        <Text fontSize="xl" mt="2">
          Get started by editing <Code>pages/index.js</Code>
        </Text>

        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          maxW="800px"
          mt="10"
        >
          <Box
            as="a"
            href="https://nextjs.org/docs"
            p="6"
            m="4"
            borderWidth="1px"
            rounded="lg"
            flexBasis={['auto', '45%']}
          >
            <Heading as="h3" size="lg" mb="2">
              Documentation &rarr;
            </Heading>
            <Text fontSize="lg">
              Find in-depth information about Next.js features and API.
            </Text>
          </Box>
          <Box
            as="a"
            href="https://chakra-ui.com/"
            p="6"
            m="4"
            borderWidth="1px"
            rounded="lg"
            flexBasis={['auto', '45%']}
          >
            <Heading as="h3" size="lg" mb="2">
              Chakra UI &rarr;
            </Heading>
            <Text fontSize="lg">
              Build accessible React apps & websites with speed.
            </Text>
          </Box>
          <Box
            as="a"
            href="https://chakra-ui.com/"
            p="6"
            m="4"
            borderWidth="1px"
            rounded="lg"
            flexBasis={['auto', '45%']}
          >
            <Heading as="h3" size="lg" mb="2">
              Chakra UI &rarr;
            </Heading>
            <Text fontSize="lg">
              Build accessible React apps & websites with speed.
            </Text>
          </Box>
          <Box
            as="a"
            href="https://chakra-ui.com/"
            p="6"
            m="4"
            borderWidth="1px"
            rounded="lg"
            flexBasis={['auto', '45%']}
          >
            <Heading as="h3" size="lg" mb="2">
              Chakra UI &rarr;
            </Heading>
            <Text fontSize="lg">
              Build accessible React apps & websites with speed.
            </Text>
          </Box>
        </Flex>
      </main>
    </div>
  );
}
