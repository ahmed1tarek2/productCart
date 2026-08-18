import { Box, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function CartDetails() {
  return (
    <Box w="400px" borderRadius="lg" p="4" bg="gray.100" boxShadow="md"   >
        <Text>your cart (0)</Text>
        <VStack>
            <Image src="/assets/images/illustration-empty-cart.svg" alt="Cart Image" />
            <Text>your added items will appear here</Text>
        </VStack>
        
    </Box>
  )
}

export default CartDetails