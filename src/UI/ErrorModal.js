import Button from "./Button";
import classes from "./ErrorModal.module.css";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.content}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModal;
