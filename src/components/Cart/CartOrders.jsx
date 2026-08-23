// CartOrders.jsx
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useStore } from "../../store";
import { products } from "../../api";

function CartOrders({ cartProduct }) {
  const { removeFromCart } = useStore();

  const product = products.find(
    (item) => item?.name?.toLowerCase() === cartProduct?.name?.toLowerCase(),
  );

  if (!product) {
    return null;
  }
  const totalCardPrice = product.price * cartProduct.quantity;

  return (
    <HStack
      justifyContent="space-between"
      width="100%"
      borderBottom="1px solid #f0e6e0"
      px="0"
      py="14px"
      align="start"
    >
      <Box>
        <Text fontWeight="bold" fontSize="15px">
          {product.name}
        </Text>

        <HStack gap="8px" mt="2px">
          <Text color="orange.600" fontWeight="bold" fontSize="14px">
            {cartProduct.quantity}x
          </Text>
          <Text color="gray.500" fontSize="14px">
            @ ${Number(product.price).toFixed(2)}
          </Text>
          <Text color="gray.500" fontSize="14px">
            ${totalCardPrice.toFixed(2)}
          </Text>
        </HStack>
      </Box>

      <Box
        ml="auto"
        cursor="pointer"
        borderRadius="50%"
        border="1px solid"
        borderColor="gray.400"
        _hover={{ bg: "gray.100", borderColor: "gray.600" }}
        p="4px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        onClick={() => removeFromCart(cartProduct.name)}
      >
        <Image
          src="/assets/images/icon-remove-item.svg"
          alt="Remove item"
          width="10px"
          height="10px"
        />
      </Box>
    </HStack>
  );
}

export default CartOrders;
