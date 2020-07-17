export default class Data{
    static getData(){
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Origin: '*',
                'Access-Control-Allow-Origin': true
            }
        };
        return fetch(`http://localhost:3000/herders`, options);
    }
}
