import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/my-personal-website/", // ✅ Fix GitHub Pages base path
  title: "Muskan Saraf",
  description: "Software Engineer | AI & Industry 5.0 Enthusiast",

  themeConfig: {
    logo: "/logo.png", // Replace with your logo file in docs/public

    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog/" },
      { text: "Projects", link: "/projects/" },
      { text: "About", link: "/about/" },
      { text: "Contact", link: "/contact/" },
    ],

    sidebar: {
      "/blog/": [
        { text: "Introduction", link: "/blog/" },
        { text: "Latest Blogs", link: "/blog/latest-blogs" },
      ],
      "/projects/": [
        { text: "My Projects", link: "/projects/" },
        { text: "GitHub Repos", link: "https://github.com/Muskan-saraf" },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Muskan-saraf" },
      { icon: "linkedin", link: "https://linkedin.com/in/yourname" },
      { icon: "twitter", link: "https://twitter.com/yourhandle" },
    ],

    darkModeSwitch: true, // ✅ Enable dark mode toggle
  },
})
