import React, { useRef } from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/Nav";
import Layout from "../components/Layout";
import Container from "../components/Container";
import DisjointedSlider from "../components/DisjointedSlider";
import DoubleSlider from "../components/DoubleSlider";
import Mosaic from "../components/Mosaic";

import Slider from "react-slick";
import MessengerCustomerChat from "react-messenger-customer-chat";
import ProximaRegular from "../public/fonts/Proxima-Regular.otf";
import {
  Box,
  Heading,
  Text,
  PseudoBox,
  Button,
  Image,
  Flex,
  List,
  ListItem,
  Grid
} from "@chakra-ui/core";

const packages = [
  {
    title: "Full Wedding Package",
    image: "/home-assets/Layer1.png"
  },
  {
    title: "Partial Wedding Package",
    image: "/home-assets/Layer2.png"
  },
  {
    title: "On The Day Wedding Package",
    image: "/home-assets/Layer3.png"
  },
  {
    title: "Full Wedding Package",
    image: "/home-assets/Layer4.png"
  },
  {
    title: "Full Wedding Package",
    image: "/home-assets/Layer5.png"
  }
];

const journal = [
  {
    title: "LOREM IPSUM DOLOR SIT AMET",
    image: "/home-assets/Bottom1.png",
    date: "December 2, 2019",
    author: "Alahna Sam Sy"
  },
  {
    title: "LOREM IPSUM DOLOR SIT AMET",
    image: "/home-assets/Bottom2.png",
    date: "December 2, 2019",
    author: "Alahna Sam Sy"
  },
  {
    title: "LOREM IPSUM DOLOR SIT AMET",
    image: "/home-assets/Bottom3.png",
    date: "December 2, 2019",
    author: "Alahna Sam Sy"
  }
];

const testimonials = [
  {
    title: "Lorem + Ipsum",
    image: "/home-assets/Bottom1.png",
    date: "December 2, 2019",
    author: "Alahna Sam Sy",
    quote:
      "“Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde”"
  },
  {
    title: "Lorem + Ipsum",
    image: "/home-assets/Bottom2.png",
    date: "December 2, 2019",
    author: "Alahna Sam Sy",
    quote:
      "“Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde”"
  },
  {
    title: "Lorem + Ipsum",
    image: "/home-assets/Bottom3.png",
    date: "December 2, 2019",
    author: "Alahna Sam Sy",
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipisicing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde”"
  }
];

