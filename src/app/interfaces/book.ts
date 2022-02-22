export interface Book {
    authors: string;
    bookshelves: string[];
    copyright: boolean;
    download_count: number;
    formats: Object;
    id: number;
    languages: string[]
    media_type: string;
    subjects: string[]
    title: string;
}
