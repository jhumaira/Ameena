import { InlineWidget, PopupButton } from "react-calendly";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validEmail = "admin@sakinah.com";
    const validPassword = "1234";

    if (email === validEmail && password === validPassword) {
      login({ email });
      navigate('/home');
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <motion.h1
          className="text-3xl font-serif text-brand-forest text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Sakinah Academy
        </motion.h1>

        <h2 className="text-xl text-center text-gray-700 mb-4">
          {isRegistering ? 'Register as a New Member' : 'Login to Your Account'}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-brand-forest text-white font-semibold rounded-md hover:bg-brand-dark transition"
          >
            {isRegistering ? 'Register' : 'Login'}
          </button>
        </form>

        {error && (
          <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
        )}

        <div className="text-center mt-4">
          <button
            type="button"
            className="text-sm text-brand-forest font-medium hover:underline focus:outline-none"
            onClick={() => {
              setIsRegistering(!isRegistering);
              setError('');
            }}
          >
            {isRegistering
              ? 'Already have an account? Login'
              : 'New here? Register now'}
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">New? Schedule a free consultation</p>
          <PopupButton
            url="https://calendly.com/bintawesome/60-minute-meeting-clone"
            rootElement={document.getElementById("root")!}
            text="Book Appointment"
            className="inline-block px-6 py-2 bg-brand-rose text-white font-semibold rounded-md hover:bg-pink-700 transition"
          />

        </div>
      </div>
    </div>
  );
}
