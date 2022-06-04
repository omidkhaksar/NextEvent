import classes from "./comment-list.module.css";

function CommentList(props) {
  const { items } = props;
  const renderedItems = items.map((item) => {
    return(
      <li key={item._id}>
        <p>{item.userComment}</p>
        <div>
          By <address>{item.userName}</address>
        </div>
      </li>
    );
  });
  if(!renderedItems){
    return <h5>There is no comment yet</h5>; 
  }else{
  return (
    <ul className={classes.comments}>
      {renderedItems}
    </ul>
  );
  }
}

export default CommentList;
