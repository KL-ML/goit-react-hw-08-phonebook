import { Box } from "components/Box";
import { Navigation } from "./Navigation/Navigation"; 

export const Sidebar = () => {
  return (
    <Box
      bg="background"
      height="sibebarWidth"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      
      px={4}
    >
      
        <Navigation />
    </Box>
  );
};