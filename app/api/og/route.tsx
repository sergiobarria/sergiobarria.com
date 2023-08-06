import { ImageResponse, NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    const { searchParams } = req.nextUrl;
    const title = searchParams.get('title') || 'Open Graph Image';

    const element = (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                backgroundImage: 'url(https://sergiobarria.com/og-bg.png)',
            }}
        >
            <div
                style={{
                    marginLeft: 190,
                    marginRight: 190,
                    display: 'flex',
                    fontSize: 130,
                    letterSpacing: '-0.05em',
                    fontStyle: 'normal',
                    color: '#fff',
                    lineHeight: '120px',
                    whiteSpace: 'pre-wrap',
                }}
            >
                {title}
            </div>
        </div>
    );

    return new ImageResponse(element, {
        width: 1920,
        height: 1080,
    });
}
