export interface User {
  id?: number;
  username?: string;
  password?: string;
  token?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Word {
  id?: number;
  word?: string;
}
