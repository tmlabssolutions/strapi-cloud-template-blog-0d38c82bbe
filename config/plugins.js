module.exports = () => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,         // auto-generate queries/mutations
      playgroundAlways: false,  // show playground in non-production only
      depthLimit: 50,            // guard against deeply nested queries
      amountLimit: 100,         // max items per query
      apolloServer: {
        tracing: false,         // enable Apollo tracing if needed
      },
      defaultLimit: 50,
    },
  },
});
