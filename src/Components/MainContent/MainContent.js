import Endpoints from "./Endpoints/Endpoints";
import RequestParameters from "./RequestParameters/RequestParameters";
import Renderer from "./Renderer/Renderer";
import Header from "./Header/Header";
import History from "./History/History";
import FetchLogger from "./FetchLogger/FetchLogger";

const MainContent = () => {
  return (
    <div class="container-fluid">
        <Header />
      <div class="row mx-1">
        <Endpoints />
        <RequestParameters />
        <Renderer />
      </div>
      <div class="row mx-1">
        <History />
        <FetchLogger />
      </div>
    </div>
  );
};
export default MainContent;
