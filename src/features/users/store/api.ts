import {api, ApiTags} from '../../../common/store';
import {GetAllUsersResponse, PaginationConfigModel, RepoOwner} from '../../../common/types';

export const usersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query<GetAllUsersResponse, PaginationConfigModel>({
      providesTags: [ApiTags.USERS],
      query: ({offset, perPage}) => ({url: `search/users?q=""&per_page=${perPage}&page=${offset}`}),
    }),

    getUserByName: build.query<RepoOwner, { name: string }>({
      providesTags: [ApiTags.USERS],
      query: ({name}) => ({url: `/users/${name}`}),
    }),
  }),
});
