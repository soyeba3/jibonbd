# E-Commerce Website Setup

## Project Information

- **Project Name**: jibonbd
- **Framework**: Next.js 16.0.3 (Latest Version)
- **React Version**: 19.2.0
- **TypeScript**: 5.9.3

## Installed Dependencies

### Core Framework

- **Next.js**: 16.0.3 (App Router with src directory)
- **React**: 19.2.0
- **React DOM**: 19.2.0

### Styling

- **Tailwind CSS**: 4.1.17 (Latest v4)
- **@tailwindcss/postcss**: 4.1.17
- **tw-animate-css**: 1.4.0

### UI Components (shadcn/ui)

- **@radix-ui/react-separator**: 1.1.8
- **@radix-ui/react-slot**: 1.2.4
- **class-variance-authority**: 0.7.1
- **clsx**: 2.1.1
- **lucide-react**: 0.554.0 (Icon library)
- **tailwind-merge**: 3.4.0

### shadcn/ui Components Installed

- Button
- Card
- Input
- Badge
- Separator
- Skeleton

### Development Tools

- **TypeScript**: 5.9.3
- **ESLint**: 9.39.1
- **eslint-config-next**: 16.0.3

## Project Structure

```
jibonbd/
├── public/
│   └── assets/
│       └── images/
│           ├── logo/          # Place your logo files here
│           └── products/      # Place your product images here
├── src/
│   ├── app/                   # Next.js App Router pages
│   ├── components/
│   │   └── ui/               # shadcn/ui components
│   └── lib/
│       └── utils.ts          # Utility functions
├── components.json           # shadcn/ui configuration
├── package.json
├── tsconfig.json
└── tailwind.config.ts

```

## Configuration Details

### shadcn/ui Configuration

- **Style**: New York
- **Base Color**: Slate
- **CSS Variables**: Enabled
- **Icon Library**: Lucide React
- **RSC**: Enabled (React Server Components)

### Import Aliases

- `@/components` → src/components
- `@/lib` → src/lib
- `@/utils` → src/lib/utils
- `@/ui` → src/components/ui
- `@/hooks` → src/hooks

## Next Steps

1. **Add Assets**:

   - Place your logo in `public/assets/images/logo/`
   - Place product images in `public/assets/images/products/`

2. **Create Product Data**:

   - Create a JSON file with product data

3. **Build Home Page**:
   - Design and implement the home page using shadcn/ui components

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Development Server

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`
