import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useEffect } from "react";
import Landing from "./pages/Landing";

function App() {
  useEffect(() => {
    document.title = "David Ortiz: Web Developer";
  }, []);
  //Construct the main GraphQL API endpoint
  const httpLink = createHttpLink({
    uri: "graphql",
  });

  //request middleware that will attach the JWT token to every request as an 'authoriation' header
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("id_token");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <div className="App">
            <Route path="/" exact component={Landing}></Route>
          </div>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
