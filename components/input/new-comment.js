import { useRef, useState } from 'react';
import classes from './new-comment.module.css'

function NewComment(props) {
  const [isInvalid, setIsInvalid] = useState(false);
  const emailInputRef = useRef();
  const commentInputRef = useRef();
  const nameInputRef = useRef();

  function sendCommentHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredComment = commentInputRef.current.value;
 

    if (
      !enteredEmail ||
      enteredEmail.trim() === '' ||
      !enteredEmail.includes('@') ||
      !enteredComment ||
      enteredComment.trim() === ''
    ) {
      setIsInvalid(true);
      return;
    }

    

    props.onAddComment({
      email: enteredEmail,
      name:enteredName,
      text: enteredComment,
    });
  }

  return (
    <form onSubmit={sendCommentHandler} className={classes.form}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor='email'>Your email</label>
          <input ref ={emailInputRef} type='email' id='email' />
        </div>
        <div className={classes.control}>
          <label htmlFor='name'>Your name</label>
          <input ref ={nameInputRef} type='text' id='name' />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor='comment'>Your comment</label>
        <textarea ref ={commentInputRef} id='comment' rows='5'></textarea>
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button>Submit</button>
    </form>
  );
}

export default NewComment;
