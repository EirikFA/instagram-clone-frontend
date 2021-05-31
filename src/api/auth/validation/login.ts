import { LoginMutationVariables } from "@generated/graphql";
import { object, SchemaOf, string } from "yup";

const loginArgsSchema: SchemaOf<LoginMutationVariables> = object().shape({
  identifier: string().required().label("Identifier"),
  password: string().required().label("Password")
});

export default loginArgsSchema;
