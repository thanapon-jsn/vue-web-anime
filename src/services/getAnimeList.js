import { fetchGraphQL } from './server'

async function getAnimeList () {

  let query = 
      `query ($perPage: Int, $season: MediaSeason, $seasonYear: Int) {
        page: Page(page: $perPage, perPage: 50) {
          pageInfo {
            total
            perPage
            currentPage
            lastPage
            hasNextPage
          }
          anime: media(type: ANIME, season: $season, seasonYear: $seasonYear, status_in: [RELEASING, FINISHED], sort: POPULARITY_DESC) {
            id
            title {
              userPreferred
            }
            coverImage {
              large
            }
            bannerImage
            season
            description
            format
            status
            genres
            isAdult
            averageScore
            popularity
            nextAiringEpisode {
              airingAt
              timeUntilAiring
              episode
            }
            studios(isMain: true) {
              edges {
                isMain
                node {
                  id
                  name
                }
              }
            }
          }
        }
      }`;

  let variables = { perPage: 1, season: "FALL", seasonYear: 2019};

  const response = await fetchGraphQL(query, variables);
  
  return response;
}

export { getAnimeList };