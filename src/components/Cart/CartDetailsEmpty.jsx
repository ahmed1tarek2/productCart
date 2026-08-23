// CartDetailsEmpty.jsx
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function CartDetails() {
  return (
    <Box>
      <VStack gap="16px" py="20px">
        <Image
          src="/assets/images/illustration-empty-cart.svg"
          alt="Cart Image"
          width="120px"
        />
        <Text color="gray.500" fontSize="14px" textAlign="center">
          Your added items will appear here
        </Text>
      </VStack>
    </Box>
  );
}

export default CartDetails;
