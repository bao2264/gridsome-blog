<template>
  <Layout>
    <div class="container">
      <Hero />
      <ProjectsGrid :projects="projects" />
    </div>
    <LatestJounals :journals="$page.journals.edges" />
  </Layout>
</template>

<page-query>
query {
  list: allStrapiProject (limit: 4) {
    edges {
      node {
        id
        title
        categories {
          name
        }
        cover {
          url
        }
        path
      }
    }
  }
  journals: allStrapiJournal (limit: 4) {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import ProjectsGrid from "@/components/ProjectsGrid"
import LatestJounals from "@/components/LatestJounals"
export default {
  components: {
    Hero,
    ProjectsGrid,
    LatestJounals,
  },
  metaInfo: {
    title: "Portfolio",
  },
  computed: {
    // graphql 怎么更好的定义数据结构？
    projects() {
      const _arr = this.$page.list.edges.map(item => {
        return {
          id: item.node.id,
          title: item.node.title,
          cover: "http://182.92.3.2:1337" + item.node.cover.url,
          categories: item.node.categories.map(v => v.name),
          path: item.node.path,
        }
      })
      return _arr.reverse()
    },
  },
}
</script>

<style></style>
