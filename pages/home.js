import React, { useContext } from "react";
import ScrollableTabsButtonAuto from '../src/components/Feed/feed'
import {useRouter} from "next/router";
import { FirebaseContext } from "../src/firebase";
import { Typography } from "@material-ui/core";

function HomePage () {
  const router = useRouter()
  const { user, firebase } = useContext(FirebaseContext); 
  
  if(!user){
    router.push('/signin')
  }
    
    
    return (
        <>
        <center><Typography variant="h2">Dashboard</Typography></center>
        <ScrollableTabsButtonAuto />

          
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
   </>
    );
}


export default HomePage;