/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Se comenta para usar el modo dinámico (SSR, API Routes, etc.)
  // trailingSlash: true, // Ya no es necesario para el enrutamiento dinámico
  // distDir: 'dist', // El runtime de Netlify usa el directorio `.next` por defecto
  // images: { // Puedes quitar `unoptimized: true` para usar la optimización de imágenes de Netlify
  //   unoptimized: true
  // }
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: '**',
  //     },
  //   ],
  // },
  
};

export default nextConfig;
