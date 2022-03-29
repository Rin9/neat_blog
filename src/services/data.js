import { gql, request } from "graphql-request";

const graphqlAPI = process.env.GRAPHCMS_API;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      posts {
        slug
        title
        createdAt
        content {
          markdown
        }
        id
        publishedAt
        excerpt
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result;
};
