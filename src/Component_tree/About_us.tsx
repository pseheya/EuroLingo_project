import React from "react";
import { Box, Heading, Text, Link, Flex, Image } from "@chakra-ui/react";

const teamMembers = [
  {
    name: "Oksana",
    hobbies: "Reading, Hiking, Coding, Rigind",
    linkedIn: "https://www.linkedin.com/in/oksana-herasymenko-4603542a9/",
    gitHub: "https://github.com/pseheya",
    image: "/assets/Oksana_avatar.png",
  },
  {
    name: "Sabrina",
    hobbies: "Photography, Painting, Blogging",
    linkedIn: "https://www.linkedin.com/in/sabrina-fraschetti-39b254347/",
    gitHub: "https://github.com/Sabrinafraschetti",
    image: "/assets/Sabrina_avatar.png",
  },
  {
    name: "Peter",
    hobbies: "Travelling, Watching Sports, Running",
    linkedIn:
      "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAFPnQVABSybCJbDUmfPX-EUKXghps-jGTi8&keywords=peter%20austin&origin=RICH_QUERY_SUGGESTION&position=0&searchId=65a843da-34b1-45e5-a82f-891bdcaccc54&sid=d4d&spellCorrectionEnabled=false",
    gitHub: "https://github.com/pzadev",
    image: "/assets/Peter_avatar.png",
  },
  {
    name: "Lewis",
    hobbies: "Yoga, Writing, Gardening",
    linkedIn: "https://www.linkedin.com/in/",
    gitHub: "https://github.com/Ltay49",
    image: "/assets/Lewis_avatar.png",
  },
  {
    name: "Burhan",
    hobbies: "Gaming, Exploring, ",
    linkedIn: "https://www.linkedin.com/in/",
    gitHub: "https://github.com/IIHHII",
    image: "/assets/Burhan_avatar.png",
  },
];

export const About: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding={8}
      mt="calc(4rem + 16px)"
      bg="grey.100"
    >
      <Heading marginBottom={6} color="black">
        Our Team
      </Heading>
      <Flex wrap="wrap" justifyContent="center" gap={6}>
        {teamMembers.map((member, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            width="250px"
            bg="white"
          >
            <Image
              src={member.image}
              alt={`${member.name}'s profile`}
              width="100%"
              height="200px"
              objectFit="cover"
            />

            <Box padding={4} textAlign="center">
              <Heading size="md">{member.name} </Heading>
              <Text marginTop={2}>Hobbies: {member.hobbies}</Text>
              <Link
                href={member.linkedIn}
                color="blue.700"
                marginTop={2}
                display="block"
              >
                LinkedIn Profile
              </Link>
              <Link href={member.gitHub} color="blue.700" marginTop={2}>
                GitHub Profile
              </Link>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
