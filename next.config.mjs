/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'jmruu0gcgkmapof9.public.blob.vercel-storage.com'
            }
        ]
    }
};

export default nextConfig;
