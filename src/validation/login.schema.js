import * as v from "valibot";
import { valibotResolver } from "@hookform/resolvers/valibot";

export const loginSchema = v.object({
  email: v.pipe(v.string(), v.email()),
  password: v.string(),
});

export const loginSchemaResolver = valibotResolver(loginSchema);
