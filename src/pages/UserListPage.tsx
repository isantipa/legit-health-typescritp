import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useUsers from '../hooks/useUsers';
import Pagination from '../components/Pagination';

interface User {
    id: number;
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
}

const UserListPage: React.FC = () => {
  const { pageNumber = '1' } = useParams();
  const [page, setPage] = useState<number>(Number(pageNumber));
  const { data, isError, error, isLoading } = useUsers(page);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error: {error ? (error as any).message : 'Unknown error'}</div>;

  return (
    <div>
      <div className='users-list'>
        {data.data.map((user: User) => (
          <Link to={`/userpage/${user.id}`} state={{ pageNumber: page }} className='users-container' key={user.id}>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <div className='info-users-container'>
              <p>{`${user.first_name} ${user.last_name}`}</p>
              <p>{user.email}</p>
            </div>
          </Link>
        ))}
      </div>
      <Pagination 
        currentPage={page} 
        changePage={setPage} 
        totalPages={data.total_pages} 
      />
    </div>
  );
}

export default UserListPage;