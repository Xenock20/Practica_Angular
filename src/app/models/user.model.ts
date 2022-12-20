/* eslint-disable @typescript-eslint/no-empty-interface */
export interface User{
  email:	string
  id:	string
  password:	string
  name: string
}

export interface CreateUserDTO extends Omit<User, 'id'>{}
