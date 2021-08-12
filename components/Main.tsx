import { gql, useQuery } from "@apollo/client";

const SEARCH = gql`
  {
    search(location: "san francisco") {
      total
    }
  }
`;

const Main = () => {
  const { data } = useQuery(SEARCH);
  console.log(data);
  return (
    <>
      <h1>Restaurant Recommender</h1>
      <button>find me a restaurant!</button>
    </>
  );
};

export default Main;
