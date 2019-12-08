import React from 'react'
import {
  Box,
  PseudoBox,
  Image,
  List,
  IconButton,
  Flex,
  Text,
  Heading
} from "@chakra-ui/core"
import Slider from 'react-slick';
import Container from './Container';

const Arrow = ({ className, style, onClick }) => {
  const variant = className.replace(/ /g, "").replace("slick-arrow", "").replace("slick-", "");
  const iconVariant = `arrow-${variant === "prev" ? "back" : "forward"}`
  const leftMargin = 50;
  return (
    <>
      {variant === "next" && (
        <Text
          color="white"
          position="absolute"
          bottom={{ md: "-80px" }}
          marginLeft={{ md: `${leftMargin + 125}px` }}
          fontSize="50px"
          fontWeight="300"
          lineHeight="1"
        >
          \
        </Text>
      )}
      <IconButton
        variant="outline"
        variantColor="teal"
        aria-label="Call Sage"
        fontSize="30px"
        position="absolute"
        bottom={{ md: "-80px" }}
        zIndex="1"
        marginLeft={{
          md: variant === "next" ? `${leftMargin + 200}px` : `${leftMargin}px`
        }}
        marginBottom="5px"
        icon={iconVariant}
        onClick={onClick}
        color="rgba(255,255,255,0.75)"
        border="none"
        _hover={{
          background: "transparent",
          color: "white"
        }}
        _active={{
          background: "transparent",
          color: "white"
        }}
        _focus={{
          outline: "none",
          color: "white"
        }}
      />
    </>
  );
}

export default class DoubleSlider extends React.Component {
  render() {
    const { children, items, ...props } = this.props;

    return (
      <Box className="double-slider" position="relative">
        <Container
          maxWidth={{ md: "calc(100% - 250px)" }}
          outerContainerProps={{
            backgroundColor: "#e4a197",
            color: "#de8e83"
          }}
          pt="110px"
          overflow="visible"
        >
          <Slider
            className="first-slider"
            fade
            dots={false}
            arrows={true}
            nextArrow={<Arrow />}
            prevArrow={<Arrow />}
            infinite={true}
            speed={500}
            slidesToScroll={1}
            appendDots={dots => <List bottom="-40px">{dots}</List>}
            slidesToShow={1}
            ref={slider => (this.firstSlider = slider)}
            beforeChange={(oldIndex, newIndex) => {
              this.secondSlider.slickGoTo(newIndex);
            }}
          >
            {items.map((item, index) => (
              <PseudoBox
                height={{ xs: "300px", md: "375px" }}
                justifyContent="center"
                _focus={{ outline: "none" }}
                position="relative"
              >
                <Image
                  src={item.image}
                  maxWidth="initial"
                  objectFit="cover"
                  style={{
                    filter: "brightness(0.7)"
                  }}
                />
              </PseudoBox>
            ))}
          </Slider>
        </Container>
        <Container
          maxWidth={{ md: "calc(100% - 250px)" }}
          outerContainerProps={{
            backgroundColor: "#e4a197",
            color: "#de8e83"
          }}
          pb="110px"
          mt={{ md: "-15%" }}
          overflow={{ xs: "hidden", md: "visible" }}
          alignItems={{ md: "flex-end" }}
        >
          <Slider
            className="second-slider white-dots"
            fade
            arrows={false}
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            appendDots={dots => <List bottom="-40px">{dots}</List>}
            ref={slider => (this.secondSlider = slider)}
            beforeChange={(oldIndex, newIndex) => {
              this.firstSlider.slickGoTo(newIndex);
            }}
            style={{
              backgroundColor: "white"
            }}
          >
            {items.map((item, index) => (
              <PseudoBox
                height={{ xs: "300px", md: "auto" }}
                justifyContent="center"
                _focus={{ outline: "none" }}
                position="relative"
              >
                <Flex
                  height="100%"
                  width="100%"
                  color="black"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  fontWeight="500"
                  py={{ md: "70px"}}
                  px={{ md: "100px"}}
                >
                  <Heading
                    as="h1"
                    textTransform="uppercase"
                    fontSize="70px"
                    lineHeight="1"
                    color="rgba(209, 134, 122, 0.5)"
                  >
                    “
                  </Heading>
                  <Text
                    fontSize="13px"
                    lineHeight="30px"
                    fontStyle="italic"
                    color="#414042"
                  >
                    {item.quote}
                  </Text>
                  <Heading
                    as="h2"
                    textTransform="uppercase"
                    letterSpacing="2px"
                    fontSize="13px"
                    mt="40px"
                    color="#d1867a"
                  >
                    {item.title}
                  </Heading>
                </Flex>
              </PseudoBox>
            ))}
          </Slider>
        </Container>
      </Box>
    );
  }
}

// const DoubleSlider = () => {
//   return(
    
//   )
// }

// export default DoubleSlider;
