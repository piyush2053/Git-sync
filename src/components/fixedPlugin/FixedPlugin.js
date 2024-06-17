// Chakra Imports
import { Button, Icon, useColorMode } from "@chakra-ui/react";
// Custom Icons
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import React from "react";

export default function FixedPlugin(props) {
  const { ...rest } = props;
  const { colorMode, toggleColorMode } = useColorMode();


  return (
    <Button
      {...rest}
      h='60px'
      w='60px'
      zIndex='99'
      bg={"white"}
      position='fixed'
      variant='no-effects'
      left={document.documentElement.dir === "rtl" ? "35px" : ""}
      right={document.documentElement.dir === "rtl" ? "" : "35px"}
      bottom='30px'
      borderRadius='50px'
      onClick={toggleColorMode}
      display='flex'
      p='0px'
      align='center'
      justify='center'>
      <Icon
        h='24px'
        w='24px'
        color='black'
        as={colorMode === "light" ? IoMdMoon : IoMdSunny}
      />
    </Button>
  );
}
