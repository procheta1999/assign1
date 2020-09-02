import React, {useContext} from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField"
import Card from '@material-ui/core/Card';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Input from '@material-ui/core/Input';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button"
import { blue } from '@material-ui/core/colors';
import {IndexLink} from "../../../pages/index";
import { FirebaseContext } from "../../firebase";
import Map from "./map"
const ScrollableTabsButtonAuto = () => {
  return (
    
    <div>
      <Head><title>Dashboard</title>
      <meta charset="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.55"
        ></meta></Head>
      <Map/>
      <br></br>
      <center><Typography onClick={() => firebase.logout()} variant="h4" gutterBottom style={{ textAlign: "center" }}>
        Do you wish to log out?
      </Typography></center>
        <center><Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: "20px", width: "200px" }}
          >
            <IndexLink/>
          </Button></center>
<br></br>
      <style jsx>{`
      .title {
        text-align:center;
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
        padding: 3rem 3rem 3rem 3rem;
      }
      #s{
        animation: pulse 5s infinite;
      }
      @keyframes pulse {
        20% {
          color: red;
        }
        30%{
            color:blue; 
        }
        40%{
            color:green;
        }
        100% {
          color: yellow;
        }
      }
      #e{
        font-size:40px;
      }
      #pro{
        color:blue;
      }
      
      
      #b InputBase{
        font-size:100px;
      }
      textField: {
        width: 400;
        margin: 100;
      } 
      #but{
          align-items:center;
      }
      `}</style>
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
    </div>
  );
}
const FeedLink = () => (
    <p>
      <Link href='/feed'>
        <a>Feed</a>
      </Link>
    </p>
  );

export default ScrollableTabsButtonAuto

export{ FeedLink}
