export interface CreateUserDto {
  username: string;
  email: string;
  password: string;
}

export interface CreateUserResponseDto {
  id: number;
  username: string;
  email: string;
}
