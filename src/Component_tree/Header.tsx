import React, { useState } from "react";
import { Box, Flex, HStack, Stack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Links = ["Home", "About Us", "Tech List", "Game"];

const NavLink = ({
  children,
  onClick,
  to,
}: {
  children: React.ReactNode;
  onClick: () => void;
  to: string;
}) => (
  <Link
    to={to}
    style={{
      padding: "8px",
      textDecoration: "none",
      color: "white",
      borderRadius: "4px",
      fontWeight: "bold",
    }}
    onClick={onClick}
  >
    {children}
  </Link>
);

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const formatUrl = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <>
      <Box
        bg="teal.500"
        px={4}
        position="fixed"
        top={0}
        width="100%"
        zIndex="1000"
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Link
            to="/home"
            style={{
              padding: "8px",
              textDecoration: "none",
              color: "white",
              borderRadius: "4px",
              fontWeight: "bold",
              fontSize: "large",
            }}
          >
            EuroLingo Project
          </Link>

          <Button
            size="md"
            aria-label="Toggle navigation menu"
            display={{ md: "none" }}
            onClick={toggleMenu}
            colorScheme="teal"
            variant="ghost"
            color="white"
            fontWeight="bold"
          >
            {isOpen ? "Close" : "Menu"}
          </Button>

          <HStack as="nav" gap={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink
                key={link}
                onClick={() => setIsOpen(false)}
                to={`/${formatUrl(link)}`}
              >
                {link}
              </NavLink>
            ))}
          </HStack>
        </Flex>

        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" gap={4}>
              {Links.map((link) => (
                <NavLink
                  key={link}
                  onClick={() => setIsOpen(false)}
                  to={`/${formatUrl(link)}`}
                >
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        )}
      </Box>

      <Box as="main" pt="64px"></Box>
    </>
  );
};
