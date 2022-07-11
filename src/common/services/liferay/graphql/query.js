import { gql } from "@apollo/client";

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
