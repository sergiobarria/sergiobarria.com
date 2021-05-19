import {
  Box,
  Alert,
  Code,
  Heading,
  Link,
  Text,
  Divider,
  useColorMode,
} from '@chakra-ui/react';
// import { jsx } from '@emotion/react';
// import NextLink from 'next/link';

const MDXComponents = {
  br: props => <Box height="24px" {...props} />,
  h1: props => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: props => <Heading as="h2" size="lg" my={4} {...props} />,
  inlineCode: props => <Code colorScheme="yellow" fontSize="1rem" {...props} />,
  p: props => <Text as="p" mt={0} mb={4} lineHeight="tall" {...props} />,
};

export default MDXComponents;
