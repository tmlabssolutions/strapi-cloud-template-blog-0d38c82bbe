'use strict';

/**
 * digital service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::digital.digital');
