'use strict';

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl: 'https://natakovbasniuk.github.io/layout_moyo-header', // <-- правильний URL
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}_{viewportLabel}',
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  viewports: [
    {
      name: '1024px',
      width: 1024,
      height: 768,
    },
    {
      name: '1200px',
      width: 1200,
      height: 768,
    },
  ],
  scenarios: [
    {
      ...basic,
      label: 'Header tag',
      selectors: ['header'],
      delay: 3000,
    },
    {
      ...basic,
      label: 'Nav tag',
      selectors: ['nav'],
      delay: 3000,
    },
    {
      ...basic,
      misMatchThreshold: 2,
      label: 'Link with data-qa_hover',
      selectors: ['[data-qa="hover"]'],
      hoverSelector: '[data-qa="hover"]',
      postInteractionWait: 1000,
      delay: 3000,
    },
    {
      ...basic,
      misMatchThreshold: 2,
      label: 'Link with class_is-active',
      selectors: ['a.is-active'],
      delay: 3000,
    },
  ],
};

module.exports = config;

