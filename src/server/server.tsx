import { objProps } from "./server.props";
const host = 'http://192.168.3.163:5015/';
var head: { 'Content-type': string; 'X-CSRFToken'?: string } = {'Content-type': 'application/json; charset=UTF-8'};
export var token : string = '';
let user_id : number = 0;

const getResource = async (url : string) => {
    url += url.includes('?') ? `&` : `?`;
    url += 'token=' + token;
    const res = await fetch(host+ url);
        if (!res.ok){
            throw new Error(`Could not fetch ${url}`)
        }
        const ret =  await res.json();
        return ret;
}

const getResourceNotToken = async (url : string) => {
  const res = await fetch(host+ url);
      if (!res.ok){
          throw new Error(`Could not fetch ${url}`)
      }
      const ret =  await res.json();
      return ret;
}

async function transformGetAjax(url : string, data: objProps){ 
    let new_url = url;
    new_url += url[url.length-1] != '/' ? '/' : '';
    new_url += '?';
    for (let key in data) {
      new_url += key + '=' + data[key] + '&';
    }
    new_url = new_url.slice(0, -1);
    return await getResource(new_url);
  }

const postResource = async (url : string, data : objProps) => {
    data['token'] = token;
    const res = await fetch(host + url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers: head,
      });
      if (!res.ok){
        throw new Error(`Could not fetch ${url}`)
    }
    const ret = await res.json() ;
    return ret;
}

export const getInfo = async () => {
    const answer = await getResource('/api/user/' + user_id);
    return answer;
}

export const setUserId = (id : number) =>{
    user_id = id;
} 