
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    redirects() {
      return [
        {
          source: '/',
          destination: '/home', 
          permanent: true, 
        },
      ];
    },
  };
  
  export default nextConfig;
  
