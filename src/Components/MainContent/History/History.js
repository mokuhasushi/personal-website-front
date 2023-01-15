import ScrollGroup from "../../Common/ScrollGroup/ScrollGroup";
import ScrollItem from "../../Common/ScrollItem/ScrollItem";

const History = () => {
  return (
    <div className="col-3 bg-body-secondary border">
      <div className="d-flex flex-column mt-2 overflow-auto" style={{ height: "30vh" }}>
        <ScrollGroup>
          <ScrollItem active={true}>
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">Endpoint name</strong>
              <small>GET, POST</small>
            </div>
          </ScrollItem>
          <ScrollItem active={false}>
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">Endpoint name</strong>
              <small>GET, POST</small>
            </div>
          </ScrollItem>
          <ScrollItem active={false}>
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">Endpoint name</strong>
              <small>GET, POST</small>
            </div>
          </ScrollItem>
          <ScrollItem active={false}>
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">Endpoint name</strong>
              <small>GET, POST</small>
            </div>
          </ScrollItem>
          <ScrollItem active={false}>
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">Endpoint name</strong>
              <small>GET, POST</small>
            </div>
          </ScrollItem>
          <ScrollItem active={false}>
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">Endpoint name</strong>
              <small>GET, POST</small>
            </div>
          </ScrollItem>
        </ScrollGroup>
      </div>
    </div>
  );
};

export default History;
