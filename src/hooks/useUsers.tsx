import { useQuery } from 'react-query';

interface UsersResponse {
    data: {
        id: number;
        avatar: string;
        first_name: string;
        last_name: string;
        email: string;
    }[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
}

const fetchUsers = async (page: number = 1): Promise<UsersResponse> => {
  const response = await fetch(`https://reqres.in/api/users?page=${page}`);
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

const useUsers = (page: number) => {
  return useQuery<UsersResponse>(['users', page], () => fetchUsers(page));
};

export default useUsers;