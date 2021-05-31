import { RegisterInput } from "generated/graphql";
import { object, SchemaOf, string } from "yup";

const registerInputSchema: SchemaOf<RegisterInput> = object().shape({
  email: string().required().email().label("Email"),
  username: string().required().label("Username"),
  password: string().required().label("Password")
});

export default registerInputSchema;
