import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/Nav'
import Container from '../components/Container'
import { Box, Heading } from "@chakra-ui/core"

const Layout = ({ children, navProps, ...props }) => (
  <Box minHeight="100vh" {...props}>
    <Head title="Not Just a Box Events" />
    <Box
      backgroundImage="url('/6@edit.png')"
      // backgroundAttachment="fixed"
      backgroundPosition={{
        xs: "50% calc(50% + 35px)",
        md: "0 calc(50% + 35px)"
      }}
      backgroundRepeat="no-repeat"
      backgroundSize={{
        xs: "auto 120%",
        md: "cover"
      }}
    >
      <Nav {...navProps} />
      <Container
        height="calc(100vh - 71px)"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        letterSpacing="2px"
      >
        <Heading as="h1" fontFamily="Proxima Nova" color="white">
          MAKING DREAMS INSPIRATIONAL.
        </Heading>
      </Container>
    </Box>
    {children}
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

export default Layout
