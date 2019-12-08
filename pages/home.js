import React, { useRef } from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import Container from '../components/Container'
import DisjointedSlider from '../components/DisjointedSlider'
import DoubleSlider from '../components/DoubleSlider'

import Slider from 'react-slick';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import ProximaRegular from '../public/fonts/Proxima-Regular.otf'
import { Box, Heading, Text, PseudoBox, Button, Image, Flex, List, ListItem } from "@chakra-ui/core"

const packages = [
  {
    title: "Full Wedding Package",
    image: '/home-assets/Layer1.png'
  },
  {
    title: "Partial Wedding Package",
    image: '/home-assets/Layer2.png'
  },
  {
    title: "On The Day Wedding Package",
    image: '/home-assets/Layer3.png'
  },
  {
    title: "Full Wedding Package",
    image: '/home-assets/Layer4.png'
  },
  {
    title: "Full Wedding Package",
    image: '/home-assets/Layer5.png'
  }
]

const journal = [
  {
    title: "LOREM IPSUM DOLOR SIT AMET",
    image: '/home-assets/Bottom1.png',
    date: "December 2, 2019",
    author: "Alahna Sam Sy",
  },
  {
    title: "LOREM IPSUM DOLOR SIT AMET",
    image: '/home-assets/Bottom2.png',
    date: "December 2, 2019",
    author: "Alahna Sam Sy",
  },
  {
    title: "LOREM IPSUM DOLOR SIT AMET",
    image: '/home-assets/Bottom3.png',
    date: "December 2, 2019",
    author: "Alahna Sam Sy",
  },
]

const testimonials = [
  {
    title: "Lorem + Ipsum",
    image: "/home-assets/Bottom1.png",
    date: "December 2, 2019",
    author: "Alahna Sam Sy",
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde”"
  },
  {
    title: "Lorem + Ipsum",
    image: "/home-assets/Bottom2.png",
    date: "December 2, 2019",
    author: "Alahna Sam Sy",
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde”"
  },
  {
    title: "Lorem + Ipsum",
    image: "/home-assets/Bottom3.png",
    date: "December 2, 2019",
    author: "Alahna Sam Sy",
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde”"
  }
];

