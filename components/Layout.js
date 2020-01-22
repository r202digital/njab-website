import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/Nav";
import Container from "../components/Container";
import {
  Box,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  Input,
  InputGroup,
  InputLeftAddon,
  Icon,
  Image
} from "@chakra-ui/core";
import { FaArrowRight } from "react-icons/fa";

const Layout = ({
  children,
  navProps,
  headerComponent,
  headerContainerStyles,
  ...props
}) => (
  <Box minHeight="100vh" {...props}>
    {/* Header */}

    <Head title="Not Just a Box Events" />
    <Box {...headerContainerStyles}>
      <Nav {...navProps} />
      {headerComponent}
    </Box>

    {/* Body */}
    {children}

    {/* Footer */}
    <Container>
      <Flex color="#de8e83">
        <Box flex="1">
          <Heading
            as="h1"
            fontSize="18px"
            letterSpacing="2px"
            marginBottom="20px"
            fontWeight="400"
            textTransform="uppercase"
          >
            Say Hello
          </Heading>
          <Text>497 Evergreen Rd. Roseville, CA 95673 +44 345 678 903</Text>
        </Box>
        <Box flex="2">
          <Heading
            as="h1"
            fontSize="18px"
            letterSpacing="2px"
            marginBottom="20px"
            fontWeight="400"
            textTransform="uppercase"
            textAlign="center"
          >
            Questions?
          </Heading>
          <Box px="15%">
            <InputGroup>
              <InputLeftAddon
                borderRadius="0px"
                backgroundColor="transparent"
                borderLeft="initial"
                borderTop="initial"
                borderColor="#de8e83"
                paddingRight="10px"
                paddingLeft="0px"
              >
                <Box as={FaArrowRight} size="20px" />
              </InputLeftAddon>
              <Input
                placeholder="FULL NAME"
                fontSize="12px"
                paddingLeft="5px"
                size="sm"
                mb="10px"
                borderTop="none"
                borderRight="none"
                borderLeft="none"
                borderRadius="0px"
                borderColor="#de8e83"
                _hover={{
                  borderColor: "#de8e83"
                }}
                _focus={{
                  boxShadow: "initial",
                  borderColor: "#de8e83"
                }}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon
                borderRadius="0px"
                backgroundColor="transparent"
                borderLeft="initial"
                borderTop="initial"
                borderColor="#de8e83"
                paddingRight="10px"
                paddingLeft="0px"
              >
                <Box as={FaArrowRight} size="20px" />
              </InputLeftAddon>
              <Input
                placeholder="CONTACT NUMBER"
                fontSize="12px"
                paddingLeft="5px"
                size="sm"
                mb="10px"
                borderTop="none"
                borderRight="none"
                borderLeft="none"
                borderRadius="0px"
                borderColor="#de8e83"
                _hover={{
                  borderColor: "#de8e83"
                }}
                _focus={{
                  boxShadow: "initial",
                  borderColor: "#de8e83"
                }}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon
                borderRadius="0px"
                backgroundColor="transparent"
                borderLeft="initial"
                borderTop="initial"
                borderColor="#de8e83"
                paddingRight="10px"
                paddingLeft="0px"
              >
                <Box as={FaArrowRight} size="20px" />
              </InputLeftAddon>
              <Input
                placeholder="EMAIL ADDRESS"
                fontSize="12px"
                paddingLeft="5px"
                size="sm"
                mb="10px"
                borderTop="none"
                borderRight="none"
                borderLeft="none"
                borderRadius="0px"
                borderColor="#de8e83"
                _hover={{
                  borderColor: "#de8e83"
                }}
                _focus={{
                  boxShadow: "initial",
                  borderColor: "#de8e83"
                }}
              />
            </InputGroup>
            <Box textAlign="center" fontSize="12px" my="40px">
              <Image
                src="/njab_logo.svg"
                height="30px"
                width="30px"
                mx="auto"
                my="20px"
              />
              <Text> © 2019 NOT JUST A BOX EVENTS</Text>
            </Box>
          </Box>
        </Box>
        <Box flex="1">
          <Heading
            as="h1"
            fontSize="18px"
            letterSpacing="2px"
            marginBottom="20px"
            fontWeight="400"
            textTransform="uppercase"
          >
            Lorem Ipsum
          </Heading>
          <Flex>
            <List styleType="none" mr="15px">
              <ListItem>FAQ</ListItem>
              <ListItem>Terms of Use</ListItem>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Cookie Policy</ListItem>
            </List>
            <List styleType="none" ml="15px">
              <ListItem>Contact Us</ListItem>
              <ListItem>Lorem ipsum</ListItem>
              <ListItem>Lorem ipsum</ListItem>
            </List>
          </Flex>
        </Box>
      </Flex>
    </Container>
    <style jsx global>{`
      .disjoint-slider {
        display: none;
      }

      @media (min-width: 768px) {
        .disjoint-slider {
          display: initial;
        }

        .disjoint-slider-mobile {
          display: none;
        }
      }

      .slick-dots li button::before {
        content: "•";
        opacity: 0.5;
      }

      .pink-dots .slick-dots li button::before {
        color: #e9c8bc;
      }

      .pink-dots .slick-dots li.slick-active button:before {
        color: #d89a8d;
      }

      .white-dots .slick-dots li button::before {
        color: #e9c8bc;
      }

      .white-dots .slick-dots li.slick-active button:before {
        color: #fff;
        opacity: 1;
      }

      @media (min-width: 768px) {
        .double-slider .first-slider {
          width: 50%;
        }
        .double-slider .second-slider {
          width: 65%;
        }
      }
    `}</style>
  </Box>
);

export default Layout;
