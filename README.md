# Nanopublication website

[![Deploy to GitHub Pages](https://github.com/Nanopublication/nanopub-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/Nanopublication/nanopub-website/actions/workflows/deploy.yml)

Code for the home website presenting the Nanopublication ecosystem, hosted at [nanopub.org](https://nanopub.org).

The website is automatically updated by a [GitHub Action](/actions) at each push to this repository `main` branch.

## ✍️ Contribute

Contributions are welcome!

### 📝 Edit documentation pages

Editing a documentation file is as easy as going to https://github.com/Nanopublication/nanopub-website/edit/main/website/docs/users.md

* Edit a page by login with an account that has edit permissions.

* Otherwise fork the repository and modify the files you want. Pull requests are welcome!

Otherwise you can clone the repository, work locally and commit your changes

> We recommend using [Typora](https://typora.io/) to edit [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) files on your computer.

### 📂 Files locations

- Most website pages are in `website/src/pages` and `website/docs`
- Add new `docs` pages links to the sidebar: `website/sidebars.json`.
- Main parameters of the website can be found in `website/docusaurus.config.js`.
- Static content (any resource to download, images, css, js) can be provided in `website/static`

## 🧑‍💻 Deploy locally

Go to the `/website` directory and start the website on http://localhost:19006, it will be reloaded automatically when you make changes to the code:

1. Install dependencies:

```shell
yarn
```

2. Deploy in development on http://localhost:3000:

```shell
yarn dev
```

## 🚀 Deploy in production

The website is automatically published to GitHub Pages by a [GitHub Action](https://github.com/Nanopublication/nanopub-website/blob/main/actions) at each push to the `main` branch of this repository.

## ✒️ Markdown tips

### Add an announcement top bar

You can easily add a general announcement bar on the website if you want to pass some information to your users, like dates of maintenance

Open the file `website/docusaurus.config.js` and update the `announcementBar` variable.

You can comment the `announcementBar` code block when you want to remove the announcement bar.

### Info boxes

```markdown
:::note
Grey box
:::
:::tip You can specify an optional title
Green box
:::
:::info
Blue box
:::
:::caution
Orange bpx
:::
:::danger
Red box
:::
```

Embed a Google docs presentation (size does not change dynamically). You can check the ["documentation" by gitlab](https://about.gitlab.com/handbook/markdown-guide/#google-slides) but it does not work (how can they expect to get a responsive website by providing hardcoded pixel size?):

```html
<figure class="video_container">
  <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRAfZdOfGt761tIAj2e35OYrOL4uIKWiAQB15MXvsqso3XJ5Mr3-W4dOa9KjDTZpi1LE_D2CU1F5Thy/embed?start=false&loop=false&delayms=15000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</figure>

# With CSS:
<script>
.video-container{
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
}
</script>
```

## 🙏 Acknowledgments

Documentation website generated using [Docusaurus](https://docusaurus.io/).