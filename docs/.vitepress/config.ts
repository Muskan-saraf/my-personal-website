import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/my-personal-website/",  // ✅ Fix GitHub Pages path

  title: "Muskan's Site",
  description: "A simple personal homepage",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },  // ✅ Added About page
      { text: "Contact", link: "/contact" },
    ]
  }
})
