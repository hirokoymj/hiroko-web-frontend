import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "Styles/ThemeProvider";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// import { ReduxProvider } from "./Redux/ReduxProvider";
import { DashboardController } from "Components/DashboardController";

const client = new ApolloClient({
  uri: "https://hiroko-web-backend-new-08d39ee2590b.herokuapp.com/",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <BrowserRouter>
          <DashboardController />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
