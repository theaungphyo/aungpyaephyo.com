import { ImageResponse } from 'next/og';
import { appConfig } from '../../app.config';

export const runtime = 'edge';

// Image metadata
export const alt = `${appConfig.name}'s Opengraph Image`;
export const size = {
  width: 800,
  height: 400,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          fontWeight: 600,
          textAlign: 'left',
          padding: 70,
          color: 'red',
          backgroundImage: 'linear-gradient(to right, #334d50, #cbcaa5)',
          height: '100%',
          width: '100%',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${appConfig.url}/og-logo.png`}
          alt='opengraph logo'
          style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
