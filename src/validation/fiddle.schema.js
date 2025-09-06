import * as v from "valibot";
import { valibotResolver } from "@hookform/resolvers/valibot";

export const fiddleSchema = v.object({
  name: v.string(),
  content: v.any(),
});

export const fiddleActionSchema = v.object({
  ...fiddleSchema.entries,
  id: v.string(),
});

export const fiddleResolver = valibotResolver(fiddleSchema);

export const getDefaultValues = (fiddle) =>
  fiddle
    ? { name: fiddle.name, content: fiddle.content }
    : {
        name: "",
        content: [
          {
            type: "paragraph",
            children: [{ text: "" }],
          },
        ],
      };
