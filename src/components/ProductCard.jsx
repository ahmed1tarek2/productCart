import {
  Box,
  Button,
  Card,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useStore } from "../store";

function ProductCard({ product }) {
  const { addToCart, decreaseQuantity } = useStore();
  const cart = useStore((state) => state.cart);

  const isInCart = cart.some(
    (item) => item.name?.toLowerCase() === product.name?.toLowerCase(),
  );

  const cartItem = cart.find(
    (pro) => pro.name.toLowerCase() === product.name.toLowerCase(),
  );

  return (
    <Card.Root
      maxW="100%"
      overflow="visible"
      border="none"
      bg="transparent"
      boxShadow="none"
    >
      <Card.Body gap="0" position="relative" p="0">
        <Image
          src={product.image.desktop.replace("./", "/")}
          alt={product.name}
          borderRadius="12px"
          width="100%"
          height="260px"
          objectFit="cover"
          border={isInCart ? "2px solid" : "none"}
          borderColor="orange.600"
        />

        {!isInCart ? (
          <Button
            rounded="full"
            size="sm"
            width="130px"
            position="absolute"
            bottom="-16px"
            left="50%"
            transform="translateX(-50%)"
            bg="white"
            color="gray.800"
            border="1px solid"
            borderColor="gray.300"
            _hover={{ borderColor: "orange.600", color: "orange.600" }}
            onClick={() => addToCart(product.name)}
          >
            <HStack gap="2">
              <Text fontSize="14px">🛒</Text>
              <Text fontSize="14px" fontWeight="medium">
                Add to Cart
              </Text>
            </HStack>
          </Button>
        ) : (
          <HStack
            rounded="full"
            width="130px"
            justify="space-between"
            position="absolute"
            bottom="-16px"
            left="50%"
            transform="translateX(-50%)"
            bg="orange.600"
            px="10px"
            py="7px"
          >
            <Box
              onClick={() => decreaseQuantity(product.name)}
              cursor="pointer"
              border="1px solid white"
              borderRadius="full"
              width="20px"
              height="20px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="white" fontSize="14px" lineHeight="1">
                −
              </Text>
            </Box>

            <Text color="white" fontWeight="bold" fontSize="14px">
              {cartItem?.quantity}
            </Text>

            <Box
              onClick={() => addToCart(product.name)}
              cursor="pointer"
              border="1px solid white"
              borderRadius="full"
              width="20px"
              height="20px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="white" fontSize="14px" lineHeight="1">
                +
              </Text>
            </Box>
          </HStack>
        )}
      </Card.Body>

      <VStack justify="start" align="start" pt="8" gap="2px">
        <Card.Title fontSize="12px" color="gray.500" fontWeight="normal">
          {product.category}
        </Card.Title>
        <Card.Description fontSize="15px" fontWeight="bold" color="gray.800">
          {product.name}
        </Card.Description>
        <Text color="orange.600" fontWeight="bold" fontSize="14px">
          ${product.price.toFixed(2)}
        </Text>
      </VStack>
    </Card.Root>
  );
}

export default ProductCard;
