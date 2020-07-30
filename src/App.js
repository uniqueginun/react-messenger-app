import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

import Message from "./components/Message";

const App = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username,
      timestap: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestap", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("what's your name?"));
  }, []);

  return (
    <div className="App">
      <Grid container spacing={3} className={"container"}>
        <Grid item xs={8}>
          <Paper className={"main__grid"}>
            <h1 className={"app__h2"}>Facebook Messenger Clone</h1>
            <h3>welcome: {username}</h3>
            <form className="messenger__form" onSubmit={sendMessage}>
              <TextField
                id="outlined-basic"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                label="Enter message..."
                variant="outlined"
              />
              <Button
                disabled={!input}
                type="submit"
                variant="contained"
                color="secondary"
                className={"app__submit"}
              >
                Send message
              </Button>
            </form>
            {!messages.length ? (
              <p>no messages sent yet!!!</p>
            ) : (
              <FlipMove>
                {messages.map((message, i) => (
                  <Message key={i} message={message} authenticated={username} />
                ))}
              </FlipMove>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
