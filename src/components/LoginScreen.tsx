import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const styles = {
    input: {
      borderRadius: 25,
      height: "35%",
      width: "100%",
      border: "1px solid black",
      paddingLeft: "0.5rem",
    },
  };

  const successLogin = () =>
    toast.success("Successfully Logged In", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const unsuccessfulLogin = () =>
    toast.error("No User Exists!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/tasks");
      successLogin();
      setEmail("");
      setPassword("");
    } catch (error) {
      unsuccessfulLogin();
    }
  };

  const navigateRegister = (): void => {
    navigate("/register");
  };

  const navigateTasks = (): void => {
    let pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email && password) {
      if (pattern.test(email)) {
        loginUser();
      } else {
        alert("You must provide an email in the format: example@example.com");
      }
    } else {
      alert("Please Provide Both An Email and Password");
    }
  };

  return (
    
      <Box
        sx={{
          background: "linear-gradient(to right, #ff875c, #eb346b)",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "60%",
            height: "70%",
            backgroundColor: "white",
            opacity: 0.5,
            borderRadius: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "20%",
              width: "40%",
              marginTop: "5%",
              marginBottom: "5%",
            }}
          >
            <img src={require("../images/tickIcon.png")} alt="" height="100%" />
            <Typography sx={{ fontWeight: "bold", fontSize: 60 }}>
              To Do
            </Typography>
          </Box>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "5%",
              height: "25%",
            }}
          >
            <input
              type="text"
              style={styles.input}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              style={styles.input}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              height: "20%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                width: "100%",
                height: "45%",
                ":hover": {
                  backgroundColor: "black",
                },
              }}
              onClick={navigateTasks}
            >
              <Typography>Login</Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                width: "100%",
                height: "45%",
                ":hover": {
                  backgroundColor: "black",
                },
              }}
              onClick={navigateRegister}
            >
              <Typography>Register</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
  );
};

export default LoginScreen;
