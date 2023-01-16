import axios from "axios";
import { useQuery } from "react-query";

//Components
import APISelector from "./APISelector/APISelector";
import Renderer from "./Renderer/Renderer";
import Header from "./Header/Header";
import History from "./History/History";
import FetchLogger from "./FetchLogger/FetchLogger";

const MainContent = () => {
  let content = "";
  // const { isLoading, isError, data } = useQuery("joke", async () => {
  //   const { data } = await axios();
  //   return data;
  // });
  // if (isLoading) {
  //   content = <h1>Loading...</h1>;
  // } else if (isError) {
  //   content = <h1>Error!</h1>;
  // } else {
  //   content = data.value;
  // }
  let endpoints = [
    {
      name: "Chuck Norris",
      url: "https://api.chucknorris.io/jokes/random",
      active: true,
      methods: ["GET"],
      description: "An external endpoint proposing Chuck Norris jokes",
      paramsList: [],
    },
    {
      name: "Chuck Norris 2",
      url: "https://api.chucknorris.io/jokes/random",
      active: false,
      methods: ["GET"],
      description: "Test for active endpoints",
      paramsList: [],
    },
  ];
  return (
    <div className="container-fluid">
      <Header />
      <div className="row mx-1">
        <APISelector endpoints={endpoints} />
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
