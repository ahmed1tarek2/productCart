import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function CartDetails() {
  return (
    <Box>
      <VStack>
        <Image
          src="/assets/images/illustration-empty-cart.svg"
          alt="Cart Image"
        />
        <Text>your added items will appear here</Text>
      </VStack>
    </Box>
  );
}

export default CartDetails;
