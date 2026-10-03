import { ImageResponse } from 'next/og';

export const alt = 'Raymond Mukonda project portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: '#0b1220',
          color: '#f8fafc',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 330,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#3657f5',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 150,
              height: 150,
              alignItems: 'center',
              justifyContent: 'center',
              border: '3px solid rgba(255,255,255,0.75)',
              borderRadius: 24,
              fontSize: 58,
              fontWeight: 700,
            }}
          >
            RM
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '64px 72px',
          }}
        >
          <div
            style={{
              display: 'flex',
              color: '#a5b4fc',
              fontSize: 22,
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            Project Portfolio
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 20,
              fontSize: 58,
              fontWeight: 700,
            }}
          >
            Raymond Mukonda
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 22,
              color: '#cbd5e1',
              fontSize: 27,
            }}
          >
            Web, software, and open-source work
          </div>
        </div>
      </div>
    ),
    size,
  );
}