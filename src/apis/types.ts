// Sign up
export interface CreateUserRequest {
  user_id: string;
  user_pw: string;
  last_name: string;
  first_name: string;
  nickname: string;
  email: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  nickname?: string;
  created_at: string;
}

// Login
export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  user: User;
}

// Refresh Token
export interface RefreshTokenResponse {
  status: string;
  message: string;
  data: {
    access_token: string;
  };
}

// API 응답 타입
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
