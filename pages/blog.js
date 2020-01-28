import React, { useRef } from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/Nav";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Checkerboard from "../components/Checkerboard";
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
    <Layout
      fontFamily="Montserrat"
      headerContainerStyles={{
        backgroundImage: "url('/blog.png')",
        backgroundPosition: {
          xs: "50% calc(50% + 35px)",
          md: "0 calc(50% + 35px)"
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: {
          xs: "auto 120%",
          md: "cover"
        }
      }}
      headerComponent={
        <Container
          height="calc(80vh - 71px)"
          justifyContent="flex-end"
          alignItems="flex-start"
          textAlign="center"
          letterSpacing="2px"
          color="white"
        >
          <PseudoBox
            _after={{
              content: "''",
              display: "block",
              height: "1px",
              width: "50px",
              backgroundColor: "white",
              my: "20px"
            }}
          >
            <Heading
              as="h3"
              fontSize="12px"
              letterSpacing="2px"
              fontWeight="400"
            >
              OUR STORY
            </Heading>
          </PseudoBox>
          <Heading
            as="h1"
            letterSpacing="5px"
            fontFamily="Proxima Nova"
            fontSize="24px"
          >
            OUR JOURNAL
          </Heading>
          <Flex width="100%" textAlign="initial">
            <Text>BROWSE BY CATEGORY</Text>
            <List display="flex">
              <ListItem>
                <Text>ALL</Text>
              </ListItem>
              <ListItem>
                <Text>WEDDINGS</Text>
              </ListItem>
              <ListItem>
                <Text>LOREM</Text>
              </ListItem>
              <ListItem>
                <Text>IPSUM</Text>
              </ListItem>
              <ListItem>
                <Text>DOLOR</Text>
              </ListItem>
            </List>
          </Flex>
          <Grid
            width="100%"
            gridTemplateColumns="auto 50px 1fr"
            gridTemplateRows="1fr"
            gridColumnGap="0px"
            gridRowGap="0px"
          >
            <Heading
              as="h1"
              letterSpacing="5px"
              fontFamily="Proxima Nova"
              fontSize="24px"
            >
              OUR JOURNAL
            </Heading>
            <Box
              backgroundColor="white"
              transform="rotate(30deg)"
              mx="24px"
              my="5px"
            />
            <Flex width="100%" textAlign="initial" alignItems="center">
              <Text>BROWSE BY CATEGORY</Text>
              <List display="flex">
                <ListItem>
                  <Text>ALL</Text>
                </ListItem>
                <ListItem>
                  <Text>WEDDINGS</Text>
                </ListItem>
                <ListItem>
                  <Text>LOREM</Text>
                </ListItem>
                <ListItem>
                  <Text>IPSUM</Text>
                </ListItem>
                <ListItem>
                  <Text>DOLOR</Text>
                </ListItem>
              </List>
            </Flex>
          </Grid>
        </Container>
      }
      navProps={{
        outerContainerProps: {
          background:
            "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)"
        },
        innerContainerProps: {
          color: "white"
        },
        navLogo: "/logonjabwhite.png",
        navBorderBottom: "1px solid rgba(255,255,255,0.5)",
        navSearchIconColor: "white",
        navHighlightColor: "white"
      }}
    >
      <Container maxWidth="initial">
        <Checkerboard />
      </Container>
      <Container
        outerContainerProps={{
          color: "#de8e83"
        }}
        pt="80px"
        pb="50px"
      >
        <Flex>
          <Box flex="1 0 50%">
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
              FOLLOW US
            </Heading>
          </Box>
        </Flex>
      </Container>
      <Container
        // maxWidth="calc(100% - 250px)"
        outerContainerProps={{
          color: "#de8e83"
        }}
        pb="110px"
        overflow="hidden"
      >
        <Mosaic
          height="400px"
          images={[
            "/home-assets/mosaic1.png",
            "/home-assets/mosaic2.png",
            "/home-assets/mosaic3.png",
            "/home-assets/mosaic4.png",
            "/home-assets/mosaic5.png",
            "/home-assets/mosaic6.png",
            "/home-assets/mosaic7.png"
          ]}
        />
      </Container>
    </Layout>
  );
};

export default Home;
