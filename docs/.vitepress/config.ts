import { defineConfig } from "vitepress";

const siteTitle = "Repository Polish Skill";
const siteDescription =
  "Polish repositories with stronger README files, bilingual docs, GitHub Pages, and public-facing release structure.";
const siteOrigin = "https://sunwood-ai-labs.github.io";
const siteBase = "/repository-polish-skill/";
const siteUrl = new URL(siteBase, siteOrigin).toString();
const ogImageUrl = new URL("ogp.svg", siteUrl).toString();
const repoUrl = "https://github.com/Sunwood-ai-labs/repository-polish-skill";

const socialLinks = [
  {
    icon: "github",
    link: repoUrl,
  },
];

const footer = {
  message: "Built for practical repository polish and release workflows.",
  copyright: "Copyright (c) 2026 Sunwood AI Labs",
};

function toPagePath(page: string): string {
  if (page === "index.md") return "/";
  if (page.endsWith("/index.md")) return `/${page.replace(/\/index\.md$/, "")}/`;
  return `/${page.replace(/\.md$/, "")}`;
}

function toAbsoluteUrl(path: string): string {
  return new URL(path.replace(/^\/+/, ""), siteUrl).toString();
}

export default defineConfig({
  title: siteTitle,
  description: siteDescription,
  base: siteBase,
  lang: "en-US",
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: `${siteBase}favicon.svg` }],
    ["meta", { name: "theme-color", content: "#733B2F" }],
  ],
  sitemap: {
    hostname: siteUrl,
  },
  transformHead({ page, title, description }) {
    const pageUrl = toAbsoluteUrl(toPagePath(page));
    const locale = page.startsWith("ja/") ? "ja_JP" : "en_US";

    return [
      ["link", { rel: "canonical", href: pageUrl }],
      ["meta", { property: "og:type", content: "website" }],
      ["meta", { property: "og:site_name", content: siteTitle }],
      ["meta", { property: "og:locale", content: locale }],
      ["meta", { property: "og:title", content: title }],
      ["meta", { property: "og:description", content: description }],
      ["meta", { property: "og:url", content: pageUrl }],
      ["meta", { property: "og:image", content: ogImageUrl }],
      ["meta", { property: "og:image:type", content: "image/svg+xml" }],
      ["meta", { property: "og:image:alt", content: "Repository Polish Skill social card" }],
      ["meta", { name: "twitter:card", content: "summary_large_image" }],
      ["meta", { name: "twitter:title", content: title }],
      ["meta", { name: "twitter:description", content: description }],
      ["meta", { name: "twitter:image", content: ogImageUrl }],
    ];
  },
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      title: siteTitle,
      description: siteDescription,
      themeConfig: {
        logo: "/logo.svg",
        nav: [
          { text: "Home", link: "/" },
          { text: "Guide", link: "/guide/getting-started" },
          { text: "GitHub", link: repoUrl },
        ],
        sidebar: [
          {
            text: "Guide",
            items: [
              { text: "Getting Started", link: "/guide/getting-started" },
              { text: "Usage", link: "/guide/usage" },
              { text: "Deliverables", link: "/guide/deliverables" },
              { text: "Publishing", link: "/guide/publishing" },
            ],
          },
        ],
        socialLinks,
        footer,
      },
    },
    ja: {
      label: "日本語",
      lang: "ja-JP",
      title: siteTitle,
      description:
        "README、日英ドキュメント、GitHub Pages、公開向け構成まで含めてリポジトリを整えるための Codex skill。",
      themeConfig: {
        logo: "/logo.svg",
        nav: [
          { text: "ホーム", link: "/ja/" },
          { text: "ガイド", link: "/ja/guide/getting-started" },
          { text: "GitHub", link: repoUrl },
        ],
        sidebar: [
          {
            text: "ガイド",
            items: [
              { text: "はじめに", link: "/ja/guide/getting-started" },
              { text: "使い方", link: "/ja/guide/usage" },
              { text: "成果物", link: "/ja/guide/deliverables" },
              { text: "公開とデプロイ", link: "/ja/guide/publishing" },
            ],
          },
        ],
        socialLinks,
        footer,
      },
    },
  },
  themeConfig: {
    socialLinks,
    footer,
  },
});
