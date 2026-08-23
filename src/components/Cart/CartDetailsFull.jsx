// CartDetailsFull.jsx
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CartOrders from "./CartOrders";
import { useStore } from "../../store";
import { products } from "../../api";
import CartDetails from "./CartDetailsEmpty";
import OrderConfirmed from "../../page/conformPage";

function CartDetailsFull() {
  const [isOrderConfirmed, setIsOrderConfirmed] = React.useState(false);

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
    <>
      <Box bg="white" borderRadius="16px" p={{ base: "20px", md: "24px" }}>
        <Text fontSize="20px" fontWeight="bold" color="orange.600" mb="16px">
          Your Cart ({totalProductsQuantaty})
        </Text>

        {cart.length === 0 ? (
          <CartDetails />
        ) : (
          <VStack width="100%" align="stretch" gap="16px">
            <Box width="100%">
              {cart.map((pro) => (
                <CartOrders key={pro.name} cartProduct={pro} />
              ))}
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center" pt="4px">
              <Text color="gray.600">Order Total</Text>
              <Text fontSize="22px" fontWeight="bold">
                ${totalProductsPrice.toFixed(2)}
              </Text>
            </Box>

            <Box
              bg="orange.50"
              borderRadius="10px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="8px"
              py="14px"
            >
              <Text fontSize="16px">🌱</Text>
              <Text fontSize="14px" color="gray.700">
                This is a <Text as="span" fontWeight="bold">carbon-neutral</Text> delivery
              </Text>
            </Box>

            <Button
              width="100%"
              size="lg"
              bg="orange.600"
              color="white"
              _hover={{ bg: "orange.700" }}
              borderRadius="full"
              onClick={() => setIsOrderConfirmed(true)}
            >
              Confirm Order
            </Button>
          </VStack>
        )}
      </Box>

      {isOrderConfirmed && (
        <OrderConfirmed
          totalProductsPrice={totalProductsPrice}
          onClose={() => setIsOrderConfirmed(false)}
        />
      )}
    </>
  );
}

export default CartDetailsFull;