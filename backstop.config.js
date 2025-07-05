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
]




