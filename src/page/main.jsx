import { Box, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../api";
import CartDetails from "../components/CartDetails";

function Main() {
  return (
    <HStack justify="center" align="start" w="100%" h="100%" px="1" py="8" >
      <Box>
        <HStack justify="center" align="center" wrap="wrap" gap="4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </HStack>
      </Box>
      <Box>
        <CartDetails />
      </Box>
    </HStack>
  );
}

export default Main;
