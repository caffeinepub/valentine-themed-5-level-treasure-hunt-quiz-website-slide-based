import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'oklch(var(--sidebar))',
                    foreground: 'oklch(var(--sidebar-foreground))',
                    primary: 'oklch(var(--sidebar-primary))',
                    'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
                    accent: 'oklch(var(--sidebar-accent))',
                    'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
                    border: 'oklch(var(--sidebar-border))',
                    ring: 'oklch(var(--sidebar-ring))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)'
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Playfair Display', 'Georgia', 'serif'],
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'float-heart-1': {
                    '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)', opacity: '0.6' },
                    '50%': { transform: 'translateY(-20px) translateX(10px) rotate(5deg)', opacity: '1' }
                },
                'float-heart-2': {
                    '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)', opacity: '0.5' },
                    '50%': { transform: 'translateY(-15px) translateX(-8px) rotate(-5deg)', opacity: '0.9' }
                },
                'float-heart-3': {
                    '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)', opacity: '0.7' },
                    '50%': { transform: 'translateY(-25px) translateX(12px) rotate(8deg)', opacity: '1' }
                },
                'float-heart-4': {
                    '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)', opacity: '0.6' },
                    '50%': { transform: 'translateY(-18px) translateX(-10px) rotate(-6deg)', opacity: '0.95' }
                },
                'sparkle-1': {
                    '0%, 100%': { opacity: '0.3', transform: 'scale(0.8) rotate(0deg)' },
                    '50%': { opacity: '1', transform: 'scale(1.2) rotate(180deg)' }
                },
                'sparkle-2': {
                    '0%, 100%': { opacity: '0.4', transform: 'scale(0.9) rotate(0deg)' },
                    '50%': { opacity: '1', transform: 'scale(1.1) rotate(-180deg)' }
                },
                'heart-beat': {
                    '0%, 100%': { transform: 'scale(1)' },
                    '25%': { transform: 'scale(1.1)' },
                    '50%': { transform: 'scale(1)' },
                    '75%': { transform: 'scale(1.05)' }
                },
                'heart-glow': {
                    '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
                    '50%': { transform: 'scale(1.3)', opacity: '0' }
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                'fade-out': {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' }
                },
                'heart-burst': {
                    '0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
                    '50%': { transform: 'scale(1.2) rotate(180deg)', opacity: '1' },
                    '100%': { transform: 'scale(1) rotate(360deg)', opacity: '1' }
                },
                'heart-burst-glow': {
                    '0%': { transform: 'scale(0)', opacity: '0' },
                    '50%': { transform: 'scale(1.5)', opacity: '0.7' },
                    '100%': { transform: 'scale(2)', opacity: '0' }
                },
                'burst-up-1': {
                    '0%': { transform: 'translate(-50%, -50%) translateY(0) translateX(0) scale(0)', opacity: '0' },
                    '50%': { opacity: '1' },
                    '100%': { transform: 'translate(-50%, -50%) translateY(-150px) translateX(50px) scale(1)', opacity: '0' }
                },
                'burst-up-2': {
                    '0%': { transform: 'translate(-50%, -50%) translateY(0) translateX(0) scale(0)', opacity: '0' },
                    '50%': { opacity: '1' },
                    '100%': { transform: 'translate(-50%, -50%) translateY(-120px) translateX(-60px) scale(1)', opacity: '0' }
                },
                'burst-up-3': {
                    '0%': { transform: 'translate(-50%, -50%) translateY(0) translateX(0) scale(0)', opacity: '0' },
                    '50%': { opacity: '1' },
                    '100%': { transform: 'translate(-50%, -50%) translateY(-180px) translateX(30px) scale(1)', opacity: '0' }
                },
                'burst-up-4': {
                    '0%': { transform: 'translate(-50%, -50%) translateY(0) translateX(0) scale(0)', opacity: '0' },
                    '50%': { opacity: '1' },
                    '100%': { transform: 'translate(-50%, -50%) translateY(-100px) translateX(-80px) scale(1)', opacity: '0' }
                },
                'burst-up-5': {
                    '0%': { transform: 'translate(-50%, -50%) translateY(0) translateX(0) scale(0)', opacity: '0' },
                    '50%': { opacity: '1' },
                    '100%': { transform: 'translate(-50%, -50%) translateY(-160px) translateX(-40px) scale(1)', opacity: '0' }
                },
                'burst-up-6': {
                    '0%': { transform: 'translate(-50%, -50%) translateY(0) translateX(0) scale(0)', opacity: '0' },
                    '50%': { opacity: '1' },
                    '100%': { transform: 'translate(-50%, -50%) translateY(-140px) translateX(70px) scale(1)', opacity: '0' }
                },
                'sparkle-burst-1': {
                    '0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
                    '50%': { transform: 'scale(1.5) rotate(180deg)', opacity: '1' },
                    '100%': { transform: 'scale(0.5) rotate(360deg)', opacity: '0' }
                },
                'sparkle-burst-2': {
                    '0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
                    '50%': { transform: 'scale(1.3) rotate(-180deg)', opacity: '1' },
                    '100%': { transform: 'scale(0.5) rotate(-360deg)', opacity: '0' }
                },
                'sparkle-burst-3': {
                    '0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
                    '50%': { transform: 'scale(1.4) rotate(180deg)', opacity: '1' },
                    '100%': { transform: 'scale(0.5) rotate(360deg)', opacity: '0' }
                },
                'sparkle-burst-4': {
                    '0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
                    '50%': { transform: 'scale(1.2) rotate(-180deg)', opacity: '1' },
                    '100%': { transform: 'scale(0.5) rotate(-360deg)', opacity: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'float-heart-1': 'float-heart-1 4s ease-in-out infinite',
                'float-heart-2': 'float-heart-2 5s ease-in-out infinite 0.5s',
                'float-heart-3': 'float-heart-3 4.5s ease-in-out infinite 1s',
                'float-heart-4': 'float-heart-4 5.5s ease-in-out infinite 1.5s',
                'sparkle-1': 'sparkle-1 2s ease-in-out infinite',
                'sparkle-2': 'sparkle-2 2.5s ease-in-out infinite 0.5s',
                'heart-beat': 'heart-beat 2s ease-in-out infinite',
                'heart-glow': 'heart-glow 2s ease-in-out infinite',
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
                'fade-in': 'fade-in 0.5s ease-out forwards',
                'fade-out': 'fade-out 0.5s ease-out forwards',
                'heart-burst': 'heart-burst 0.6s ease-out forwards',
                'heart-burst-glow': 'heart-burst-glow 1s ease-out forwards',
                'burst-up-1': 'burst-up-1 1.2s ease-out forwards',
                'burst-up-2': 'burst-up-2 1.3s ease-out forwards 0.1s',
                'burst-up-3': 'burst-up-3 1.4s ease-out forwards 0.2s',
                'burst-up-4': 'burst-up-4 1.1s ease-out forwards 0.15s',
                'burst-up-5': 'burst-up-5 1.35s ease-out forwards 0.25s',
                'burst-up-6': 'burst-up-6 1.25s ease-out forwards 0.05s',
                'sparkle-burst-1': 'sparkle-burst-1 1s ease-out forwards',
                'sparkle-burst-2': 'sparkle-burst-2 1.1s ease-out forwards 0.1s',
                'sparkle-burst-3': 'sparkle-burst-3 1.2s ease-out forwards 0.2s',
                'sparkle-burst-4': 'sparkle-burst-4 1.15s ease-out forwards 0.15s'
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
