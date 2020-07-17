export default class HttpError extends Error  {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
    }
}
