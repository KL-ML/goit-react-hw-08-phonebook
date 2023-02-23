import { ToastContainer } from 'react-toastify';

// import { ConfettiContainer } from 'components/Confetti/Confetti'; 

import { Sidebar } from './Sidebar/Sidebar'; 

export const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Sidebar />

        <main>
          <div>{children}</div>
        </main>
      </div>

      <ToastContainer />
    </>
  );
};