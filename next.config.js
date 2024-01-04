/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname:"image.pexels.com"
            },
        ],

        
    },
};

module.exports = nextConfig
