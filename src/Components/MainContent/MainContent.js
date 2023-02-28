import { useState } from "react";

//Components
import APISelector from "./APISelector/APISelector";
import Renderer from "./Renderer/Renderer";
import Header from "./Header/Header";
// import History from "./History/History";
// import FetchLogger from "./FetchLogger/FetchLogger";

const MainContent = () => {
  const [endpoints, setEndpoints] = useState([
    {
      name: "Chuck Norris 2",
      url: "https://api.chucknorris.io/jokes/random",
      active: false,
      methods: ["GET"],
      description: "Test for active endpoints",
      paramsList: [],
    },
  ]);
  console.log(setEndpoints);
  const [content, setContent] = useState(
    "API content will be displayed here, once the backend will be ready"
  );
  const [currentEndpoint, setCurrentEndpoint] = useState({
    name: "Chuck Norris",
    url: "https://api.chucknorris.io/jokes/random",
    active: true,
    methods: ["GET"],
    description: "An external endpoint proposing Chuck Norris jokes",
    paramsList: [],
  });
  return (
    <div className="container-fluid">
      <Header />
      <div className="row mx-1">
        <APISelector
          endpoints={endpoints}
          setContent={setContent}
          currentEndpoint={currentEndpoint}
          setCurrentEndpoint={setCurrentEndpoint}
        />
        <Renderer content={content} />
      </div>
      {/* <div className="row mx-1">
        <History />
        <FetchLogger />
      </div> */}
    </div>
  );
};
export default MainContent;
