export interface BookObject {
    shards : Object;
    hits : hitsObject;
    took : number;
    timed_out : boolean,
}

export interface hitsObject {
    hits : book[];
    max_score : number;
    total : Object;
}

export interface book {
    _id: string;
    _index : string;
    _score : number;
    _source : _source;

}

export interface _source {
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
