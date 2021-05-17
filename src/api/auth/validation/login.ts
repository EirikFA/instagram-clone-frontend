import { LoginMutationVariables } from "@generated/graphql";
import { object, SchemaOf, string } from "yup";

const loginArgsSchema: SchemaOf<LoginMutationVariables> = object().shape({
  identifier: string().required(),
  password: string().required()
});

export default loginArgsSchema;
