import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});

const gitStaticApi = axios.create({
  baseURL: 'https://github-readme-stats.vercel.app/api',
});

export { githubApi, gitStaticApi };
