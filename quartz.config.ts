import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "working notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "malaikaaiyar.me",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Source Code Pro",
        body: "Source Code Pro",
        code: "Source Code Pro",
      },
      colors: {
        lightMode: {
          light: "#FFFDFA",
          lightgray: "#d4d2cf",
          gray: "#8a8a8a",
          darkgray: "#0e3012",
          dark: "#0e3012",
          secondary: "#0e3012",
          tertiary: "#5959FF",
          highlight: "rgba(14, 48, 18, 0.08)",
          textHighlight: "rgba(89, 89, 255, 0.2)",
        },
        darkMode: {
          light: "#0e3012",
          lightgray: "#1a4a1e",
          gray: "#4a7a4e",
          darkgray: "#e0ddd8",
          dark: "#FFFDFA",
          secondary: "#FFFDFA",
          tertiary: "#5959FF",
          highlight: "rgba(255, 253, 250, 0.08)",
          textHighlight: "rgba(89, 89, 255, 0.25)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config 