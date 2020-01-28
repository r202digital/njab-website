import React from 'react'
import {
  Flex,
  List,
  ListItem,
  Stack,
  Link,
  Text
} from "@chakra-ui/core"

const Container = ({children, outerContainerProps, ...props}) => {
  return(
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
      {...outerContainerProps}
      >
      <Flex
        width="100%"
        maxWidth="1110px"
        flexDirection="column"
        px={{ xs: "15px", md: "0"}}
        {...props}
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default Container;
