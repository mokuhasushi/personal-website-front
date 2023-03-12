// import logo from './logo.svg';
import "./App.css";

// Queries
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

// Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MainContent from "./Components/MainContent/MainContent";
import Contacts from "./Components/Contacts/Contacts";

const queryClient = new QueryClient();

const Route = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Route path="/">
        <MainContent />
      </Route>
      <Route path="/contacts">
        <Contacts />
      </Route>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
