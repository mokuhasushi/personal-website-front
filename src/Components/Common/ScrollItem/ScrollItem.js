const ScrollItem = (props) => {
  const { active, children, handle } = props;
  let classActive = "";
  if (active) {
    classActive = "active";
  }
  return (
    <button
      className={`list-group-item list-group-item-action ${classActive} py-3 lh-sm`}
      ariactive={active ? "true" : "false"}
      onClick={handle}
    >
      {children}
    </button>
  );
};

export default ScrollItem;
