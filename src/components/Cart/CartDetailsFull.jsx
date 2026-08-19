import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CartOrders from "./CartOrders";

function CartDetailsFull() {
  return (
    <VStack width="100%" align="stretch">
      <Box width="100%">
        <CartOrders />
      </Box>

      <Box>
        <Text>Oreder Total</Text>
        <Text>95$</Text>
      </Box>

      <Box>
        <Text>This is a carbon-neutral delivery</Text>
      </Box>

      <Button>Confirm Order</Button>
    </VStack>
  );
}

export default CartDetailsFull;
