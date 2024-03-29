import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createApi} from '@reduxjs/toolkit/query/react';
import { baseQueryWithInterceptor } from './baseQueryWithInterceptor';
import analyticsReducer from '../../features/analitics/store/analyticsSlice';

export const setupStore = () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(api.middleware),
});

export enum ApiTags {
  REPOSITORIES = 'Repositories',
  USERS = 'Users',
  ANALYTICS = 'Analytics'
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithInterceptor,
  tagTypes: [ApiTags.REPOSITORIES, ApiTags.USERS, ApiTags.ANALYTICS],
  endpoints: () => ({}),
});

const rootReducer = combineReducers({
  analyticsReducer,
  [api.reducerPath]: api.reducer,
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
