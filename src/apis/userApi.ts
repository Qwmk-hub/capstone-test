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