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

const Checkerboard = () => {
  return (
    <Grid
      width="100%"
      height="auto"
      gridTemplateColumns="repeat(2, 50%)"
      gridTemplateRows="repeat(5, 0.9fr)"
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
          src="/services-assets/_PDC1613-Edit.png"
          objectFit="cover"
          width="100%"
        />
      </Box>

      <Link
        gridArea="1 / 2 / 2 / 3"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        backgroundColor="#dd8d83"
        color="white"
        textAlign="center"
        px="25%"
        display="flex"
        _hover={{
          textDecoration: "initial",
          filter: "brightness(0.95)"
        }}
      >
        <PseudoBox
          _after={{
            content: "''",
            display: "block",
            height: "1px",
            width: "50px",
            backgroundColor: "#e9c8bc",
            my: "20px",
            mx: "auto"
          }}
          width="75%"
        >
          <Heading
            as="h3"
            fontSize="18px"
            letterSpacing="4px"
            fontWeight="500"
            lineHeight="1.5em"
          >
            Full Wedding Package
          </Heading>
        </PseudoBox>
        <Text
          textTransform="initial"
          mb="30px"
          letterSpacing="0.2px"
          lineHeight="2em"
          fontSize="12px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          luctus feugiat ultricies.
        </Text>
        <Text
          borderBottom="1px solid white"
          fontWeight="700"
          letterSpacing="1px"
        >
          Learn More
        </Text>
      </Link>

      <Link
        gridArea="2 / 1 / 3 / 2"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        backgroundColor="#e4a197"
        color="white"
        textAlign="center"
        px="25%"
        display="flex"
        _hover={{
          textDecoration: "initial",
          filter: "brightness(0.95)"
        }}
      >
        <PseudoBox
          _after={{
            content: "''",
            display: "block",
            height: "1px",
            width: "50px",
            backgroundColor: "#e9c8bc",
            my: "20px",
            mx: "auto"
          }}
          width="75%"
        >
          <Heading
            as="h3"
            fontSize="18px"
            letterSpacing="4px"
            fontWeight="500"
            lineHeight="1.5em"
          >
            Full Wedding Package
          </Heading>
        </PseudoBox>
        <Text
          textTransform="initial"
          mb="30px"
          letterSpacing="0.2px"
          lineHeight="2em"
          fontSize="12px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          luctus feugiat ultricies.
        </Text>
        <Text
          borderBottom="1px solid white"
          fontWeight="700"
          letterSpacing="1px"
        >
          Learn More
        </Text>
      </Link>

      <Box gridArea="2 / 2 / 3 / 3">
        <Image
          maxWidth="initial"
          src="/services-assets/_PDC1921.png"
          objectFit="cover"
          width="100%"
        />
      </Box>
      <Box gridArea="3 / 1 / 4 / 2">
        <Image
          maxWidth="initial"
          src="/services-assets/_PDC1704.png"
          objectFit="cover"
          width="100%"
        />
      </Box>

      <Link
        gridArea="3 / 2 / 4 / 3"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        backgroundColor="#dd8d83"
        color="white"
        textAlign="center"
        px="25%"
        display="flex"
        _hover={{
          textDecoration: "initial",
          filter: "brightness(0.95)"
        }}
      >
        <PseudoBox
          _after={{
            content: "''",
            display: "block",
            height: "1px",
            width: "50px",
            backgroundColor: "#e9c8bc",
            my: "20px",
            mx: "auto"
          }}
          width="75%"
        >
          <Heading
            as="h3"
            fontSize="18px"
            letterSpacing="4px"
            fontWeight="500"
            lineHeight="1.5em"
          >
            Full Wedding Package
          </Heading>
        </PseudoBox>
        <Text
          textTransform="initial"
          mb="30px"
          letterSpacing="0.2px"
          lineHeight="2em"
          fontSize="12px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          luctus feugiat ultricies.
        </Text>
        <Text
          borderBottom="1px solid white"
          fontWeight="700"
          letterSpacing="1px"
        >
          Learn More
        </Text>
      </Link>

      <Link
        gridArea="4 / 1 / 5 / 2"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        backgroundColor="#e4a197"
        color="white"
        textAlign="center"
        px="25%"
        display="flex"
        _hover={{
          textDecoration: "initial",
          filter: "brightness(0.95)"
        }}
      >
        <PseudoBox
          _after={{
            content: "''",
            display: "block",
            height: "1px",
            width: "50px",
            backgroundColor: "#e9c8bc",
            my: "20px",
            mx: "auto"
          }}
          width="75%"
        >
          <Heading
            as="h3"
            fontSize="18px"
            letterSpacing="4px"
            fontWeight="500"
            lineHeight="1.5em"
          >
            Full Wedding Package
          </Heading>
        </PseudoBox>
        <Text
          textTransform="initial"
          mb="30px"
          letterSpacing="0.2px"
          lineHeight="2em"
          fontSize="12px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          luctus feugiat ultricies.
        </Text>
        <Text
          borderBottom="1px solid white"
          fontWeight="700"
          letterSpacing="1px"
        >
          Learn More
        </Text>
      </Link>

      <Box gridArea="4 / 2 / 5 / 3">
        <Image
          maxWidth="initial"
          src="/services-assets/JR-and-Rency-182.png"
          objectFit="cover"
          width="100%"
        />
      </Box>
      <Box gridArea="5 / 1 / 6 / 2">
        <Image
          maxWidth="initial"
          src="/services-assets/JAL_1592KF-1024x633.png"
          objectFit="cover"
          width="100%"
        />
      </Box>
      <Link
        gridArea="5 / 2 / 6 / 3"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        backgroundColor="#dd8d83"
        color="white"
        textAlign="center"
        px="25%"
        display="flex"
        _hover={{
          textDecoration: "initial",
          filter: "brightness(0.95)"
        }}
      >
        <PseudoBox
          _after={{
            content: "''",
            display: "block",
            height: "1px",
            width: "50px",
            backgroundColor: "#e9c8bc",
            my: "20px",
            mx: "auto"
          }}
          width="75%"
        >
          <Heading
            as="h3"
            fontSize="18px"
            letterSpacing="4px"
            fontWeight="500"
            lineHeight="1.5em"
          >
            Full Wedding Package
          </Heading>
        </PseudoBox>
        <Text
          textTransform="initial"
          mb="30px"
          letterSpacing="0.2px"
          lineHeight="2em"
          fontSize="12px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          luctus feugiat ultricies.
        </Text>
        <Text
          borderBottom="1px solid white"
          fontWeight="700"
          letterSpacing="1px"
        >
          Learn More
        </Text>
      </Link>
    </Grid>
  );
};

export default Checkerboard;
