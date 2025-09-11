'use strict';

/**
 * personal-banking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::personal-banking.personal-banking');
