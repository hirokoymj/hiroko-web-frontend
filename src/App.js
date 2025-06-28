import { ThemeProvider } from 'styles/ThemeProvider';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider as ReduxProvider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from 'contexts/authContext';

import tabReducer from './redux/techTabSlice';
import themeReducer from './redux/themeSlice';
import todoReducer from './redux/todoSlice';
import { router } from 'routes/router';

const store = configureStore({
  reducer: {
    tab: tabReducer,
    theme: themeReducer,
    todos: todoReducer,
  },
});

const client = new ApolloClient({
  uri: 'https://hiroko-web-backend-new-08d39ee2590b.herokuapp.com/',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <AuthProvider>
          <ThemeProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </AuthProvider>
      </ReduxProvider>
    </ApolloProvider>
  );
};

export default App;
