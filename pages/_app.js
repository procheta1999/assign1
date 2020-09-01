import React, { createContext, useState } from "react";
import App from "next/app";
import useAuth from "../src/components/Auth/useAuth";
import firebase, { FirebaseContext } from "../src/firebase";




function MyApp({ Component, pageProps }) {
  const user = useAuth();
  return (
    <>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <Component {...pageProps} />
      </FirebaseContext.Provider>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;