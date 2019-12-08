import React from 'react'
import {
  Flex,
  List,
  ListItem,
  Stack,
  Link,
  Text,
  Box
} from "@chakra-ui/core"
import Slider from 'react-slick';

const DisjointedSlider = ({children, pinkDots, mobileProps, ...props}) => {
  return (
    <>
      <Slider
        className={`disjoint-slider ${pinkDots && "pink-dots"}`}
        arrows={false}
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={4}
        slidesToScroll={1}
        centerMode
        appendDots={dots => <List bottom="-40px">{dots}</List>}
        {...props}
      >
        {children}
      </Slider>
      <Slider
        className={`disjoint-slider-mobile ${pinkDots && "pink-dots"}`}
        arrows={false}
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        centerMode
        appendDots={dots => <List bottom="-40px">{dots}</List>}
        {...mobileProps}
      >
        {children}
      </Slider>
    </>
  );
}

export default DisjointedSlider;
