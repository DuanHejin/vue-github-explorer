import axios from 'axios';

export const getContents = (repo, path = '') => {
  return new Promise((resolve) => {
    axios.get(`https://api.github.com/repos/${repo}/contents/${path}`).then((result) => {
      resolve(result);
    }).catch(() => {
      resolve({data: []})
    });
  });
  
}