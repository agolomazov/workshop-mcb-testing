import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import './App.css';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

function App() {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[], AxiosError>({
    queryKey: ['users'],
    queryFn: async () => {
      const response = axiosInstance.get('/users');
      return (await response).data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!users) {
    return <div>List users is empty...</div>;
  }

  return (
    <>
      <h1>Users List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>
            Name: {user.name}
            <br />
            Email: <a href={`mailto:${user.email}`}>{user.email}</a>
            <br />
            Company: <b>{user.company.name}</b>
          </p>
        </div>
      ))}
    </>
  );
}

export default App;
