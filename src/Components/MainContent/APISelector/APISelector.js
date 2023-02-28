import axios from "axios";
import { useQuery } from "react-query";

import Endpoints from "../Endpoints/Endpoints";
import RequestParameters from "../RequestParameters/RequestParameters";

import { ReactComponent as Play } from "../../../play.svg";
const APISelector = ({
  endpoints,
  setContent,
  currentEndpoint,
  setCurrentEndpoint,
}) => {
  const { data, refetch } = useQuery(currentEndpoint.name, {
    queryFn: async () => {
      const { data } = await axios(currentEndpoint.url);
      return data;
    },
    refetchOnWindowFocus: false,
    enabled: false, // disable this query from automatically running
    onSuccess: (data) => setContent(data.value),
    onError: (error) => setContent(`Error! ${error}`),
  });
  const handleClick = () => {
    // manually refetch
    setContent("Loading...");
    refetch();
  };
  console.log(data);
  return (
    <div className="col-4 bg-body-secondary border">
      <div
        className="d-flex flex-column align-items-stretch flex-shrink-0"
        style={{ height: "65vh" }}
      >
        <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="endpoints-tab"
              data-bs-toggle="tab"
              data-bs-target="#endpoints-tab-pane"
              type="button"
              role="tab"
              aria-controls="endpoints-tab-pane"
              aria-selected="true"
            >
              Endpoints
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="parameters-tab"
              data-bs-toggle="tab"
              data-bs-target="#parameters-tab-pane"
              type="button"
              role="tab"
              aria-controls="parameters-tab-pane"
              aria-selected="false"
              disabled={true}
            >
              Parameters
            </button>
          </li>
          <li>
            <button type="button" class="btn btn-primary" onClick={handleClick}>
              <Play />
            </button>
          </li>
        </ul>

        <div className="tab-content h-100 overflow-auto" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="endpoints-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex="0"
          >
            <Endpoints
              endpoints={endpoints}
              currentEndpoint={currentEndpoint}
              setCurrentEndpoint={setCurrentEndpoint}
            />
          </div>
          <div
            className="tab-pane fade"
            id="parameters-tab-pane"
            role="tabpanel"
            aria-labelledby="parameters-tab"
            tabIndex="0"
          >
            <RequestParameters />
          </div>
        </div>
      </div>
    </div>
  );
};

export default APISelector;
