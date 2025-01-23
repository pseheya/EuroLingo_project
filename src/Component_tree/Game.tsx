import {
  Box,
  Heading,
  Text,
  Button,
  Link,
  Image,
  Center,
} from "@chakra-ui/react";

const Game = () => {
  return (
    <Box
      p={6}
      maxW="1200px"
      mx="auto"
      mt="calc(4rem + 16px)"
      bg="gray.100"
      borderRadius="md"
      boxShadow="xl"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      color="black"
    >
      <Heading as="h1" size="lg" mb={4}>
        Welcome to EuroLingo Game!
      </Heading>

      <Text mb={6}>
        EuroLingo is an exciting and educational game designed to help you learn
        languages in a fun way. It’s packed with engaging challenges that make
        language learning both enjoyable and effective.
      </Text>

      <Text mb={6}>
        If you’re ready to try the game, we’ve got you covered! We’ve hosted it
        on Netlify, so you can play it anytime, anywhere. Just click the link
        below to get started and enjoy your language-learning adventure with
        EuroLingo!
      </Text>

      {/* Centered button */}
      <Center mb={6}>
        <Link
          href="https://eurolingo.netlify.app/"
          target="blanck"
          _hover={{ textDecoration: "underline" }}
        >
          <Button colorScheme="teal" size="lg">
            Play EuroLingo Now!
          </Button>
        </Link>
      </Center>

      {/* Screenshot Component */}
      <Box mb={6}>
        <Heading as="h2" size="md" mb={4}>
          A Sneak Peek of the Game!
        </Heading>
        <Image
          src="/assets/eurolingo_screenshot.png"
          alt="EuroLingo Screenshot"
          boxSize="100%"
          objectFit="cover"
          borderRadius="md"
        />
      </Box>

      <Text>
        We're really excited for you to try it out and hope you have a great
        time learning with EuroLingo. Enjoy the game, and good luck with your
        language skills!
      </Text>
    </Box>
  );
};

export default Game;
