import { useState } from "react";

//Components
import APISelector from "./APISelector/APISelector";
import Renderer from "./Renderer/Renderer";
import Header from "./Header/Header";
import axios from "axios";
import { useQuery } from "react-query";
import { xml2json } from "xml-js";
// import History from "./History/History";
// import FetchLogger from "./FetchLogger/FetchLogger";

const S3URL = "https://niotir-md.s3.eu-west-1.amazonaws.com/";

const MainContent = () => {
  const [endpoints, setEndpoints] = useState({});

  useQuery("bucketlist", {
    queryFn: async () => {
      const { data: xmlData } = await axios(S3URL + "?list-type=2");

      const rawObjectResponse = JSON.parse(
        xml2json(xmlData, {
          compact: true,
        })
      );

      var data = {};
      rawObjectResponse.ListBucketResult.Contents.forEach((element) => {
        if (element.Size._text > 0) {
          var path = element.Key._text;
          var [name, extension] = path.split("/").at(-1).split(".");
          if (extension === "md") {
            data[path] = { url: S3URL + path, name: name, description: "" };
          }
        }
      });

      return data;
    },
    refetchOnWindowFocus: false,
    enabled: true, // disable this query from automatically running
    onSuccess: (data) => {
      setEndpoints(data);
      setCurrentMDPath("public/Welcome.md");
    },
    onError: (error) => console.log(`Error! ${error}`),
  });

  const [content, setContent] = useState("## Loading ... ");
  const [currentMDPath, setCurrentMDPath] = useState("");

  return (
    <div className="container-fluid">
      <Header />
      <div className="row mx-1">
        <APISelector
          endpoints={endpoints}
          setContent={setContent}
          currentMDPath={currentMDPath}
          setCurrentMDPath={setCurrentMDPath}
        />
        <Renderer content={content} setMDPath={setCurrentMDPath} />
      </div>
    </div>
  );
};
export default MainContent;
