import { type } from "os";
import { SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: "project",
      type: "document",
      title: "moga charity project",
      fields: [
        {
          name: "content",
          title: "home content",
          type: "object",
          fields: [
            { name: "headerbold1", type: "string", title: "header bold first" },
            {
              name: "headerbold2",
              type: "string",
              title: "header bold second",
            },
            { name: "headerthin", type: "string", title: "header thin" },
            { name: "body", type: "string", title: "body" },
          ],
        },
        {
          name: "image",
          type: "image",
          title: "home Image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt", type: "string" }],
        },
      ],
    },
  ],
};
