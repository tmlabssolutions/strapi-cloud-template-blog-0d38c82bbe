'use strict';

/**
 * business-banking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::business-banking.business-banking');
