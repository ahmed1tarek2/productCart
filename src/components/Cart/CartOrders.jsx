import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useStore } from "../../store";

function CartOrders() {
  // const { addToCart, removeFromCart, decreaseQuantity } = useStore();
  return (
    <HStack
      justifyContent="space-between"
      width="100%"
      borderBottom="1px solid #e0e0e0"
      px={1}
      py={4}
      borderRadius="md"
      spacing={4}
    >
      <Box>
        <Text>Product Name</Text>
        <HStack>
          <Text>1x</Text>
          <Text>@ $10.00</Text>
          <Text>$10.00</Text>
        </HStack>
      </Box>
      <Box
        ml="auto"
        cursor="pointer"
        borderRadius="50%"
        border="2px solid #000"
        _hover={{ bg: "gray.200" }}
        p={1}
      >
        <Image src="/assets/images/icon-remove-item.svg" alt="Remove item" />
      </Box>
    </HStack>
  );
}

export default CartOrders;
