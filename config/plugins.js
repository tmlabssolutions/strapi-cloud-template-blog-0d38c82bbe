module.exports = () => ({
    graphql: {
        enabled: true,
        config: {
          endpoint: '/graphql',
          shadowCRUD: true,         // auto-generate queries/mutations
          playgroundAlways: false,  // show playground in non-production only
          depthLimit: 7,            // guard against deeply nested queries
          amountLimit: 100,         // max items per query
          apolloServer: {
            tracing: false,         // enable Apollo tracing if needed
          },
        },
      },
});
