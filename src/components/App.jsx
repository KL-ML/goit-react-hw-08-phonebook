import React, { lazy, Suspense } from "react";
import { Box } from "./Box";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { PublicRoute } from "./AuthRouts/PublicRoute";
import ContactsPage from "pages/ContactsPage";
import { PrivateRoute } from "./AuthRouts/PrivateRoute";

const JoinPage = lazy(() => import("pages/JoinPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const HomePage = lazy(() => import("pages/HomePage"));

export const App = () => {

  return (
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Box
        bg="light"
        color="text"
        width="containerWidth"
        position="relative"
        p={6}
        my={0}
        mx="auto"
        boxShadow="containerShadow"
        borderRadius="normal"
        overflow="hidden"
        fontFamily="heading"
      >
        <Layout>
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="" element={<HomePage />} />
              <Route path="" element={<PublicRoute />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/join" element={<JoinPage />} />
              </Route>
              <Route path="" element={<PrivateRoute />}>
                <Route path="/contacts" element={<ContactsPage />} />
              </Route>
            </Routes>

          </Suspense>
        
        </Layout>
      </Box>
        
    </BrowserRouter>
  );
};