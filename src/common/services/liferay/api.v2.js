import { gql } from "@apollo/client";
import { print } from "graphql";
const axios = require("axios").default;

const client = axios.create({
  baseURL: "https://portalmwa.hubdigitalcom.com",
  headers: {
    "Content-Type": "text/plain;charset=UTF-8",
  },
});

export const GET_TODO_QUERY = gql`
  query getTodos {
    c {
      todos {
        items {
          status
        }
      }
    }
  }
`;

export const getTodos = () => {
  return client.post("/o/graphql", {
    query: print(GET_TODO_QUERY),
    variables: null,
  });
};
