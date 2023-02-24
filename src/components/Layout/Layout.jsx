import { Box } from 'components/Box';
import { Sidebar } from './Sidebar/Sidebar'; 

export const Layout = ({ children }) => {
  return (
    <Box
      color="text"
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