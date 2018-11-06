import React from 'react';

import Wrapper from './Wrapper';
import SocialLink from './SocialLink';

function Social({ website, twitter, github, linkedin }) {
  return (
    <Wrapper>
      {website && (
        <SocialLink href={website} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Website
        </SocialLink>
      )}
      {twitter && (
        <SocialLink href={twitter} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
          Twitter
        </SocialLink>
      )}
      {github && (
        <SocialLink href={github} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          Github
        </SocialLink>
      )}
      {linkedin && (
        <SocialLink href={linkedin} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          LinkedIn
        </SocialLink>
      )}
      {aboutme && (
       <SocialLink href={aboutme} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1460 6115 c-14 -8 -32 -14 -41 -15 -29 0 -96 -39 -102 -59 -2 -11
-15 -21 -28 -23 -14 -2 -25 -11 -27 -23 -2 -11 -14 -31 -27 -45 -32 -36 -53
-87 -58 -145 -2 -27 -9 -65 -15 -82 -7 -18 -17 -48 -23 -65 -7 -18 -15 -62
-19 -98 -5 -57 -20 -122 -38 -170 -14 -37 -34 -130 -41 -190 -4 -36 -13 -75
-19 -87 -7 -12 -12 -30 -12 -41 0 -11 -7 -33 -15 -48 -8 -16 -15 -48 -15 -72
0 -39 -22 -142 -40 -187 -14 -33 -32 -116 -40 -180 -4 -33 -13 -76 -20 -95
-27 -79 -33 -97 -42 -140 -5 -25 -14 -74 -19 -110 -6 -36 -14 -74 -19 -85 -5
-11 -12 -39 -15 -62 -4 -24 -11 -45 -16 -49 -5 -3 -9 -24 -9 -46 0 -23 -7 -66
-16 -97 -18 -64 -38 -138 -53 -196 -6 -22 -13 -66 -16 -97 -4 -32 -11 -60 -16
-63 -5 -4 -9 -21 -9 -38 0 -18 -7 -45 -15 -61 -8 -15 -15 -45 -15 -66 0 -21
-7 -57 -15 -80 -8 -23 -15 -57 -15 -75 0 -18 -6 -38 -14 -44 -8 -7 -16 -28
-20 -49 -24 -164 -51 -289 -66 -307 -4 -5 -10 -35 -13 -65 -6 -66 -26 -158
-38 -183 -11 -20 -23 -75 -44 -187 -17 -94 -33 -159 -45 -185 -5 -11 -11 -40
-13 -65 -4 -46 -20 -120 -39 -175 -21 -63 -30 -103 -43 -185 -14 -93 -32 -167
-43 -184 -4 -6 -12 -42 -19 -81 -18 -106 -29 -157 -42 -188 -37 -94 13 -227
104 -275 27 -14 296 -15 2705 -16 l2675 -1 45 27 c25 14 63 42 86 62 44 38
114 146 114 176 0 24 27 142 46 200 8 25 23 90 33 145 10 55 26 125 35 155 9
30 20 80 25 110 5 30 16 84 25 120 8 36 24 106 36 155 26 112 56 233 87 350
12 49 23 102 23 117 0 16 13 74 29 131 16 56 36 140 45 187 9 47 25 117 35
155 11 39 22 93 26 120 4 28 16 82 27 120 20 70 23 84 53 225 8 41 22 100 30
130 9 30 22 91 30 135 7 44 21 107 30 140 9 33 27 113 41 178 13 66 27 124 31
130 7 11 15 49 38 172 8 44 26 123 40 174 14 52 25 104 25 115 0 12 9 55 21
96 32 121 39 151 53 230 8 41 21 102 30 135 10 33 26 107 37 165 11 58 27 128
35 155 27 85 32 108 39 165 4 30 14 77 22 103 19 60 13 162 -13 203 -28 45
-66 84 -83 84 -9 0 -29 7 -45 15 -42 22 -5267 22 -5306 0z m1104 -506 c55 -12
65 -19 150 -103 117 -116 256 -264 256 -272 0 -5 52 -61 217 -229 34 -35 66
-73 73 -84 6 -12 17 -21 25 -21 7 0 23 -15 34 -34 12 -19 33 -41 46 -50 14 -9
25 -23 25 -31 0 -9 11 -20 25 -25 14 -5 25 -14 25 -19 0 -6 30 -41 68 -78 37
-37 128 -133 201 -213 74 -80 160 -173 192 -206 31 -34 128 -137 215 -230 87
-93 168 -179 181 -191 13 -12 23 -31 23 -42 0 -11 5 -23 10 -26 6 -3 10 -43
10 -88 0 -145 -40 -217 -180 -320 -41 -30 -89 -67 -106 -81 -18 -14 -36 -26
-41 -26 -5 0 -27 -15 -49 -33 -21 -18 -75 -59 -120 -90 -44 -31 -87 -63 -94
-72 -7 -8 -17 -15 -23 -15 -6 0 -36 -19 -66 -43 -56 -43 -98 -73 -130 -92 -9
-5 -35 -25 -58 -42 -22 -18 -44 -33 -48 -33 -4 0 -25 -16 -46 -35 -22 -19 -44
-35 -49 -35 -6 0 -34 -19 -63 -41 -28 -23 -62 -45 -74 -50 -13 -5 -23 -15 -23
-23 0 -8 -21 -26 -47 -41 -27 -15 -59 -38 -73 -50 -14 -13 -35 -26 -47 -29
-11 -4 -28 -18 -37 -31 -9 -14 -22 -25 -29 -25 -6 0 -34 -18 -62 -40 -27 -22
-54 -40 -59 -40 -5 0 -26 -15 -47 -32 -64 -56 -133 -105 -157 -112 -12 -4 -27
-16 -32 -26 -5 -10 -30 -29 -55 -41 -25 -12 -52 -33 -60 -46 -9 -13 -25 -23
-38 -23 -14 0 -32 -12 -45 -30 -13 -16 -28 -30 -34 -30 -6 0 -30 -16 -53 -35
-23 -19 -54 -40 -69 -46 -14 -7 -33 -23 -41 -36 -9 -12 -22 -23 -29 -23 -8 0
-36 -18 -62 -40 -27 -22 -53 -40 -59 -40 -6 0 -24 -14 -40 -30 -16 -16 -34
-30 -40 -30 -7 0 -32 -17 -56 -38 -48 -40 -64 -51 -124 -83 -57 -31 -204 -32
-238 -2 -12 11 -34 27 -48 34 -30 16 -99 102 -99 123 0 8 -4 17 -8 20 -5 3
-15 30 -22 61 -14 60 -5 132 27 197 18 37 100 118 120 118 7 0 20 11 29 25 9
14 23 25 31 25 8 0 39 20 67 45 29 25 60 45 68 45 9 0 23 11 32 24 8 14 26 28
38 32 13 3 39 21 59 38 20 17 75 58 122 91 48 32 89 65 91 72 3 7 14 13 24 13
10 0 29 11 42 25 14 15 48 41 76 60 28 19 54 41 58 50 3 8 13 15 21 15 9 0 38
18 64 40 26 22 51 40 55 40 4 0 28 18 53 40 25 22 51 40 58 40 6 0 24 14 40
30 16 17 34 30 39 30 6 1 27 14 46 30 19 17 38 30 43 30 5 0 30 18 56 40 26
22 52 40 57 40 6 0 23 14 39 30 16 17 34 30 39 30 11 1 174 118 369 267 23 18
47 33 53 33 6 0 18 7 25 16 17 20 154 124 189 142 43 23 71 55 68 78 -2 12
-90 112 -198 225 -107 111 -208 218 -225 237 -16 18 -60 64 -97 102 -38 38
-68 73 -68 77 0 4 -34 40 -75 80 -41 40 -75 74 -75 77 0 3 -32 38 -70 78 -293
303 -505 530 -511 547 -4 9 -19 27 -33 40 -25 24 -26 29 -26 137 0 109 1 114
28 146 15 18 33 46 40 61 6 15 20 30 29 34 10 3 28 15 41 27 23 21 144 56 172
50 8 -1 42 -8 74 -15z m2314 -3399 c23 -16 46 -30 51 -30 12 0 80 -95 97 -136
23 -54 18 -122 -11 -160 -14 -18 -25 -35 -25 -39 0 -16 -65 -85 -80 -85 -10 0
-23 -7 -30 -15 -7 -8 -21 -15 -32 -15 -11 0 -28 -5 -39 -10 -26 -14 -1339 -14
-1353 0 -6 6 -20 10 -33 10 -33 0 -80 32 -123 84 -51 61 -63 103 -58 191 4 64
9 77 41 120 20 26 60 63 89 81 l52 34 707 0 706 0 41 -30z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          AboutMe
        </SocialLink>
      )}
    </Wrapper>
  );
}

export default Social;
