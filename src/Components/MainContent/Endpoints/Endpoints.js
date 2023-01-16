import ScrollGroup from "../../Common/ScrollGroup/ScrollGroup";
import ScrollItem from "../../Common/ScrollItem/ScrollItem";

// endpoints param is a list of objects, each having name:str, active:bool, methods:List[str], description:str, url:url, paramsList:List
const Endpoints = ({ endpoints, currentEndpoint, setCurrentEndpoint }) => {
  const handleClick = (endpoint) => {
    console.log("O");
    endpoints.unshift(currentEndpoint);
    const index = endpoints.indexOf(endpoint);
    if (index > -1) {
      endpoints.splice(index, 1);
    }
    setCurrentEndpoint(endpoint);
  };
  return (
    <ScrollGroup>
      <ScrollItem key={currentEndpoint.url} active={true}>
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">{currentEndpoint.name}</strong>
          <small>{currentEndpoint.methods}</small>
        </div>
        <div className="col-10 mb-1 small">{currentEndpoint.description}</div>
      </ScrollItem>
      {endpoints.map((endpoint) => (
        <ScrollItem
          key={endpoint.url}
          active={false}
          handle={() => handleClick(endpoint)}
        >
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">{endpoint.name}</strong>
            <small>{endpoint.methods}</small>
          </div>
          <div className="col-10 mb-1 small">{endpoint.description}</div>
        </ScrollItem>
      ))}
    </ScrollGroup>
  );
};

export default Endpoints;
