export interface InputsTypeRegister {
  username: string;
  password: string;
  email: string;
}

export interface InputsTypeLogin {
  password: string;
  email: string;
}

export type InputsType = InputsTypeRegister | InputsTypeLogin;

export type nameInputsType = "username" | "password" | "email";
