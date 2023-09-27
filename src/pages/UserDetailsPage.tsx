import React from 'react';
import ReturnButton from '../components/ReturnButton';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const fetchUserById = async (id: string) => {
  const response = await fetch(`https://reqres.in/api/users/${id}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

const UserDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
  
    const validId = id || "1"; 
  
    const { data, isError, error, isLoading } = useQuery(['user', validId], () => fetchUserById(validId), {
      enabled: !!id
    });
  
    if (!id) {
      return <div>Invalid User ID</div>;
    }
  
    if (isLoading) return <div>Loading...</div>;
    if (isError || !data) return <div>Error: {error ? (error as any).message : 'Unknown error'}</div>;

    return (
        <div>
            <div>
                <img src={data.data.avatar} alt={`${data.data.first_name} ${data.data.last_name}`} />
                <p>{`${data.data.first_name} ${data.data.last_name}`}</p>
                <p>{data.data.email}</p>
                <p>ID: {data.data.id}</p>
            </div>
            <ReturnButton />
        </div>
    );
}

export default UserDetailsPage;