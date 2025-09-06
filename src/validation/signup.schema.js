import * as v from "valibot";
import { valibotResolver } from "@hookform/resolvers/valibot";

export const signupSchema = v.object({
  email: v.string(),
  password: v.string(),
  firstName: v.string(),
  lastName: v.string(),
  role: v.union([v.literal("FREELANCER"), v.literal("EMPLOYER")]),
});

const generalStepSchema = v.pick(signupSchema, [
  "email",
  "firstName",
  "lastName",
]);
const passwordStepSchema = v.pick(signupSchema, ["password"]);

export const generalStepResolver = valibotResolver(generalStepSchema);
export const passwordStepResolver = valibotResolver(passwordStepSchema);
export const signupSchemaResolver = valibotResolver(signupSchema);

export const signupDefaultValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};
