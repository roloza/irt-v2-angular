import { Count } from 'src/app/models/count';

export class Brand {
    id: number;
    title: string;
    slug: string;
    color: string;
    colorType: string;
    content: string;
    url: string;
    image: string;
    position: number;
    status: number;
    type: number;
    counts?: Array<Count>
}