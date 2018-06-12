export interface IRepository {
    id: number;
    name: string;
    full_name: string;
    owner: {
      login: string,
      url: string
    };
    html_url: string;
    description: string;
}
