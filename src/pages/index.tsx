import type { GetStaticProps, GetStaticPropsContext } from "next";

function Home() {
  return <h1>A</h1>;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 80 * 8,
  };
};

export default Home;
