import { Link, Flex, Box, Container } from '@chakra-ui/react';
import NextLink from 'next/link';
import styled from '@emotion/styled';

const MainContainer = ({ children }) => {
  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <Container maxWidth={1200} centerContent>
      <StickyNav>
        <Box>
          <NextLink href="/">
            <Link
              as="a"
              variant="ghost"
              _hover={{ backgroundColor: 'crimson' }}
            >
              Home
            </Link>
          </NextLink>
          <NextLink href="/about">
            <Link
              as="a"
              variant="ghost"
              _hover={{ backgroundColor: 'crimson' }}
            >
              About
            </Link>
          </NextLink>
        </Box>
      </StickyNav>
      <Flex as="main" justifyContent="center" flexDirection="column">
        {children}
      </Flex>
    </Container>
  );
};

export default MainContainer;
