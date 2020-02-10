const urls = {
  default: {
    API_URL: 'https://traplearn.back.jingk.ai/',
  },
};

const common = () => {
  const env = Object.assign(urls.default, urls.default || {});
  return {
    ...env,
    getUrl: () => env.API_URL,
  };
};

export default common;
