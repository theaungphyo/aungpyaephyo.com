export const runtime = 'edge';
import { ImageResponse } from 'next/og';

// Image metadata
export const alt = "Aung Pyae Phyo's Opengraph Image";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'whitesmoke',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='https://www.aungpyaephyo.com/avatar.png'
          alt={alt}
          height={'100%'}
          width={'100%'}
          style={{
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
