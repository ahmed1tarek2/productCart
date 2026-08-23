import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";

import React from "react";
import { useStore } from "../store";
import { products } from "../api";

function OrderConfirmed({ totalProductsPrice, onClose }) {
  const cart = useStore((state) => state.cart);
  const clearCart = useStore((state) => state.clearCart);

  const handleStartNewOrder = () => {
    clearCart();
    onClose();
  };

  return (
    <Box
      position="fixed"
      inset="0"
      bg="rgba(0, 0, 0, 0.5)"
      zIndex="999"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="20px"
    >
      <Box
        bg="white"
        width="100%"
        maxW="600px"
        borderRadius="20px"
        p={{ base: "24px", md: "40px" }}
        maxH="90vh"
        overflowY="auto"
      >
        <VStack align="stretch" gap="24px">
          {/* Header */}
          <VStack align="start" gap="10px">
            <Box
              width="50px"
              height="50px"
              borderRadius="full"
              border="2px solid"
              borderColor="green.400"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                color="var(--chakra-colors-green-400)"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </Box>

            <Text fontSize={{ base: "30px", md: "40px" }} fontWeight="bold">
              Order Confirmed
            </Text>

            <Text color="gray.500">We hope you enjoy your food!</Text>
          </VStack>

          {/* Products */}
          <VStack
            align="stretch"
            gap="0"
            bg="gray.50"
            borderRadius="12px"
            overflow="hidden"
          >
            {cart.map((item, index) => {
              const product = products.find(
                (product) =>
                  product.name.toLowerCase() === item.name.toLowerCase(),
              );

              if (!product) return null;

              return (
                <HStack
                  key={item.name}
                  justify="space-between"
                  p="16px"
                  borderBottom={
                    index !== cart.length - 1 ? "1px solid" : "none"
                  }
                  borderColor="gray.200"
                >
                  <HStack>
                    <Image
                      src={product.image.desktop.replace("./", "/")}
                      alt={product.name}
                      width="50px"
                      height="50px"
                      objectFit="cover"
                      borderRadius="8px"
                    />

                    <VStack align="start" gap="2px">
                      <Text fontWeight="bold">{product.name}</Text>

                      <HStack>
                        <Text color="orange.600" fontWeight="bold">
                          {item.quantity}x
                        </Text>

                        <Text color="gray.500">
                          ${Number(product.price).toFixed(2)}
                        </Text>
                      </HStack>
                    </VStack>
                  </HStack>

                  <Text fontWeight="bold">
                    ${(product.price * item.quantity).toFixed(2)}
                  </Text>
                </HStack>
              );
            })}
          </VStack>

          {/* Total */}
          <HStack justify="space-between">
            <Text color="gray.600">Order Total</Text>

            <Text fontSize="24px" fontWeight="bold">
              ${totalProductsPrice.toFixed(2)}
            </Text>
          </HStack>

          {/* Button */}
          <Button
            width="100%"
            size="lg"
            bg="orange.600"
            color="white"
            _hover={{ bg: "orange.700" }}
            borderRadius="full"
            onClick={handleStartNewOrder}
          >
            Start New Order
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

export default OrderConfirmed;
