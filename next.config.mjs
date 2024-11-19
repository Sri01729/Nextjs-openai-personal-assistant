/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY, // Expose environment variable
    },
};

// Debugging: Log the environment variable during build
console.log("OPENAI_API_KEY in build:", process.env.OPENAI_API_KEY);

export default nextConfig;
