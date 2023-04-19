export interface PaginationConfigModel {
  offset: number,
  perPage: number
}

export interface GetAllRepositoriesResponse {
  items: Repository[],
  total_count: number
}

export interface GetAllUsersResponse {
  items: RepoOwner[],
  total_count: number
}

export interface Repository {
  name: string,
  full_name: string,
  description: string,
  owner: RepoOwner,
  id: number,
  forks: number,
  created_at: string,
  updated_at: string,
  language: string,
  open_issues: number,
  subscribers_count: number
}

export interface RepoOwner {
  avatar_url: string,
  company: string,
  created_at: string,
  updated_at: string,
  location: string,
  login: string,
  name: string,
  public_repos: number,
  id: number,
  type: string
}
