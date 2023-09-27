import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
}

function CreateUserPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Error creating user');
      }

      const result = await response.json();
      alert('User created successfully! ID: ' + result.id);

      navigate('/'); 

    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <input {...register("first_name", { required: "This field is required." })} />
          {errors.first_name && <span>{errors.first_name.message}</span>}
        </div>
        <div>
          <label>Last Name:</label>
          <input {...register("last_name", { required: "This field is required." })} />
          {errors.last_name && <span>{errors.last_name.message}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input {...register("email", { required: "This field is required.", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid email." } })} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <button type="submit">Create user</button>
      </form>
    </div>
  );
}

export default CreateUserPage;