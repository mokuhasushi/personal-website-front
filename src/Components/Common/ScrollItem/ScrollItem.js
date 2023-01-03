const ScrollItem = (props) => {
  const { active, children } = props;
  let classActive = ""
  if (active) {
    classActive = "active"
  }
  return (
    <button
      className={`list-group-item list-group-item-action ${classActive} py-3 lh-sm`}
      ariactive={active ? "true" : "false"}
    >
        {children}
    </button>
  );
};

export default ScrollItem;
