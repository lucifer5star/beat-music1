import axios from 'axios';
export const API_CLIENT={
    get(URL){
    const promise= axios.get(URL);
    return promise;
    },
    post(URL,data){
        const promise= axios.post(URL,data);
        return promise;
    }
} 
// search?term={searchBox}&limit={val}