
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    redirects() {
      return [
        {
          source: '/',
          destination: '/', 
          permanent: true, 
        },
      ];
    },
  };
  
  export default nextConfig;
  