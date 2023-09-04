import { useRef, useState, useEffect } from "react";
import {
  Box,
  Flex,
  Spinner,
  Image,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

import Surface from "@/components/Surface";
import Page from "@/components/Page";
import useThemeColor from "@/hooks/useThemeColor";

function Homepage() {
  const highlightColor = useThemeColor("primary.500");
  const hoveredColor = useThemeColor("primary.300");

  const imgHeight = "min(40vw, 300px)";
  const offset = `calc(${imgHeight} / 2)`;

  return (
    <Page title="Home">
      <Box pb={offset}>
        <Surface
          p={6}
          mt={12}
          maxW="800px"
          mx="auto"
          transform={`translateY(${offset})`}
          transition="transform .4s"
          borderRadius="32px"
          position="relative"
        >
          <Image
            position="absolute"
            transition="transform .4s"
            transform="translate(-50%, -50%)"
            left="50%"
            h={imgHeight}
            borderRadius="48px"
            src="/pfp.jpg"
            alt="Me using a hoodie, with messy hair and looking to the right"
          />
          <Flex flexDir="column" mt={offset}>
            <Flex textAlign="center" flexDir="column" my={6}>
              <Heading as="h1" fontSize={24}>
                <Text as="span" aria-hidden="true">
                  👋
                </Text>{" "}
                Hey there!
              </Heading>
              <Heading as="h1" fontSize={32}>
                I'm{" "}
                <Text as="span" color={highlightColor}>
                  Richard
                </Text>
                .
              </Heading>
            </Flex>
            <Flex textAlign="center" flexDir="column" my={6} gap={4}>
              <Heading as="h1" fontSize={24} lineHeight="36px">
                I'm a{" "}
                <Text as="span" color={highlightColor}>
                  software developer
                </Text>{" "}
                with around 3 years of experience with Node, React, Vue and
                Express.
              </Heading>
              <Button
                as={Link}
                href="/projects"
                alignSelf="center"
                bg={highlightColor}
                _hover={{ bg: hoveredColor }}
                color="black"
              >
                Show me the projects
              </Button>
            </Flex>
            <Flex
              textAlign="justify"
              flexDir="column"
              textIndent="32px"
              color="text.800"
              lineHeight="28px"
            >
              <Text>
                I started learning programming around 2013, learning Javascript
                with ProcessingJS (a graphics library), and basic C for
                competitive programming. Since then I’ve moved mainly to C++ in
                competitive programming, and Typescript with Node and React for
                web development.
              </Text>
              <Text>
                I am passionate about development because I like learning and
                creating new things from the ground up. Translating ideas to a
                crazy fast logic-powered machine and seeing it understand me?
                WHAT. SIGN ME UP!!
              </Text>
            </Flex>
          </Flex>
        </Surface>
      </Box>
    </Page>
  );
}

export default Homepage;
