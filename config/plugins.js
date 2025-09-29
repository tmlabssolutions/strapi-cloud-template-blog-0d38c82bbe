module.exports = ({ env }) => ({
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
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: env('GMAIL_SMTP_NAME'),
          pass: env('GMAIL_SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('GMAIL_SMTP_NAME'),
        defaultReplyTo: env('GMAIL_SMTP_NAME'),
      },
    },
  },
});
