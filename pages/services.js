import React, { useRef } from "react";
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
  Link,
  ListItem,
  Grid
} from "@chakra-ui/core";

const Services = () => {
  return (
    <Layout fontFamily="Montserrat">
      <Container
        outerContainerProps={{
          color: "#de8e83"
        }}
        py="80px"
      >
        <Grid
          width="100%"
          gridTemplateColumns="1fr 50px 1fr"
          gridTemplateRows="1fr"
          gridColumnGap="0px"
          gridRowGap="0px"
        >
          <Link
            _hover={{
              textDecoration: "none",
              filter: "brightness(0.9)"
            }}
          >
            <Box
              textAlign="right"
              py="20px"
              position="relative"
              paddingRight="80px"
            >
              <Heading
                as="h3"
                fontSize="18px"
                letterSpacing="2px"
                fontWeight="700"
                marginBottom="10px"
              >
                WEDDINGS
              </Heading>
              <Text
                as="em"
                fontSize="14px"
                letterSpacing="2px"
                marginBottom="20px"
              >
                lorem ipsum dolor
              </Text>
              <Image
                maxWidth="initial"
                src="/services-assets/flower.png"
                width="auto"
                height="100%"
                position="absolute"
                top="0"
                right="130px"
                zIndex="-1"
              />
            </Box>
          </Link>
          <Box
            backgroundColor="#d0857a"
            transform="rotate(30deg)"
            mx="24px"
            my="5px"
          />
          <Link
            _hover={{
              textDecoration: "none",
              filter: "brightness(0.9)"
            }}
          >
            <Box
              textAlign="left"
              py="20px"
              position="relative"
              paddingLeft="80px"
            >
              <Heading
                as="h3"
                fontSize="18px"
                letterSpacing="2px"
                fontWeight="700"
                marginBottom="10px"
              >
                OTHERS
              </Heading>
              <Text
                as="em"
                fontSize="14px"
                letterSpacing="2px"
                marginBottom="20px"
              >
                lorem ipsum dolor
              </Text>
              <Image
                maxWidth="initial"
                src="/services-assets/flower2.png"
                width="auto"
                height="100%"
                position="absolute"
                top="0"
                zIndex="-1"
                left="110px"
              />
            </Box>
          </Link>
        </Grid>
        <Flex alignItems="center">
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
                WEDDINGS
              </Heading>
            </PseudoBox>
            <Heading
              as="h3"
              fontSize="18px"
              letterSpacing="2px"
              marginBottom="20px"
              fontWeight="700"
            >
              OUR SERVICES
            </Heading>
          </Box>
          <Box flex="1 0 50%" textAlign="right" fontWeight="500">
            <Text letterSpacing="1px" fontSize="13px" color="#707073">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </Text>
          </Box>
        </Flex>
      </Container>
      <Container maxWidth="initial">
        <Checkerboard />
      </Container>
      <Container
        outerContainerProps={{
          color: "#de8e83"
        }}
        py="80px"
      >
        <Box textAlign="center">
          <PseudoBox
            _after={{
              content: "''",
              display: "block",
              height: "1px",
              width: "50px",
              backgroundColor: "#e9c8bc",
              my: "15px",
              mx: "auto"
            }}
          >
            <Heading
              as="h3"
              fontSize="12px"
              letterSpacing="2px"
              fontWeight="500"
            >
              LOREM IPSUM
            </Heading>
          </PseudoBox>
          <Heading
            as="h3"
            fontSize="16px"
            letterSpacing="4px"
            marginBottom="20px"
            fontWeight="700"
          >
            WORLDS EXPLORED
          </Heading>
        </Box>
        <Box>
          <Image
            maxWidth="initial"
            src="/services-assets/Group16.png"
            objectFit="cover"
            width="100%"
          />
        </Box>
      </Container>
    </Layout>
  );
};

export default Services;
