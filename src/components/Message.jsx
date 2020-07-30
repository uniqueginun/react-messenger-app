import React, { forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Message.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 10,
    marginBottom: 10,
  },
});

const Message = forwardRef(({ message, authenticated }, ref) => {
  const classes = useStyles();

  const isMine = authenticated === message.username;

  return (
    <div ref={ref}>
      <Card
        className={`${classes.root} message__card ${
          isMine && "mine__message_card"
        }`}
      >
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>{message.username}:</strong> {message.message}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
});

export default Message;
