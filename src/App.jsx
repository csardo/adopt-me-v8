import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route } from "react-router";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
    return (
      <StrictMode>
            <BrowserRouter>
                <header>
                    <Link to="/">Adopt Me!</Link>
                </header>
                <Routes>
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/" element={<SearchParams />} />
                </Routes>
            </BrowserRouter>
      </StrictMode>
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
