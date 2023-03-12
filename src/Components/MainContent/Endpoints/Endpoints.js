import ScrollGroup from "../../Common/ScrollGroup/ScrollGroup";
import ScrollItem from "../../Common/ScrollItem/ScrollItem";

// endpoints param is a list of objects, each having name:str, active:bool, methods:List[str], description:str, url:url, paramsList:List
const Endpoints = ({ endpoints, currentMDPath, setCurrentMDPath }) => {
  const handleClick = (MDPath) => {
    setCurrentMDPath(MDPath);
  };
  var currentEndpoint = endpoints[currentMDPath];
  if (currentEndpoint === undefined) {
    return "Loading ... ";
  }

  return (
    <ScrollGroup>
      {Object.entries(endpoints).map(([path, endpoint], i) => (
        <ScrollItem
          key={path}
          active={path === currentMDPath}
          handle={() => handleClick(path)}
        >
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">{endpoint.name}</strong>
          </div>
          <div className="col-10 mb-1 small">{endpoint.description}</div>
        </ScrollItem>
      ))}
    </ScrollGroup>
  );
};

export default Endpoints;
