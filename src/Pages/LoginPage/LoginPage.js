import React, { useState } from 'react';
import { Eye, EyeOff, LogIn} from 'lucide-react';
import LoginImg from '../../assets/login.jpeg';
import G from '../../assets/G.jpeg';
import Loading from "../../components/Loading/Loading";
import useGoogleSignInFetcher from '../../Hooks/useGoogleSignInFetcher';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { signInWithGoogle, loading, error } = useGoogleSignInFetcher();

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);
    // // Simulate login process
    // setTimeout(() => {
    //   setLoading(false);
    //   alert('Login successful!');
    // }, 2000);
  };

    return (
    <div className="flex flex-col min-h-screen lg:flex-row">
        {/* Image section */}
        <div className="w-full h-64 lg:h-screen lg:w-1/2 relative overflow-hidden">
            <img 
                src={LoginImg} 
                alt="Login background" 
                className="absolute w-full h-full object-cover object-center"
            />
        </div>

        {/* Login Form section */}
        <div className="w-full flex-grow bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4 lg:w-1/2">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-8">Welcome Back</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                        focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="mt-1 relative">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                className="block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                            focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
                            </button>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            disabled={loading}
                        >
                            {loading ? (
                                <Loading type="spin" color="#ffffff" height={20} width={20} />
                            ) : (
                                <>Sign in</>
                            )}
                        </button>
                    </div>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button 
                            className="w-full inline-flex justify-center py-2 px-4 border
                                border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium
                                text-gray-500 hover:bg-purple-50"
                            onClick={signInWithGoogle}
                        >
                            <span className="sr-only">Sign in with Google</span>
                            <img src={G} alt="Google logo" className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default LoginPage;