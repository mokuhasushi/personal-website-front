const Renderer = ({ content }) => {
  return (
    <div className="col-8 bg-body-secondary border" style={{ height: "65vh" }}>
      <div className="d-flex w-100 align-items-center justify-content-between mt-2">
        <h2>Title</h2>
        <small>endpoint name</small>
      </div>

      <div className="d-flex w-100 overflow-auto h-100 mt-2">{content}</div>
    </div>
  );
};

export default Renderer;
