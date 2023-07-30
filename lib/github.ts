import { PUBLIC_APP_GITHUB_ACCESS_TOKEN } from '@/site/config';

export const PINNED_REPOST_FRAGMENT = `
  fragment RepoFragment on User {
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
            stargazerCount
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
`;

export const GET_PINNED_REPOSTS_QUERY = `
  query getPinnedRepos {
    user(login: "sergiobarria") {
      ...RepoFragment
    }
  }
  ${PINNED_REPOST_FRAGMENT}
`;

export type User = {
    user: {
        followers: {
            totalCount: number;
        };
        pullRequests: {
            totalCount: number;
        };
        starredRepositories: {
            totalCount: number;
        };
        repositories: {
            totalCount: number;
            edges: {
                node: {
                    id: string;
                    name: string;
                    stargazerCount: number;
                };
            }[];
        };
    };
};

export const GET_USER_METRICS = `
	query getUserMetrics {
		user(login: "sergiobarria") {
			followers {
				totalCount
			}
			pullRequests {
				totalCount
			}
			starredRepositories {
				totalCount
			}
			repositories(first: 100, orderBy: { field: STARGAZERS, direction: DESC }) {
				totalCount
				edges {
					node {
						stargazerCount
						id
						name
					}
				}
			}
		}
	}
`;

export async function getGithubUserMetrics() {
    try {
        const res = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${PUBLIC_APP_GITHUB_ACCESS_TOKEN}`,
            },
            body: JSON.stringify({ query: GET_USER_METRICS }),
        });
        const { data } = await res.json();
        return data as User;
    } catch (err: unknown) {
        console.error(err);
        return null;
    }
}
