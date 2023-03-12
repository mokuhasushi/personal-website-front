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

// Router
import { Routes, Route, BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