const Home = () => {
  return (
    <Layout
      fontFamily="Montserrat"
      >
      <Container
        outerContainerProps={{
          backgroundColor: "#dd8d83",
          color: "white"
        }}
        alignItems="center"
        justifyContent="center"
        py="120px"
        >
        <Heading
          as="h3"
          fontSize="18px"
          letterSpacing="2px"
          marginBottom="20px"
          fontWeight="400">WE BELIEVE IN...</Heading>
        <Text letterSpacing="1px" as="em" fontSize="14px">
          dreams, in planning, and in the unique. We invest in ideas and innovate because
        </Text>
        <Text letterSpacing="1px" display="inline" fontSize="14px">
          <Text as="em">we are </Text><Text as="strong">Not Just a Box.</Text>
        </Text>
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
        <Box flex="1 0 50%">
          <PseudoBox
            _after={{
              content: "''",
              display: "block",
              height: "2px",
              width: "50px",
              backgroundColor: "#e9c8bc",
              my: "20px"
            }}>
            <Heading
              as="h3"
              fontSize="18px"
              letterSpacing="2px"
              fontWeight="400"
              >
              WE ARE
            </Heading>
          </PseudoBox>
          <Heading
            as="h3"
            fontSize="18px"
            letterSpacing="2px"
            marginBottom="20px"
            fontWeight="700">
            FEATURED IN
          </Heading>
        </Box>
        <Box flex="1 0 50%">
          <Text letterSpacing="1px" as="em" fontSize="14px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </Text>
        </Box>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          flexDirection={{
            xs: "column",
            md: "row"
          }}
          marginBottom="70px">
          <Box my={{ xs: "30px", md: "0"}}>
            <Image src="/home-assets/header-logo-1.png" width="288px" height="115px" />
          </Box>
          <Box my={{ xs: "30px", md: "0"}}>
            <Image src="/home-assets/Bridestory_-1.png" width="302px" height="72px"/>
          </Box>
          <Box my={{ xs: "30px", md: "0"}}>
            <Image src="/home-assets/style-me-pretty-logo-png-1.png" width="346px" height="79px" />
          </Box>
        </Flex>
        <Box>
          <Button
            border="1px solid #e9c8bc"
            borderRadius="0"
            backgroundColor="white">
            READ OUR STORY
          </Button>
        </Box>
      </Container>


      <Container
        outerContainerProps={{
          backgroundColor: "#f8e6e2",
          color: "#de8e83"
        }}
        py="80px">
        <Flex>
          <Box flex="1 0 50%">
            <PseudoBox
              _after={{
                content: "''",
                display: "block",
                height: "2px",
                width: "50px",
                backgroundColor: "#e9c8bc",
                my: "20px"
              }}>
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
              fontWeight="700">
              OUR PACKAGES
            </Heading>
          </Box>
          <Box flex="1 0 50%" textAlign="right">
            <Text letterSpacing="1px" as="em" fontSize="14px">
              We also have packages for Birthdays and Corporate Events. View our packages.
            </Text>
          </Box>
        </Flex>
      </Container>
      <Container
        maxWidth="100%"
        outerContainerProps={{
          backgroundColor: "#f8e6e2",
          color: "#de8e83"
        }}
        pb="110px"
        overflow="hidden"
        >
        <DisjointedSlider
          pinkDots
          initialSlide={2}>
          {
            packages.map((item, index) => (
              <PseudoBox
                height="450px"
                justifyContent="center"
                px="15px"
                _focus={{ outline: "none" }}
              >
                <Flex
                  height="100%"
                  width="100%"
                  color="white"
                  flexDirection="column"
                  justifyContent="space-between"
                  background={`url('${item.image}')`}
                  backgroundSize="cover"
                  fontWeight="500"
                  padding="15px"
                >
                  <Text alignSelf="flex-end">{`${index < 10 ? '0' : ''}${index+1}`}</Text>
                  <Text 
                    display="table-caption" 
                    width="min-content" 
                    textTransform="uppercase"
                    letterSpacing="2px"
                    fontSize="13px"
                    >{item.title}</Text>

                </Flex>
              </PseudoBox>
            ))
          }

        </DisjointedSlider>
      </Container>

      <Container
        outerContainerProps={{
          color: "#de8e83"
        }}
        py="80px">
        <Flex>
          <Box flex="1 0 50%">
            <PseudoBox
              _after={{
                content: "''",
                display: "block",
                height: "2px",
                width: "50px",
                backgroundColor: "#e9c8bc",
                my: "20px"
              }}>
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
              fontWeight="700">
              OUR JOURNAL
            </Heading>
          </Box>
          <Box flex="1 0 50%" textAlign="right">
            <Text letterSpacing="1px" as="em" fontSize="14px">
              We also have packages for Birthdays and Corporate Events. View our packages.
            </Text>
          </Box>
        </Flex>
      </Container>

      <Container
        maxWidth="100%"
        outerContainerProps={{
          color: "#de8e83"
        }}
        pb="110px"
        overflow="hidden"
      >
        <DisjointedSlider
          pinkDots
          slidesToShow={1}>
          {
            journal.map((item, index) => (
              <PseudoBox
                height="500px"
                justifyContent="center"
                px="15px"
                _focus={{ outline: "none" }}
                position="relative"
              >
                <Flex
                  height="100%"
                  width="100%"
                  color="white"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  fontWeight="500"
                  padding="15px"
              >
                  <Text 
                    textTransform="uppercase"
                    letterSpacing="3px"
                    fontSize="14px"
                    >{item.date}</Text>
                  <Box
                    width="75px"
                    height="2px"
                    backgroundColor="white"
                    my="20px"
                  />
                  <Heading
                    as="h1"
                    textTransform="uppercase"
                    letterSpacing="8px"
                    fontSize="32px"
                    my="20px"
                  >{item.title}</Heading>
                  <Heading
                    as="h2"
                    textTransform="uppercase"
                    letterSpacing="4px"
                    fontSize="18px"
                    fontWeight="500"
                    my="30px"
                  >Written By: {item.author}</Heading>

                </Flex>
                <Image 
                  px="15px"
                  src={item.image} 
                  position="absolute"
                  top="0"
                  zIndex="-1"
                  style={{
                    filter: "brightness(0.7)"
                  }}/>
              </PseudoBox>
            ))
          }

        </DisjointedSlider>
      </Container>
      <DoubleSlider 
        items={testimonials}
        />
      
    </Layout>
  )}

export default Home
