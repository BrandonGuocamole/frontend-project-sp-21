import React from "react";
import Listing from "../components/Listing";
import { Flex } from "@chakra-ui/react";

function HomePage() {
    const data = require('./Data.json')
    console.log(data)
  const listings = data.listings.map((item) => <Listing item={item} />);
  return <Flex flexWrap="wrap">{listings}</Flex>;
}

export default HomePage;
