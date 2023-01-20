export interface IPostItem {
    id: number;
    title: string;
    body: string;
}

export interface IPostList {
    posts: IPostItem[];
    title: string;
}