import apiClient from './client';
import {
  CreateUserRequest,
  User,
} from './types';

// Sign up
export const createUser = async (data: CreateUserRequest): Promise<User> => {
  const response = await apiClient.post<User>('/api/v1/user', data);
  return response.data;
};

// 아이디 중복 확인
export const checkUserIdDuplicate = async (userId: string): Promise<{ is_available: boolean; message: string }> => {
  
  const response = await apiClient.get(`/api/v1/user/check-duplicate?user_id=${userId}`);
  return response.data;
};