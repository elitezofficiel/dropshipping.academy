module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep trust blue for brand authority
        primary: {
          DEFAULT: "#1E3A8A", // blue-800
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E3A8A", // blue-800
          900: "#1E40AF", // blue-900
        },
        // Secondary Colors - Lighter blue for supporting elements
        secondary: {
          DEFAULT: "#3B82F6", // blue-500
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E3A8A", // blue-800
          900: "#1E40AF", // blue-900
        },
        // Accent Colors - High-energy orange for CTAs
        accent: {
          DEFAULT: "#F97316", // orange-500
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          200: "#FED7AA", // orange-200
          300: "#FDBA74", // orange-300
          400: "#FB923C", // orange-400
          500: "#F97316", // orange-500
          600: "#EA580C", // orange-600
          700: "#C2410C", // orange-700
          800: "#9A3412", // orange-800
          900: "#7C2D12", // orange-900
        },
        // Background Colors
        background: "#FFFFFF", // white
        surface: {
          DEFAULT: "#F8FAFC", // slate-50
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
        },
        // Text Colors
        text: {
          primary: "#1F2937", // gray-800
          secondary: "#6B7280", // gray-500
          muted: "#9CA3AF", // gray-400
        },
        // Status Colors
        success: {
          DEFAULT: "#10B981", // emerald-500
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
        },
        error: {
          DEFAULT: "#EF4444", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
        },
        // Border Colors
        border: {
          DEFAULT: "#E5E7EB", // gray-200
          light: "#F3F4F6", // gray-100
        },
      },
      fontFamily: {
        // Headlines - Bold impact with excellent readability
        poppins: ['Poppins', 'sans-serif'],
        // Body - Optimized for digital reading
        inter: ['Inter', 'sans-serif'],
        // Default sans
        sans: ['Inter', 'sans-serif'],
        // Accents - Elegant emphasis for testimonials
        accent: ['Playfair Display', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      fontSize: {
        // Custom font sizes for conversion optimization
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'section-title': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'section-title-mobile': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
        'cta': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'testimonial': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
      },
      boxShadow: {
        // Custom shadows for conversion elements
        'testimonial': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'cta': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      animation: {
        // Custom animations for engagement
        'counter': 'countUp 2s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        // Custom transition durations
        '250': '250ms',
        '350': '350ms',
      },
      transitionTimingFunction: {
        // Custom easing functions
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        // Custom spacing for consistent layout
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        // Custom max widths for content sections
        'prose': '65ch',
        'content': '1200px',
      },
      borderRadius: {
        // Custom border radius values
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      zIndex: {
        // Custom z-index values
        'modal': '1000',
        'dropdown': '100',
        'sticky': '50',
      },
    },
  },
  plugins: [
    // Add any additional plugins here
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
        },
        '.transition-fast': {
          transition: 'all 250ms ease-in-out',
        },
        '.transition-medium': {
          transition: 'all 300ms ease-in-out',
        },
        '.transition-slow': {
          transition: 'all 500ms ease-in-out',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}