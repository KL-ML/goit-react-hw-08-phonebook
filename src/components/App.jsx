import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { PublicRoute } from "./AuthRouts/PublicRoute";
import { PrivateRoute } from "./AuthRouts/PrivateRoute";

const JoinPage = lazy(() => import("pages/JoinPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const HomePage = lazy(() => import("pages/HomePage"));
const ContactsPage = lazy(() => import("pages/ContactsPage"));

export const App = () => {

  return (
    <BrowserRouter basename="goit-react-hw-08-phonebook">
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
    </BrowserRouter>
  );
};