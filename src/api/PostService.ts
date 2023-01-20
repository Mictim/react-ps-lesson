import axios from "axios";
import { IPostItem } from "../models";

export default class PostService {
    static async getAllPosts(): Promise<IPostItem[]> {
        const response = await axios.get('https://jsonplaceholder.typicode.com/pos1ts');
        return response.data;
    }
}