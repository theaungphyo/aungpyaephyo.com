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
          justifyContent: 'center',
          backgroundImage: 'url(https://aungpyaephyo.vercel.app/og-bg.png)',
        }}
      >
        <div
          style={{
            marginLeft: 150,
            marginRight: 150,
            display: 'flex',
            fontSize: 130,
            fontFamily: 'Jetbrains Mono',
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'black',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap',
            textTransform: 'capitalize',
          }}
        >
          {postTitle}
        </div>
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
