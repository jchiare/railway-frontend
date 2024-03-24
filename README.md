# Railway Frontend

Display messages streamed (currently only from Discord) from a backend

## Installation

Uses NextJS as the frontend framework

- NodeJS v 18.x+
- `npm i`

## Usage

To run dev, run `npm run dev`

For production, build the production build with `npm run build` then `npm run start`

### Details

- NextJS 14
- TypeScript
- Styled with TailwindCSS
- Components largely inspired by https://tailwindui.com/components

### TODO

- [ ] Integration test?
- [ ] Don't stream messages from discord/backend to frontend, create an endpoint that fetches messages from the database (with pagination / infinite scroll etc)
