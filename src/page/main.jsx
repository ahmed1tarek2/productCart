import { Box, Grid, HStack, Text } from "@chakra-ui/react";
import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../api";
import CartDetails from "../components/Cart/CartDetailsEmpty";
import CartDetailsFull from "../components/Cart/CartDetailsFull";

function Main() {
  return (
    <HStack
      justify="center"
      align="start"
      w="100%"
      minH="100%"
      bg="#fdfaf7"
      px={{ base: "5", md: "10" }}
      py={{ base: "6", md: "10" }}
      gap="10"
    >
      <Box flex="1" maxW="900px">
        <Text fontSize="28px" fontWeight="bold" mb="6">
          Desserts
        </Text>

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="6"
        >
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </Grid>
      </Box>

      <Box
        w="380px"
        flexShrink="0"
        borderRadius="16px"
        position="sticky"
        top="10"
      >
        <CartDetailsFull />
        {/* <CartDetails /> */}
      </Box>
    </HStack>
  );
}

export default Main;
