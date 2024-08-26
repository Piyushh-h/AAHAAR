import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    userName: '',
    password: '',
    confirmPassword: '',
    country: '',
    fullAddress: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const { name, email, mobileNo, userName, password, confirmPassword, country, fullAddress } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/auth/signup', formData);
      console.log(res.data);
      setSuccessMessage('Account successfully created');
      setTimeout(() => {
        navigate('/login'); // Redirect after 3 seconds
      }, 3000);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-3/5 mr-16">
        <img
          className="h-auto w-auto"
          src="./Rectangle 1.png"
          alt="loginpage"
        />
      </div>

      <div className="w-1/2">
        <div className="flex justify-center items-center mb-8">
          <img
            className="mb-[100px] mt-[50px] w-24 h-24 mr-4"
            src="./Logo.png"
            alt="logo"
          />
          <div className='mb-[100px] mt-[50px]'>
            <h1 className="font-[800] font-['Poppins'] text-[50px] text-4xl mb-2">Aahaar</h1>
          </div>
        </div>
        <form onSubmit={onSubmit} className="space-y-4 ml-[120px]">
          {successMessage && (
            <p className="text-green-500">{successMessage}</p>
          )}
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Name"
            className="w-5/6 bg-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
            className="w-5/6 bg-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="mobileNo"
            value={mobileNo}
            onChange={onChange}
            placeholder="Mobile No"
            className="w-5/6 bg-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={onChange}
            placeholder="Username"
            className="w-5/6 bg-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            className="w-5/6 bg-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            placeholder="Confirm Password"
            className="w-5/6 bg-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="country"
            value={country}
            onChange={onChange}
            placeholder="Country"
            className="w-5/6 bg-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="fullAddress"
            value={fullAddress}
            onChange={onChange}
            placeholder="Full Address"
            className="w-5/6 mb-[100px] bg-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-5/6 bg-green-900 text-white font-bold py-3 rounded-lg shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Signup
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-green-800 font-bold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

