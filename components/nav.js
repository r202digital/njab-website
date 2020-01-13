import React from 'react'
import {
  Box,
  List,
  ListItem,
  Stack,
  Link,
  Text,
  Image,
  IconButton
} from "@chakra-ui/core"
import { MdMenu, MdSearch } from "react-icons/md";
import Container from './Container'

const links = [
  {
    href: '/',
    label: 'Home'
  },
  {
    href: '/',
    label: 'Our Story'
  },
  {
    href: '/',
    label: 'Our Services'
  },
  {
    href: '/',
    label: 'Portfolio'
  },
  {
    href: '/',
    label: 'Our Journal'
  },
  {
    href: '/',
    label: 'Contact'
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <Box as="nav">
    <Container
      alignItems="center"
      justifyContent="space-between"
      fontFamily="Montserrat"
      fontSmoothing="anti-aliased"
      borderBottom="1px solid rgba(255,255,255,0.5)"
      py="15px"
      flexDirection="row"
      outerContainerProps={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)"
      }}
    >
      <Image src="/logonjabwhite.png" height="30px" />
      <Box color="white" display={{ xs: "none", md: "initial" }}>
        {links.map(link => (
          <Link
            mx="15px"
            fontSize="12px"
            letterSpacing="2px"
            paddingTop="5px"
            paddingBottom="4px"
            textTransform="uppercase"
            transition="all 0.5s"
            borderBottom="1px solid transparent"
            _hover={{
              borderBottomColor: "white"
            }}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </Box>
      <Box>
        <IconButton
          aria-label="Search database"
          background="transparent"
          color="white"
          icon={MdSearch}
          fontSize="30px"
          _hover={{
            backgroundColor: "transparent",
            color: "rgba(255,255,255,0.5)"
          }}
        />
        <IconButton
          display={{ xs: "initial", md: "none" }}
          aria-label="Search database"
          background="transparent"
          color="white"
          icon={MdMenu}
          fontSize="30px"
          _hover={{
            backgroundColor: "transparent",
            color: "rgba(255,255,255,0.5)"
          }}
        />
      </Box>
    </Container>
  </Box>
);

export default Nav
