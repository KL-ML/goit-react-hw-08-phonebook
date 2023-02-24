import { Box } from 'components/Box';
import { Sidebar } from './Sidebar/Sidebar'; 

export const Layout = ({ children }) => {
  return (
    <Box
      // bg="light"
      color="text"
      // width="containerWidth"
      position="relative"
      // p={3}
      // my={0}
      // mx="auto"
      // boxShadow="containerShadow"
      // borderRadius="normal"
      // overflow="hidden"
      fontFamily="heading"
    >
      <Sidebar />

      <Box
        as="main"
        px={6}
        display="flex"
        justifyContent="center"  
      >
        <>{children}</>
      </Box>
    </Box>
  );
};