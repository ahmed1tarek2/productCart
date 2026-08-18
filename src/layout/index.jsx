import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";


function Layout() {
  return (
    <VStack>
      <Outlet />
    </VStack>
  );
}

export default Layout;