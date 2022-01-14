export const PINNED_REPOS_QUERY = `
query getPinnedRepos {
  user(login: "sergiobarria") {
    pinnedItems(first: 6) {
      totalCount
      edges {
        node {
          ... on Repository {
            id
            name
            description
            homepageUrl
            url
            primaryLanguage {
              id
              name
              color
            }
          }
        }
      }
    }
  }
}
`
