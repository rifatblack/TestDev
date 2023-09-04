/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native")
// const { platformSelect } = require("nativewind");

module.exports = {
  content: [
    './App.{js,ts,jsx,tsx}',
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
 plugins: [nativewind()],
 theme: {
  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    'white': '#ffffff',
    'purple': '#3f3cbb',
    'midnight': '#121063',
    'metal': '#565584',
    'tahiti': '#3ab7bf',
    'silver': '#ecebff',
    'bubble-gum': '#ff77e9',
    'bermuda': '#78dcca',
    'Shark':'#26272c',
    'Yellow':'#b3a952',
    'Abbeyww':'#414246',
    'Aluminiume':'#a5a6aa',
    'YellowWifi':'#b4ab54',
    'Shark-950':'#292c31',
    'Mako-800':'#292c31',
    'Husk-500':'#b0a94d',
    'Cream-Can-300':'#f2d861',

  },
},
};

