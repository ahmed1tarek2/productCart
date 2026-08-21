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
      borderBottom="1px solid #e0e0e0"
      px={1}
      py={4}
      borderRadius="md"
      spacing={4}
    >
      <Box>
        <Text>{product.name}</Text>

        <HStack>
          <Text>{cartProduct.quantity}x</Text>
          <Text>@ ${product.price}</Text>
          <Text>${totalCardPrice}</Text>
        </HStack>
      </Box>

      <Box
        ml="auto"
        cursor="pointer"
        borderRadius="50%"
        border="2px solid #000"
        _hover={{ bg: "gray.200" }}
        p={1}
        onClick={()=>removeFromCart(cartProduct.name)}
      >
        <Image src="/assets/images/icon-remove-item.svg" alt="Remove item" />
      </Box>
    </HStack>
  );
}

export default CartOrders;
