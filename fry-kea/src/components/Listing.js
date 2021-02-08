import React, { useState } from "react";
import ItemInfo from "./ItemInfo";
import {
  Box,
  SimpleGrid,
  Image,
  Center,
  RequiredIndicator,
} from "@chakra-ui/react";

function Listing(props) {
  const stocked = props.item.stocked == "yes";
  const [clicked, setClicked] = React.useState(false);
  return (
    <Box w='100vw'>
      <SimpleGrid
        columns={3}
        boxShadow="lg"
        w="60vw"
        bg="white"
        h="30vh"
        margin="2% auto"
        onClick = {() => setClicked(!clicked)}
      >
        <Box>
          <Center>
            <Image h="26vh" marginTop="2vh" src={props.item.image} />
          </Center>
        </Box>
        <Box display="grid" gridTemplateColumns="auto">
          <Box display="flex">
            <Box fontSize="2rem" alignSelf="flex-end">
              {props.item.name}
            </Box>
          </Box>
          <Box fontWeight={600}>${props.item.price}.00</Box>
        </Box>
        <Box lineHeight="30vh" textAlign="right">
          <Box
            marginRight="3vw"
            fontSize="1.2rem"
            color={stocked ? "#78A962" : "#A96B62"}
          >
            {stocked ? "In stock" : "Out of stock"}
          </Box>
        </Box>
      </SimpleGrid>
      {clicked ? <ItemInfo item={props.item} /> : <Box />}
    </Box>
  );
}

export default Listing;
