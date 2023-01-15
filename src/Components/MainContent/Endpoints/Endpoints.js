import ScrollGroup from "../../Common/ScrollGroup/ScrollGroup";
import ScrollItem from "../../Common/ScrollItem/ScrollItem";

// endpoints param is a list of objects, each having name:str, active:bool, methods:List[str], description:str, url:url, paramsList:List
const Endpoints = ({ endpoints }) => {
  return (
    <ScrollGroup>
      {endpoints.map((endpoint) => (
        <ScrollItem key={endpoint.url} active={endpoint.active}>
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
