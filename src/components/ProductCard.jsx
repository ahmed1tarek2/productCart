import { Button, Card, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { products } from "../api";
import { useStore } from "../store";



function ProductCard({ product }) {
  const {addToCart}=useStore()
  return (
    <Card.Root maxW="100% " overflow="hidden" border="none">
      <Card.Body gap="2" position="relative" p="0">
        <Image
          src={product.image.desktop.replace("./", "/")}
          h="250px"
          alt="test"
          borderRadius="lg"
          w="100%"
          h="300px"
          objectFit="cover"
        />
        <Button
          rounded="3xl"
          size={{ base: "md", md: "lg" }}
          position="absolute"
          bottom="-5"
          left="50%"
          transform="translateX(-50%)"
          onClick={addToCart(product.name)}
        >
          Add to cart
        </Button>
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
