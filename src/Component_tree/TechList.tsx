import { Box, Heading, Image, Text, SimpleGrid } from "@chakra-ui/react";

const TechList = () => {
  const frontendTechStack = [
    { name: "React", image: "https://reactjs.org/logo-og.png" },
    {
      name: "Phaser",
      image:
        "https://replit.com/cdn-cgi/image/width=3840,quality=80,format=auto/https://storage.googleapis.com/replit/images/1631111166448_c9a6d87869fcea51489a63c1d09dd53a.jpeg",
    },
    {
      name: "HTML",
      image:
        "https://th.bing.com/th/id/OIP.N_anztpFCPTBVRUMWvuGBwHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "CSS",
      image:
        "https://th.bing.com/th/id/OIP.yUIb5S_kj98Eg5tT-Onx1AHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "TypeScript",
      image: "https://www.typescriptlang.org/icons/icon-48x48.png",
    },
    {
      name: "JavaScript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    { name: "Vite", image: "https://vitejs.dev/logo.svg" },
    {
      name: "Chakra UI",
      image:
        "https://itelofilho.gallerycdn.vsassets.io/extensions/itelofilho/chakra-ui-cheatsheet/0.1.2/1602346378840/Microsoft.VisualStudio.Services.Icons.Default",
    },
    {
      name: "Netlify",
      image: "https://logosandtypes.com/wp-content/uploads/2023/03/Netlify.png",
    },
    {
      name: "Lottie",
      image:
        "https://th.bing.com/th/id/OIP.LLSc7u5lTO_iNF74GtKjNQAAAA?rs=1&pid=ImgDetMain",
    },
  ];

  const backendTechStack = [
    {
      name: "Node.js",
      image: "https://download.logo.wine/logo/Node.js/Node.js-Logo.wine.png",
    },
    { name: "Express", image: "https://expressjs.com/images/favicon.png" },
    { name: "MongoDB", image: "https://logodix.com/logo/2090013.jpg" },
    {
      name: "TypeScript",
      image: "https://www.typescriptlang.org/icons/icon-48x48.png",
    },
    {
      name: "Dotenv",
      image: "https://api.nuget.org/v3-flatcontainer/dotenv.net/3.0.0/icon",
    },
    {
      name: "Render",
      image:
        "https://th.bing.com/th/id/OIP.alnyhQ6EKBI1eH03utWNkwHaCD?rs=1&pid=ImgDetMain",
    },
    {
      name: "Supertest",
      image: "https://www.chaijs.com/img/chai-logo.svg",
    },
    {
      name: "TSX",
      image:
        "https://raw.githubusercontent.com/privatenumber/tsx/HEAD/.github/logo-light.svg",
    },
    {
      name: "Atlas",
      image:
        "https://g.foolcdn.com/editorial/images/635884/atlas_icon_blk_stackedlarge.png",
    },
  ];

  return (
    <Box
      p={6}
      maxW="800px"
      mx="auto"
      boxShadow="md"
      borderRadius="md"
      bg="gray.50"
    >
      <Heading as="h1" size="lg" mb={4} textAlign="center">
        Project Tech Stack
      </Heading>

      <Box mb={8}>
        <Heading as="h2" size="md" mb={4} textAlign="center">
          Frontend Technologies
        </Heading>
        <SimpleGrid columns={[2, null, 3]} gap={6}>
          {frontendTechStack.map((tech) => (
            <Box
              key={tech.name}
              p={4}
              boxShadow="sm"
              borderRadius="md"
              bg="white"
              textAlign="center"
              _hover={{ boxShadow: "md", transform: "scale(1.05)" }}
              transition="all 0.2s"
            >
              <Image
                src={tech.image}
                alt={tech.name}
                boxSize="50px"
                mx="auto"
                mb={3}
              />
              <Text fontWeight="bold">{tech.name}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box>
        <Heading as="h2" size="md" mb={4} textAlign="center">
          Backend Technologies
        </Heading>
        <SimpleGrid columns={[2, null, 3]} gap={6}>
          {backendTechStack.map((tech) => (
            <Box
              key={tech.name}
              p={4}
              boxShadow="sm"
              borderRadius="md"
              bg="white"
              textAlign="center"
              _hover={{ boxShadow: "md", transform: "scale(1.05)" }}
              transition="all 0.2s"
            >
              <Image
                src={tech.image}
                alt={tech.name}
                boxSize="50px"
                mx="auto"
                mb={3}
              />
              <Text fontWeight="bold">{tech.name}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default TechList;
