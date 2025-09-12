'use strict';

/**
 * digital-banking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::digital-banking.digital-banking');
