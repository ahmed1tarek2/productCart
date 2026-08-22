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
  return (
    <Card.Root maxW="100%" overflow="hidden" border="none">
      <Card.Body gap="2" position="relative" p="0">
        <Image
          src={product.image.desktop.replace("./", "/")}
          alt="test"
          borderRadius="lg"
          width="100%"
          height="300px"
          objectFit="cover"
        />
        {!isInCart ? (
          <Button
            rounded="3xl"
            size={{ base: "md", md: "lg" }}
            width={"130px"}
            position="absolute"
            bottom="-5"
            left="50%"
            transform="translateX(-50%)"
            onClick={() => addToCart(product.name)}
          >
            Add to cart
          </Button>
        ) : (
          <Button
            rounded="3xl"
            size={{ base: "md", md: "lg" }}
            width={"130px"}
            position="absolute"
            bottom="-5"
            left="50%"
            transform="translateX(-50%)"
          >
            <HStack justify={"space-between"} gap={5}>
              <Box
                onClick={() => decreaseQuantity(product.name)}
                ml="auto"
                p={1}
              >
                <Image src="assets/images/icon-decrement-quantity.svg" />
              </Box>

              <Text>
                {
                  <Text>
                    {
                      cart.find(
                        (pro) =>
                          pro.name.toLowerCase() === product.name.toLowerCase(),
                      )?.quantity
                    }
                  </Text>
                }
              </Text>

              <Box onClick={() => addToCart(product.name)} ml="auto" p={1}>
                <Image src="assets/images/icon-increment-quantity.svg" />
              </Box>
            </HStack>
          </Button>
        )}
      </Card.Body>
      <VStack justify="start" align="start" pt="6">
        {" "}
        <Card.Title>{product.category}</Card.Title>
        <Card.Description>{product.name}</Card.Description>
        <Text>${product.price.toFixed(2)}</Text>
      </VStack>
    </Card.Root>
  );
}

export default ProductCard;
