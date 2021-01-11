// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  host: "0.0.0.0",
  port: 1338,
  templates: {
    StrapiProject: [
      {
        path: "/projects/:id",
        component: "./src/templates/StrapiProject.vue",
      },
    ],
    StrapiJournal: [
      {
        path: "/journals/:id",
        component: "./src/templates/StrapiJournal.vue",
      },
    ],
  },
  plugins: [
    {
      use: "@gridsome/source-strapi",
      options: {
        apiURL: "http://182.92.3.2:1337",
        queryLimit: 1000, // Defaults to 100
        contentTypes: ["home", "project", "journal"],
      },
    },
  ],
}
