import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "Styles/ThemeProvider";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider as ReduxProvider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { DashboardController } from "Components/DashboardController";
import tabReducer from "./Redux/tabSlice";

const store = configureStore({
  reducer: {
    tab: tabReducer,
  },
});

const client = new ApolloClient({
  uri: "https://hiroko-web-backend-new-08d39ee2590b.herokuapp.com/",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <DashboardController />
          </BrowserRouter>
        </ThemeProvider>
      </ReduxProvider>
    </ApolloProvider>
  );
};

export default App;
