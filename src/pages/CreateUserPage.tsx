import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
      // Check if the email already exists
      const emailAlreadyExists = await checkEmailExists(data.email);
      if (emailAlreadyExists) {
        toast.error('Email already exists.');
        return;
      }

      // Create the user
      const userCreated = await createUser(data);
      if (userCreated) {
        toast.success('User created successfully! ID: ' + userCreated.id);
        navigate('/');
      }
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const checkEmailExists = async (email: string) => {
    const usersResponse = await fetch('https://reqres.in/api/users?page=1');
    if (!usersResponse.ok) {
      throw new Error('Error fetching user list');
    }
    const usersData = await usersResponse.json();
    return usersData.data.some((user: any) => user.email === email);
  };

  const createUser = async (data: FormData) => {
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
    return response.json();
  };

  // This is a workaround; the optimal solution would be to use an API or backend function 
  // that allows checking within the email list, but the provided API does not have this capability.

  return (
    <div className='createuserspage-container'>
      <form id="createUserForm" onSubmit={handleSubmit(onSubmit)} className='form-container'>
        <div className='label-container'>
          <label>First Name:</label>
          <input {...register("first_name", { required: "This field is required." })} />
          {errors.first_name && <span>{errors.first_name.message}</span>}
        </div>
        <div className='label-container'>
          <label>Last Name:</label>
          <input {...register("last_name", { required: "This field is required." })} />
          {errors.last_name && <span>{errors.last_name.message}</span>}
        </div>
        <div className='label-container'>
          <label>Email:</label>
          <input {...register("email", { required: "This field is required.", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid email." } })} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
      </form>
      <button type="submit" form="createUserForm">Create user</button>
    </div>
  );
}

export default CreateUserPage;