import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export const Home: React.FC = () => {
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
      <Heading as="h1" size="2xl" mb={6} color="teal">
        Welcome to the Home Page
      </Heading>

      <Box mb={8}>
        <Text fontSize="lg" color="dark">
          This is where you will find the main content of the website. Explore
          and learn more about our journey!
        </Text>
      </Box>

      <Box
        borderWidth={1}
        borderRadius="md"
        p={6}
        bg="rgba(255, 255, 255, 0.8)"
        boxShadow="sm"
        mb={8}
      >
        <Heading as="h2" size="lg" mb={4}>
          We are the BLOPS Team
        </Heading>
        <Text>
          We, Team BLOPS, started with a simple idea: create a fun game that
          could help people learn languages. That’s when we decided on
          EuroLingo. It was our first time working with Phaser, TypeScript and
          MongoDB, and honestly, we had no idea how much we were about to learn.
        </Text>

        <Text mt={4}>
          From the start, we dove into the documentation, tutorials, and a lot
          of trial, error, and... OMG, merge conflicts. Phaser had so many cool
          features, but it also came with its challenges. We spent countless
          evenings and weekends coding, debugging, and figuring out how to make
          the game fun and educational at the same time.
        </Text>

        <Text mt={4}>
          There were a lot of long nights and moments where we weren’t sure how
          to fix something, but we kept pushing through. And slowly, EuroLingo
          started to come together. The game wasn’t just about learning words—it
          was about making that process fun, with smooth gameplay and colorful
          visuals.
        </Text>

        <Text mt={4}>
          Finally, after all the hard work, we launched the game. Seeing people
          play and enjoy it was the best feeling. The feedback was amazing, and
          it made all the late nights and weekends totally worth it.
        </Text>

        <Text mt={4}>
          Looking back, we’re super proud of what we created. EuroLingo was our
          first project using Phaser, and it taught us so much. We are really
          lucky to have such an amazing team, and really proud of our work!
        </Text>
      </Box>

      <Box
        borderWidth={1}
        borderRadius="md"
        p={6}
        bg="rgba(255, 255, 255, 0.8)"
        boxShadow="sm"
        mb={8}
      >
        <Heading as="h2" size="lg" mb={4}>
          Project History
        </Heading>
        <Text fontSize="lg" color="gray.700">
          Here is where we can add your project history, milestones,
          achievements.
        </Text>
      </Box>
    </Box>
  );
};
