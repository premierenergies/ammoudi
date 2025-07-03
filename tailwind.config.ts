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
				// Mykonos Paradise Theme Colors
				aegean: {
					50: 'hsl(var(--aegean-50))',
					100: 'hsl(var(--aegean-100))',
					200: 'hsl(var(--aegean-200))',
					300: 'hsl(var(--aegean-300))',
					400: 'hsl(var(--aegean-400))',
					500: 'hsl(var(--aegean-500))',
					600: 'hsl(var(--aegean-600))',
					700: 'hsl(var(--aegean-700))',
					800: 'hsl(var(--aegean-800))',
					900: 'hsl(var(--aegean-900))'
				},
				bougainvillea: {
					50: 'hsl(var(--bougainvillea-50))',
					100: 'hsl(var(--bougainvillea-100))',
					200: 'hsl(var(--bougainvillea-200))',
					300: 'hsl(var(--bougainvillea-300))',
					400: 'hsl(var(--bougainvillea-400))',
					500: 'hsl(var(--bougainvillea-500))',
					600: 'hsl(var(--bougainvillea-600))',
					700: 'hsl(var(--bougainvillea-700))',
					800: 'hsl(var(--bougainvillea-800))',
					900: 'hsl(var(--bougainvillea-900))'
				},
				sunset: {
					50: 'hsl(var(--sunset-50))',
					100: 'hsl(var(--sunset-100))',
					200: 'hsl(var(--sunset-200))',
					300: 'hsl(var(--sunset-300))',
					400: 'hsl(var(--sunset-400))',
					500: 'hsl(var(--sunset-500))',
					600: 'hsl(var(--sunset-600))',
					700: 'hsl(var(--sunset-700))',
					800: 'hsl(var(--sunset-800))',
					900: 'hsl(var(--sunset-900))'
				}
			},
			fontFamily: {
				playfair: ['Playfair Display', 'serif'],
				inter: ['Inter', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
