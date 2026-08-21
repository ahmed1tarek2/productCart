import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CartOrders from "./CartOrders";
import { useStore } from "../../store";
import { products } from "../../api";
import CartDetails from "./CartDetailsEmpty";

function CartDetailsFull() {
  const cart = useStore((state) => state.cart);

  const totalProductsPrice = cart.reduce((acc, pro) => {
    const product = products.find(
      (item) => item.name.toLowerCase() === pro.name.toLowerCase(),
    );
    return acc + product.price * pro.quantity;
  }, 0);

  const totalProductsQuantaty = cart.reduce((acc, pro) => {
    return acc + pro.quantity;
  }, 0);
  return (
    <Box>
      <Text>your cart ({totalProductsQuantaty})</Text>
      {cart.length === 0 ? (
        <CartDetails />
      ) : (
        <VStack width="100%" align="stretch">
          <Box width="100%">
            {cart.map((pro) => (
              <CartOrders key={pro.name} cartProduct={pro} />
            ))}
          </Box>

          <Box>
            <Text>Oreder Total</Text>
            <Text>${totalProductsPrice}</Text>
          </Box>

          <Box>
            <Text>This is a carbon-neutral delivery</Text>
          </Box>

          <Button>Confirm Order</Button>
        </VStack>
      )}
    </Box>
  );
}

export default CartDetailsFull;
