
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				portfolio: {
					'blue': '#3B82F6',
					'blue-light': '#93C5FD',
					'blue-pastel': '#DBEAFE',
					'blue-100': '#DBEAFE',
					'blue-400': '#60A5FA',
					'purple': '#A855F7',
					'purple-light': '#C084FC',
					'purple-pastel': '#F3E8FF',
					'purple-100': '#F3E8FF',
					'purple-400': '#A78BFA',
					'dark': '#1F2937',
					'gray': '#6B7280',
					'light': '#F8FAFC',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'3xl': '1.5rem',
				'4xl': '2rem'
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
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(147, 197, 253, 0.4)' }, 
					'50%': { boxShadow: '0 0 40px rgba(147, 197, 253, 0.8)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.6s ease-out forwards',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite'
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif']
			},
			boxShadow: {
				'soft': '0 10px 40px rgba(59, 130, 246, 0.15)',
				'card': '0 8px 32px rgba(59, 130, 246, 0.12)',
				'button': '0 8px 25px rgba(59, 130, 246, 0.25)',
				'hover': '0 0 30px rgba(147, 197, 253, 0.6)',
				'glow': '0 0 30px rgba(147, 197, 253, 0.6)',
				'purple-glow': '0 0 30px rgba(168, 85, 247, 0.5)',
				'neomorphism': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.5), 0 1px 2px 0 rgba(0, 0, 0, 0.08)'
			},
			backgroundImage: {
				'gradient-blue': 'linear-gradient(135deg, #DBEAFE 0%, #FFFFFF 50%, #F3E8FF 100%)',
				'gradient-card': 'linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)',
				'gradient-button': 'linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%)',
				'gradient-hero': 'linear-gradient(135deg, #DBEAFE 0%, #FFFFFF 30%, #F3E8FF 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
