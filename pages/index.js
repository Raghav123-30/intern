import { useEffect, useRef, useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import GetAllFeedbacks from "./allfeedbacks";
import { database } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";
function HomePage() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  function submitFormHandler(event) {
    event.preventDefault();

    const reqBody = { email: email, text: feedback };

    const feedbackcollectionRef = collection(database, "feedback");

    const addData = async () => {
      addDoc(feedbackcollectionRef, {
        email: email,
        text: feedback,
      }).then(() => {
        setEmail("");
        setFeedback("");
      });
    };

    addData();
  }

  
  return (
  
    <div>
      <Card
        sx={{
          width: "80%",
          margin: "0 auto",
          marginTop: "1.5rem",
          padding: "1.5rem",
        }}
      >
        <form onSubmit={submitFormHandler}>
          <FormControl sx={{ width: "100%" }} onSubmit={submitFormHandler}>
            <TextField
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              type="email"
              inputProps={{
                minLength: 6,
                maxlenght: 25,
              }}
              label="Enter email"
              sx={{ marginBottom: "1.5rem" }}
              required
            ></TextField>
            <TextField
              value={feedback}
              onChange={(event) => {
                setFeedback(event.target.value);
              }}
              label="Enter your feedback"
              sx={{ marginBottom: "1.5rem" }}
              inputProps={{
                minLength: 10,
                maxlenght: 50,
              }}
              required
            ></TextField>
            <Button
              variant="contained"
              color="success"
              type="submit"
              sx={{ width: "15%" }}
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Card>
      <GetAllFeedbacks />
    </div>
  );
}

export default HomePage;
