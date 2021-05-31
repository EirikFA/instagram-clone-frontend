import {
  RequestPasswordResetMutationVariables,
  ResetPasswordMutationVariables
} from "@generated/graphql";
import { object, SchemaOf, string } from "yup";

export const requestPasswordResetSchema: SchemaOf<RequestPasswordResetMutationVariables> = object()
  .shape({
    email: string().email().required().label("Email")
  });

export const resetPasswordSchema: SchemaOf<Omit<ResetPasswordMutationVariables, "token">> = object()
  .shape({
    password: string().matches(/^(?=.*[A-Za-z])(?=.*\d)[\d\w\W]{8,}$/, {
      message: "Password must be at least 8 characters long, contain one letter and one number"
    }).required().label("Password")
  });
