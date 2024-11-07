import { useForm } from "react-hook-form";
import React from "react";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import registerImg from "../../assets/img/register-img.svg"; // Your image for registration page

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [activeTab, setActiveTab] = React.useState("Rider"); // For tab switching between Rider and Driver
  const navigate = useNavigate(); // For redirection after successful registration

  const onSubmit = async (data) => {
    console.log("Form submitted:", data);

    // Simulate registration logic (replace with real API call)
    const isRegistered = await registerUser(data); // Replace with actual API call

    if (isRegistered) {
      // Redirect to rider dashboard after successful registration
      navigate('/rider-dashboard'); // Redirect to the desired route (adjust accordingly)
    } else {
      // Show an error if registration fails
      alert('Registration failed. Please try again.');
    }
  };

  // Simulate registration API call (replace with real backend call)
  const registerUser = (data) => {
    // Simulate an API call. Replace this with actual backend API call logic.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true); // Assume the user is registered successfully
      }, 1000); // Simulate a delay
    });
  };

  // Watch the checkbox to determine if it's checked
  const termsAccepted = watch("terms");

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 p-4">
        <img
          src={registerImg} // Replace with your image URL
          alt="Registration"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="md:w-1/2 p-4">
        <div className="border border-gray-300 p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setActiveTab("Rider")}
              className={`px-4 py-2 mx-2 rounded ${activeTab === "Rider" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
            >
              Rider
            </button>
            <button
              onClick={() => setActiveTab("Driver")}
              className={`px-4 py-2 mx-2 rounded ${activeTab === "Driver" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
            >
              Driver
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
            {/* Common Fields */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" {...register("name", { required: true })} className="w-full p-2 border border-gray-300 rounded" />
              {errors.name && <span className="text-red-500 text-xs">Name is required</span>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" {...register("email", { required: true })} className="w-full p-2 border border-gray-300 rounded" />
              {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input type="password" {...register("password", { required: true })} className="w-full p-2 border border-gray-300 rounded" />
              {errors.password && <span className="text-red-500 text-xs">Password is required</span>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input type="text" {...register("phoneNumber", { required: true })} className="w-full p-2 border border-gray-300 rounded" />
              {errors.phoneNumber && <span className="text-red-500 text-xs">Phone number is required</span>}
            </div>

            {/* Rider or Driver Fields Based on Tab */}
            {activeTab === "Driver" && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">License Plate</label>
                  <input type="text" {...register("vehicleInfo.licensePlate")} className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Vehicle Model</label>
                  <input type="text" {...register("vehicleInfo.model")} className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Vehicle Color</label>
                  <input type="text" {...register("vehicleInfo.color")} className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Ghana Card Number</label>
                  <input type="text" {...register("vehicleInfo.ghanaCardNumber")} className="w-full p-2 border border-gray-300 rounded" />
                </div>
              </>
            )}

            {/* Terms and Conditions Checkbox */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                {...register("terms", { required: true })} // Make it required
                className="mr-2"
              />
              <label className="text-sm">
                I agree to the{" "}
                <Link to="/terms" className="text-blue-600 hover:underline">Terms and Conditions</Link> and{" "}
                <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
              </label>
            </div>
            {errors.terms && <span className="text-red-500 text-xs">You must accept the terms and conditions</span>}

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded mt-4" disabled={!termsAccepted}>
              Register
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
