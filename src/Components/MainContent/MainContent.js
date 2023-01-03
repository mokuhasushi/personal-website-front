import APISelector from "./APISelector/APISelector";
import Renderer from "./Renderer/Renderer";
import Header from "./Header/Header";
import History from "./History/History";
import FetchLogger from "./FetchLogger/FetchLogger";

const MainContent = () => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row mx-1">
        <APISelector />
        <Renderer />
      </div>
      <div className="row mx-1">
        <History />
        <FetchLogger />
      </div>
    </div>
  );
};
export default MainContent;
