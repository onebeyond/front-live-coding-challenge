const AppConfig = {
  selectedServer: 'prod',
  servers: {
    prod: {
      api: 'https://phone-keeper.herokuapp.com/',
      public: 'https://phone-keeper.herokuapp.com/',
    },
    beta: {
      api: '',
      public: '',
    },
    local: {
      api: 'http://localhost:3000/',
      public: 'http://localhost:3000/',
    },
  },
  host: function () {
    return this.servers[this.selectedServer].api;
  },
  hostPublic: function () {
    return this.servers[this.selectedServer].public;
  },
  authHeaders: () => {},
};

export default AppConfig;
