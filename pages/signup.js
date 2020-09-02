import React, { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Head from "next/head";
import { IndexLink } from "./index";

import useFormValidation from '../src/components/Auth/useFormValidation'
import validateLogin from "../src/components/Auth/validateLogin";
import firebase from "../src/firebase";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const INITIAL_STATE = {
  name: "",
  email: "",
  password: ""
};

const Signup = () => {
  const classes = useStyles();
  const router = useRouter();
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);
  const [firebaseError, setFirebaseError] = React.useState(null);


  async function authenticateUser() {
    const { name, email, password } = values;
    try {
        await firebase.register(name, email, password);
        router.push("/home");
    } catch (err) {
      console.error("Authentication Error", err);
      setFirebaseError(err.message);
    }
  }


  return (
    <div className={classes.root} style={{backgroundColor:"#153260"}}>
      <Head>
        <meta charset="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.55"
        ></meta>
        <title>Sign Up</title>
      </Head>
      <main>
        <div className="title">
          <center>
            <Typography variant="h2" style={{color:"white"}}>Welcome to My Page!</Typography>
            <Typography variant="h3" style={{color:"white"}}>Sign Up!</Typography>
        </center></div>
        <center>
          <img src="https://media2.giphy.com/media/3oKIPtaS9TtrmIzXRm/200w.webp?cid=ecf05e47da8l5cc13fbpywrz494ko8i25zvbze2byyg9ubtn&rid=200w.webp"></img>
        </center>
        <center>
          <form onSubmit={handleSubmit}>
            <div className="grid">
              <div className="card">
                <TextField
                id="outlined-helperText"
                  onChange={handleChange}
                  value={values.name}
                  name="name"
                  label="username"
                  type="text"
                  placeholder="Your name"
                  variant="outlined"
                />
                <br></br>
                <br></br>
                <TextField
                id="outlined-helperText"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name="email"
                  label="email"
                  type="text"
                  placeholder="Email Address"
                  variant="outlined"
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
                <br></br>
                <br></br>

                <TextField
                id="outlined-helperText"
                label="password"
                variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                {errors.password && <p className="error-text">{errors.password}</p>}
                {firebaseError && <p className="error-text">{firebaseError}</p>}
                <br></br>
                <br></br>
                <center>
                  <Button variant="contained"
                  color="primary"
                  style={{ marginTop: "20px", width: "200px" }} type="submit">Sign Up</Button>
                </center>
                <br></br>
                <center>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginTop: "20px", width: "200px" }}
                  >
                    <IndexLink />
                  </Button>
                </center>
              </div>
            </div>
          </form>
        </center>
      </main>
      <footer>
      <Typography variant="h5">Procheta Bhattacharyya</Typography>
      </footer>
      <style jsx>{`
      img{
        width:450px;
        height:450px;
      }
        footer {
          width: 100%;
          height: 100px;
          color:white;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 1000px;
          margin-top: 4rem;
        }

        .card {
          background-image:
            url(https://t4.ftcdn.net/jpg/03/35/44/49/240_F_335444972_UgKdQD7wlTgfywtzqfOVzJOHjFyma9bv.jpg);
          background-size: cover;
          background-position: top;
          position: relative; 
          margin: 2rem;
          flex-basis: 45%;
          padding: 3rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid black;
          border-radius: 20px;
          -moz-box-shadow: inset 0 0 10px #000000;
          -webkit-box-shadow: inset 0 0 10px #000000;
          box-shadow: inset 0 0 10px #000000;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        #l {
          text-align: center;
        }
        .logo {
          height: 1.2em;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 3rem;
          padding: 5rem 0;
        }
        #s {
          animation: pulse 5s infinite;
        }
        @keyframes pulse {
          20% {
            color: red;
          }
          30% {
            color: blue;
          }
          40% {
            color: green;
          }
          100% {
            color: yellow;
          }
        }
        #pro {
          color: blue;
        }
        form {
          font-size: 30px;
          padding: 0.0001rem 5em 5em 5em;
          margin: 100px 100px 100px 100px;
        }
        Button {
          align-items: center;
        }
        #new {
          text-align: center;
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
};

const SignUpLink = () => (
  <p>
    Don't have an account?🤔{" "}
    <Link href="/signup">
      <a>Sign Up</a>
    </Link>
  </p>
);
export default Signup;
export { SignUpLink };
