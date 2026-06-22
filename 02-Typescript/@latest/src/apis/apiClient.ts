type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestOptions {
    method: HTTPMethod;
    url: string;
    query?: Record<string, string>;
    headers?: Record<string, string>;
    body?: any;
}



export default class APIClient{
    private baseURL: string;

    constructor(baseURL: string){
        this.baseURL = baseURL;
    }

    async request(options: RequestOptions): Promise<any> {
        // Implementation of the request method
    }
}