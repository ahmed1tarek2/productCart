import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../api";
import CartDetails from "../components/Cart/CartDetailsEmpty";
import CartDetailsFull from "../components/Cart/CartDetailsFull";

function Main() {
  return (
    <HStack justify="center" align="start" w="100%" h="100%" px="8" py="8">
      <Box>
        <HStack justify="center" align="center" wrap="wrap" gap="4">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </HStack>
      </Box>
      <Box w="60%" borderRadius="lg" p="5" bg="gray.100" boxShadow="md">
        
        <CartDetailsFull />
        {/* <CartDetails /> */}
      </Box>
    </HStack>
  );
}

export default Main;
