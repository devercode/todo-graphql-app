import React from "react";
import ReactDOM from "react-dom";

import HelloBar from "./routes/hello-bar/pages/HelloBar";
import HelloFoo from "./routes/hello-foo/pages/HelloFoo";
import HelloWorld from "./routes/hello-world/pages/HelloWorld";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  gql,
} from "@apollo/client";
import "./common/styles/index.scss";

const App = ({ route }) => {
  if (route === "hello-bar") {
    return <HelloBar />;
  }

  if (route === "hello-foo") {
    return <HelloFoo />;
  }

  return <HelloWorld />;
};

const AppWithApollo = (props) => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "https://portalmwa.hubdigitalcom.com/o/graphql",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
      },
    }),
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <App {...props} />
    </ApolloProvider>
  );
};

class WebComponent extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<AppWithApollo route={this.getAttribute("route")} />, this);
  }
}

const ELEMENT_ID = "liferay-dev24";

if (!customElements.get(ELEMENT_ID)) {
  customElements.define(ELEMENT_ID, WebComponent);
}
