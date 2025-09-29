'use strict';
const bootstrap = require("./bootstrap");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const extensionService = strapi.plugin('graphql').service('extension');

    const extension = () => ({
      typeDefs: `
        type Mutation {
          sendEmail(to: String!, subject: String!, text: String!): Boolean
        }
      `,
      resolvers: {
        Mutation: {
          sendEmail: {
            resolve: async (parent, args, context) => {
              try {
                await strapi.plugins['email'].services.email.send({
                  to: args.to,
                  subject: args.subject,
                  text: args.text,
                });
                strapi.log.info(`Email sent successfully to: ${args.to}`);
                return true;
              } catch (e) {
                strapi.log.error(`Error sending email to: ${args.to}`, e);
                return false;
              }
            },
          },
        },
      },
    });

    extensionService.use(extension);
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap,
};
