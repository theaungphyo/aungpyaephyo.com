export const runtime = 'edge';
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title');
  const font = fetch(new URL('../mono.ttf', import.meta.url)).then((res) =>
    res.arrayBuffer()
  );
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '100',
          justifyContent: 'flex-start',
          backgroundImage: 'url(http://localhost:3000/og-bg.png)',
        }}
      >
        <p
          style={{
            display: 'flex',
            fontSize: 100,
            fontFamily: 'Jetbrains Mono',
            letterSpacing: '-0.05em',
            fontWeight: '7000',
            fontStyle: 'normal',
            color: 'black',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap',
            textTransform: 'capitalize',
          }}
        >
          {postTitle}
        </p>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Jetbrains Mono',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );
}
