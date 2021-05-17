import { RegisterInput } from "generated/graphql";
import { object, SchemaOf, string } from "yup";

const registerInputSchema: SchemaOf<RegisterInput> = object().shape({
  email: string().required().email(),
  username: string().required(),
  password: string().required()
});

export default registerInputSchema;
