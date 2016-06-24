import axios from 'axios'

 const apiHost = " https://s3-eu-west-1.amazonaws.com/streetlife-coding-challenge" // development


const base = axios.create({
  baseURL: apiHost,
  responseType: 'json',
});


export default base
