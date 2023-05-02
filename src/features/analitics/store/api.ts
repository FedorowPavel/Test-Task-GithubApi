import {api, ApiTags} from '../../../common/store';
import {processAnalyticData} from '../../../common/utils/analytics';

export const analyticsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getReposAnalyticsData: build.query<unknown, string[]>({
      providesTags: [ApiTags.ANALYTICS],
      queryFn: async (repos, api, options, baseQuery) => {
        const results = await Promise.all(repos.map((repo) => baseQuery({url: `repos/${repo}`})));
        const processedData = processAnalyticData(results);

        return {data: processedData};
      },
    }),
  }),
});
