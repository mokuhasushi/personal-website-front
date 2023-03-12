import ReactMarkdown from "react-markdown";

import { AWrapper } from "./MarkdownComponents";

const Renderer = ({ content, setMDPath }) => {
  return (
    <div className="col-10 bg-body-secondary border" style={{ height: "65vh" }}>
      {/* <div className="d-flex w-100 align-items-center justify-content-between mt-2">
        <h2>Title here</h2>
        <small>endpoint name</small>
      </div> */}

      {/* <div className="d-flex w-100 overflow-auto h-100 mt-2"> */}
      <ReactMarkdown
        components={{ a: (props) => AWrapper({ ...props, setMDPath }) }}
      >
        {content}
      </ReactMarkdown>
      {/* </div> */}
    </div>
  );
};

export default Renderer;
