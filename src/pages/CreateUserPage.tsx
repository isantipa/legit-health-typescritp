import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
}

function CreateUserPage() {
  // Initialize form handling functions and states with react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  // Hook for programmatically navigating
  const navigate = useNavigate();

  // Function to execute when form is submitted
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
      toast.success('User created successfully! ID: ' + result.id);

      navigate('/'); 

    } catch (error) {
      toast.error((error as Error).message);
    }
  };

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