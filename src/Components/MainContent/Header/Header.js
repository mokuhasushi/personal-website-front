import { useQuery } from "react-query";
import axios from "axios";

const Header = () => {
  const { isLoading, isError, data } = useQuery(
    "greeting",
    async () => {
      const { data } = await axios("https://www.greetingsapi.com/random");
      return data;
    },
    { refetchOnWindowFocus: false }
  );
  let greetingText;
  let greetingLanguage = "English";
  if (isLoading) {
    greetingText = "...";
  } else if (isError) {
    greetingText = "Welcome!";
  } else {
    greetingText = data.greeting;
    greetingLanguage = data.language;
  }
  return (
    <div className="row h-auto header align-items-stretch">
      <div className="col-12 bg-body-primary text-center my-2">
        <h2 title={`Greetings in ${greetingLanguage}`}>{greetingText}!</h2>
      </div>
      <div className="col-12 bg-body-primary text-center my-2"></div>
    </div>
  );
};

export default Header;
