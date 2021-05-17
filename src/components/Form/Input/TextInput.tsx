import {
  IonInput, IonLabel, IonText
} from "@ionic/react";
import { FieldHookConfig, useField } from "formik";
import { ComponentProps, FC, Fragment } from "react";

export interface CustomTextInputProps {
  label?: string;
  showError?: boolean;
}

export type TextInputProps =
  CustomTextInputProps & ComponentProps<typeof IonInput> & FieldHookConfig<string>;

const TextInput: FC<TextInputProps> = ({
  label, showError = true, ...props
}) => {
  const [{ onChange, onBlur, ...field }, { touched, error }] = useField(props);

  return (
    <Fragment>
      {label && <IonLabel>{label}</IonLabel>}

      <IonInput {...field} {...props} onIonChange={onChange} onIonBlur={onBlur} />

      {showError && touched && error ? <IonText color="danger"><p>{error}</p></IonText> : null}
    </Fragment>
  );
};

export default TextInput;
