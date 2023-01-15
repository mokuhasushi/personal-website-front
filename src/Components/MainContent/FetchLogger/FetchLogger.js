const FetchLogger = () => {
  return (
    <div className="col-9 bg-body-secondary border">
      <div className="d-flex flex-column mt-2 overflow-auto">
        <h3>Endpoint name</h3>
        <ul>
          <li><strong>Method:</strong> test</li>
          <li><strong>Body:</strong> test</li>
        </ul>
      </div>
    </div>
  );
};

export default FetchLogger;
