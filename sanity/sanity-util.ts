import { createClient, groq } from "next-sanity";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_APIVERSION;

export const getProjects = async () => {
  const client = createClient({
    projectId: projectId,
    dataset: dataset,
    apiVersion: apiVersion,
  });
  return client.fetch(groq`*[_type=="project"]{
      content,
      "image":image.asset->url
    }`);
};
