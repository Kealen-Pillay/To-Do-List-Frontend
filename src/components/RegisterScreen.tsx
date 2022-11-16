import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const styles = {
    input: {
      borderRadius: 25,
      height: "25%",
      width: "100%",
      border: "1px solid black",
      paddingLeft: "0.5rem",
    },
  };

  const registerUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      alert("Error creating account!");
    }
  };

  const navigateTasks = (): void => {
    let pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email && password && confirmPassword) {
      if (pattern.test(email)) {
        if (password.length >= 6) {
          if (confirmPassword === password) {
            registerUser();
            navigate("/tasks");
          } else {
            alert(
              "Your password does not match! Please confirm your passwords match"
            );
          }
        } else {
          alert("Your password must contain a minimum of 6 characters!");
        }
      } else {
        alert("You must provide an email in the format: example@example.com");
      }
    } else {
      alert("Please fill in all fields!");
    }
  };

  const navigateLogin = (): void => {
    navigate("/");
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
            height: "30%",
          }}
        >
          <input
            type="text"
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            style={styles.input}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            <Typography>Create Account</Typography>
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
            onClick={navigateLogin}
          >
            <Typography>Login</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterScreen;
