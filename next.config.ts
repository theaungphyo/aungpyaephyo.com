import createMDX from '@next/mdx';
import { NextConfig } from 'next';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
    viewTransition: true,
  },
} satisfies NextConfig;

const withMDX = createMDX({
  // Add Markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
