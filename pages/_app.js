import { ThemeProvider } from "next-themes";
import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default MyApp;
