'use strict';

/**
 * vital-sign service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vital-sign.vital-sign');
