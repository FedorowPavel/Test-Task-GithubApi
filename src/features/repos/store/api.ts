import {api, ApiTags} from "../../../common/store";
import {GetAllRepositoriesResponse, PaginationConfigModel, Repository} from "../../../common/types";

export const repositoriesApi = api.injectEndpoints({
  endpoints: (build) =>  ({
    getRepositories: build.query<GetAllRepositoriesResponse, PaginationConfigModel>({
      providesTags: [ApiTags.REPOSITORIES],
      query: ({offset, perPage}) => ({url: `search/repositories?q=stars:%3E1&sort=stars&per_page=${perPage}&page=${offset}`}),
    }),

    getRepositoryByFullName: build.query<Repository, {fullname: string}>({
      providesTags: [ApiTags.REPOSITORIES],
      query: ({fullname}) => ({url: `repos/${fullname}`}),
    }),
  })
})



