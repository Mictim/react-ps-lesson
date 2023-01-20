import { useMemo } from "react";
import { IPostItem } from "../models";


export const useSortedPosts = (posts: IPostItem[], sort: string): IPostItem[] => {
    return useMemo(() => {
        if (sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        } else {
          return posts;
        }
      }, [sort, posts]); 
}

export const usePosts = (posts: IPostItem[], query: string, sort: string) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        switch (sort) {
          case "title": return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
          case "body": return sortedPosts.filter(post => post.body.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
          default: return sortedPosts;
        }
      }, [query, sortedPosts])
      return sortedAndSearchedPosts;
}