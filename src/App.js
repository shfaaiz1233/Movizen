import HomePage from "./pages/HomePage";
import VideoPlayer from "./pages/VideoPlayer";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import React from "react";
//styles
import "./App.css";
import SkeletonMain from "./components/SkeletonMain";
import TextField from "@mui/material/TextField";
import SignIn from "./components/SignIn";
import { useState } from "react";
const LazyMain = React.lazy(() => import("./pages/MainPage"));

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <Layout isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <SignIn isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
          }
        />
        <Route
          path="/main"
          element={
            <React.Suspense fallback={<SkeletonMain />}>
              {isSignedIn ? (
                <LazyMain />
              ) : (
                <SignIn isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
              )}
            </React.Suspense>
          }
        />

        <Route path="/player" element={<VideoPlayer />} />
      </Routes>
    </Layout>
  );
};
export default App;
