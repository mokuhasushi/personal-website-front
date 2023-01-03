import Endpoints from "../Endpoints/Endpoints";
import RequestParameters from "../RequestParameters/RequestParameters";

const APISelector = () => {
  return (
    <div className="col-4 bg-body-secondary border">
      <div
        className="d-flex flex-column align-items-stretch flex-shrink-0"
        style={{ height: "65vh" }}
      >
        <ul className="nav nav-tabs" id="myTab" role="tablist">
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
            >
              Parameters
            </button>
          </li>
        </ul>
        <div className="tab-content h-100 overflow-auto" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="endpoints-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabindex="0"
          >
            <Endpoints />
          </div>
          <div
            className="tab-pane fade"
            id="parameters-tab-pane"
            role="tabpanel"
            aria-labelledby="parameters-tab"
            tabindex="0"
          >
            <RequestParameters />
          </div>
        </div>
      </div>
    </div>
  );
};

export default APISelector;
