import React from 'react';
import ReturnButton from '../components/ReturnButton';
import Loading from '../components/Loading';
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
    // Extract ID from URL parameter
    const { id } = useParams<{ id: string }>();
  
    const validId = id || "1"; 
  
    const { data, isError, error, isLoading } = useQuery(['user', validId], () => fetchUserById(validId), {
      enabled: !!id
    });
  
    if (!id) {
      return <div>Invalid User ID</div>;
    }
  
    if (isLoading) return <Loading />;
    if (isError || !data) return <div>Error: {error ? (error as any).message : 'Unknown error'}</div>;

    return (
        <div className='userpage-container'>
            <div className='usercard-container'>
                <img src={data.data.avatar} alt={`${data.data.first_name} ${data.data.last_name}`} />
                <h3>{`${data.data.first_name} ${data.data.last_name}`}</h3>
                <p>{data.data.email}</p>
                <p>ID: {data.data.id}</p>
            </div>
            <ReturnButton />
        </div>
    );
}

export default UserDetailsPage;