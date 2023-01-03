const ScrollGroup = (props) => {
  return (
    <div className="list-group list-group-flush border-bottom scrollarea">
      {props.children}
    </div>
  );
};

export default ScrollGroup;
