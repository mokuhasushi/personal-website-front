import axios from "axios";
import { useQuery } from "react-query";

import Endpoints from "../Endpoints/Endpoints";

// import { ReactComponent as Play } from "../../../play.svg";
const APISelector = ({
  endpoints,
  setContent,
  currentMDPath,
  setCurrentMDPath,
}) => {
  useQuery(currentMDPath, {
    queryFn: async () => {
      const url = endpoints[currentMDPath].url;
      if (url === undefined) {
        return "## Sorry! Something went wrong";
      }
      const { data } = await axios(url);

      return data;
    },
    refetchOnWindowFocus: false,
    placeholderData: "Loading...",
    enabled: !!endpoints && !!currentMDPath, // disable this query from automatically running
    onSuccess: (data) => setContent(data),
    onError: (error) => setContent(`Error! ${error}`),
  });

  return (
    <div className="col-2 bg-body-secondary border">
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
              Pages
            </button>
          </li>
          {/* <li>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClick}
            >
              <Play />
            </button>
          </li> */}
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
              currentMDPath={currentMDPath}
              setCurrentMDPath={setCurrentMDPath}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default APISelector;
