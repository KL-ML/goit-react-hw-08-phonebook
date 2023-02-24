import { Box } from "components/Box";
import { Navigation } from "./Navigation/Navigation"; 

export const Sidebar = () => {
  return (
    <Box
      bg="background"
    >
      <Box
        height="sibebarWidth"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={4}
        mx="auto"
        maxWidth="560px"
      >
        <Navigation />
      </Box>
    </Box>
  );
};