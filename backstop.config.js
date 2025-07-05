'use strict';

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  url: 'http://127.0.0.1:50279/index.html',
  referenceUrl: 'http://127.0.0.1:50279/index.html',
};


module.exports = {
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
      readySelector: 'header',
    },
    {
      ...basic,
      label: 'Nav tag',
      selectors: ['nav'],
      readySelector: 'nav',
    },
    {
      ...basic,
      misMatchThreshold: 2,
      label: 'Link with data-qa_hover',
      selectors: ['[data-qa="hover"]'],
      hoverSelector: '[data-qa="hover"]',
      postInteractionWait: 1000,
      readySelector: '[data-qa="hover"]',
    },
    {
      ...basic,
      misMatchThreshold: 2,
      label: 'Link with class_is-active',
      selectors: ['a.is-active'],
      readySelector: 'a.is-active',
    },
  ],
};



