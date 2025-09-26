'use strict';

/**
 * locator-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::locator-page.locator-page');
