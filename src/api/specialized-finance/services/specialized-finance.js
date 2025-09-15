'use strict';

/**
 * specialized-finance service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::specialized-finance.specialized-finance');
