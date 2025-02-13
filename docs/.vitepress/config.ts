import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/my-personal-website/",  // <-- Add this line

  title: "Muskan's Blog",
  description: "A space where I share everything about me",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog/first-post" },
      { text: "About", link: "/about" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Muskan-saraf" },
      { icon: "linkedin", link: "https://linkedin.com/in/yourname" }
    ],
  },
});