const Home = () => {
  return (
    <Layout fontFamily="Montserrat">
      <Container
        outerContainerProps={{
          color: "#dd8d83"
        }}
        alignItems="stretch"
        justifyContent="center"
        flexDirection="row"
        py="50px"
      >
        <Box flex={1} overflow="hidden">
          <Image
            src="/about-assets/LT9_0602-min.png"
            width="auto"
            height={{ xs: "70vh", lg: "550px" }}
            objectFit="cover"
          />
        </Box>
        <Flex direction="column" flex={1} px="80px" py="50px">
          <Box marginBottom="auto">
            <PseudoBox
              _after={{
                content: "''",
                display: "block",
                height: "1px",
                width: "50px",
                backgroundColor: "#e9c8bc",
                my: "20px"
              }}
            >
              <Heading
                as="h3"
                fontSize="14px"
                letterSpacing="2px"
                fontWeight="400"
              >
                OUR STORY
              </Heading>
            </PseudoBox>

            <Heading
              as="h3"
              fontSize="24px"
              letterSpacing="2px"
              marginBottom="10px"
              fontWeight="700"
            >
              LOREM IPSUM DOLOR
            </Heading>
            <Heading
              as="h3"
              fontSize="18px"
              letterSpacing="2px"
              marginBottom="10px"
              fontWeight="400"
            >
              LOREM IPSUM DOLOR SIT
            </Heading>
          </Box>
          <Text
            color="#707073"
            display="block"
            letterSpacing="1px"
            fontSize="12px"
            lineHeight={2}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Box marginTop="auto">
            <Button
              border="1px solid #e9c8bc"
              borderRadius="0"
              backgroundColor="white"
              width="auto"
              px="50px"
              py="10px"
              fontSize="14px"
            >
              GET IN TOUCH
            </Button>
          </Box>
        </Flex>
      </Container>

      <Container
        outerContainerProps={{
          backgroundColor: "#dd8d83",
          color: "white"
        }}
        alignItems="center"
        justifyContent="center"
        py="60px"
      >
        <PseudoBox
          _after={{
            content: "''",
            display: "block",
            height: "1px",
            width: "50px",
            backgroundColor: "white",
            my: "20px",
            mx: "auto"
          }}
        >
          <Heading
            as="h3"
            fontSize="18px"
            letterSpacing="2px"
            marginBottom="20px"
            fontWeight="400"
          >
            OUR PHILOSOPHY
          </Heading>
        </PseudoBox>
        <Flex width="100%" height="250px">
          <Flex
            flex="1 0 37.5%"
            my={{ xs: "30px", md: "0" }}
            px="15px"
            overflow="hidden"
            alignItems="center"
          >
            <Image
              src="/about-assets/evelina-friman-hw_sKmjb0ns-unsplash-min.png"
              maxWidth="initial"
              objectFit="cover"
              width="100%"
            />
          </Flex>
          <Flex
            flex="1 0 25%"
            my={{ xs: "30px", md: "0" }}
            px="15px"
            overflow="hidden"
            alignItems="center"
          >
            <Image
              maxWidth="initial"
              src="/about-assets/_MJC0390-min.png"
              objectFit="cover"
              width="100%"
            />
          </Flex>
          <Flex
            flex="1 0 37.5%"
            my={{ xs: "30px", md: "0" }}
            px="15px"
            overflow="hidden"
            alignItems="center"
          >
            <Image
              src="/about-assets/marc-a-sporys-NO8Sj4dKE8k-unsplash-min.png"
              maxWidth="initial"
              objectFit="cover"
              width="100%"
            />
          </Flex>
        </Flex>

        <Flex width="100%" py="20px">
          <Flex
            flex="1 0 37.5%"
            my={{ xs: "30px", md: "0" }}
            px="15px"
            alignItems="center"
            justifyContent="center"
            fontWeight="500"
          >
            <Text letterSpacing="5px" marginRight="10px" fontSize="20px">
              01
            </Text>
            <Text
              textTransform="uppercase"
              fontSize="13px"
              letterSpacing="1.5px"
            >
              Passion to Deliver
            </Text>
          </Flex>
          <Flex
            flex="1 0 25%"
            my={{ xs: "30px", md: "0" }}
            px="15px"
            alignItems="center"
            justifyContent="center"
            fontWeight="500"
          >
            <Text letterSpacing="5px" marginRight="10px" fontSize="20px">
              02
            </Text>
            <Text
              textTransform="uppercase"
              fontSize="13px"
              letterSpacing="1.5px"
            >
              Lorem ipsum
            </Text>
          </Flex>
          <Flex
            flex="1 0 37.5%"
            my={{ xs: "30px", md: "0" }}
            px="15px"
            alignItems="center"
            justifyContent="center"
            fontWeight="500"
          >
            <Text letterSpacing="5px" marginRight="10px" fontSize="20px">
              03
            </Text>
            <Text
              textTransform="uppercase"
              fontSize="13px"
              letterSpacing="1.5px"
            >
              Lorem ipsum dolor
            </Text>
          </Flex>
        </Flex>
      </Container>

      <Container
        outerContainerProps={{
          backgroundColor: "white",
          color: "#dd8d83"
        }}
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDirection="row"
        py="120px"
        flexWrap="wrap"
      >
        <Box flex="1 0 50%" mb="80px">
          <PseudoBox
            _after={{
              content: "''",
              display: "block",
              height: "1px",
              width: "50px",
              backgroundColor: "#e9c8bc",
              my: "20px"
            }}
          >
            <Heading
              as="h3"
              fontSize="18px"
              letterSpacing="2px"
              fontWeight="400"
            >
              LOREM IPSUM
            </Heading>
          </PseudoBox>
          <Heading
            as="h3"
            fontSize="18px"
            letterSpacing="2px"
            marginBottom="20px"
            fontWeight="700"
          >
            MEET OUR TEAM
          </Heading>
        </Box>
        <Box flex="1 0 50%" mb="80px">
          <Text letterSpacing="1px" as="em" fontSize="14px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </Text>
        </Box>
        <Grid
          width="100%"
          height="auto"
          gridTemplateColumns="repeat(4, 1fr)"
          gridTemplateRows="repeat(2, 1fr)"
          gridColumnGap="0px"
          gridRowGap="0px"
          textTransform="uppercase"
          color="#626163"
          letterSpacing="2.5px"
          fontSize="11px"
          fontWeight="500"
        >
          <Box gridArea="1 / 1 / 2 / 2">
            <Image
              maxWidth="initial"
              src="/about-assets/LT9_0630-min-min.png"
              objectFit="cover"
              width="100%"
            />
          </Box>
          <Flex
            gridArea="2 / 1 / 3 / 2"
            justifyContent="center"
            alignItems="flex-end"
            paddingBottom="40px"
          >
            <Text>Daniel Deocadez</Text>
          </Flex>
          <Flex
            gridArea="1 / 2 / 2 / 3"
            justifyContent="center"
            alignItems="flex-end"
            paddingBottom="40px"
          >
            <Text>Aiza Ingles</Text>
          </Flex>
          <Box gridArea="2 / 2 / 3 / 3">
            <Image
              maxWidth="initial"
              src="/about-assets/LT9_0556-min-min.png"
              objectFit="cover"
              width="100%"
            />
          </Box>
          <Box gridArea="1 / 3 / 2 / 4">
            <Image
              maxWidth="initial"
              src="/about-assets/LT9_0539-min-min.png"
              objectFit="cover"
              width="100%"
            />
          </Box>
          <Flex
            gridArea="2 / 3 / 3 / 4"
            justifyContent="center"
            alignItems="flex-end"
            paddingBottom="40px"
          >
            <Text>Erol Cudilla</Text>
          </Flex>
          <Flex
            gridArea="1 / 4 / 2 / 5"
            justifyContent="center"
            alignItems="flex-end"
            paddingBottom="40px"
          >
            <Text>Elvira Zabala</Text>
          </Flex>
          <Box gridArea="2 / 4 / 3 / 5">
            <Image
              maxWidth="initial"
              src="/about-assets/LT9_0500-min-min.png"
              objectFit="cover"
              width="100%"
            />
          </Box>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
