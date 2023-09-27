import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useUsers from '../hooks/useUsers';
import Pagination from '../components/Pagination';
import styled from 'styled-components';

const UsersListContainer = styled.div`
  margin: 0 1.5rem;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const UserContainer = styled.div`
  border: solid black 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20rem;
  margin: 1rem;
  padding: 0.5rem;
`;

const UsersImg = styled.img`
  width: 100px;
  height: 100px;
  border: solid 2px black;
  border-radius: 50%;
  object-fit: cover;
  display: flex;
  justify-content: center;
`;

type User = {
    id: number;
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
};

type UsersData = {
  users: User[];
  total_pages: number;
};

type UsersResponse = {
  data: UsersData;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
};

function UserListPage() {
  const { pageNumber } = useParams<{ pageNumber?: string }>();
  const [page, setPage] = useState<number>(pageNumber ? parseInt(pageNumber) : 1);
  
  const { data, isError, error, isLoading } = useUsers(page);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error: {error ? (error as any).message : 'Unknown error'}</div>;
  }

  return (
    <div>
      <UsersListContainer>
        {data.data.map(user => (
          <UserContainer key={user.id}>
            <Link to={`/userpage/${user.id}`} state={{ pageNumber: page }} 
            style={{ textDecoration: 'none', color: 'inherit' }}>
              <UsersImg src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
              <p>{`${user.first_name} ${user.last_name}`}</p>
              <p>{user.email}</p>
            </Link>
          </UserContainer>
      ))}
      </UsersListContainer>
      <Pagination 
        currentPage={page} 
        changePage={setPage} 
        totalPages={data.total_pages} 
      />
    </div>
  );
}

export default UserListPage;