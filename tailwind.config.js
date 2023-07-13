/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  mode:"jit",
  theme: {
    extend: {
      colors:{
        blue: '#08D9D6',
        red: '#FF2E63',
        dark: '#252A34',
        grey: '#EAEAEA',
        lightDark: '#3E4657' 
        
      },
      fontFamily:{
        roboto: ['Roboto', 'sans-serif'],
        
      },
      
    screens:{
      xs:"480px",
      sm:"768px",
      md:"1060px"
    }
    },
  },
  plugins: [],
}

