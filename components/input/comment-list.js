import classes from "./comment-list.module.css";

function CommentList(props) {
  const { items } = props;
  const renderedItems = items.map((item) => {
    return(
      <li key={item.id}>
        <p>{item.userComment}</p>
        <div>
          By <address>{item.userName}</address>
        </div>
      </li>
    );
  });
  return (
    <ul className={classes.comments}>
      {renderedItems}
    </ul>
  );
}

export default CommentList;
