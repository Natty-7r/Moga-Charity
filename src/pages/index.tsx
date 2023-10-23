import { Hero, HowItWork } from "@/components/Home";

import { getProjects } from "../../sanity/sanity-util";

const Home = (props: any) => {
  return (
    <>
      <Hero project={props.project} />
      <HowItWork />
    </>
  );
};

export async function getStaticProps() {
  const project = await getProjects();
  return {
    props: {
      project: project[0],
    },
  };
}
export default Home;
