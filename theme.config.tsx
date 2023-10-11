import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import TumIcon from './components/icons/tum'

const config: DocsThemeConfig = {
  logo: <strong>Aerospace docs 🚀✈️</strong>,
  project: {
    link: 'https://github.com/BenPriborsky/aerospace-docs',
  },
  docsRepositoryBase: 'https://github.com/BenPriborsky/aerospace-docs/tree/main',
  footer: {
    text: <div style={{ display: "inline-block" }}><TumIcon size={25} /><strong>Areospace</strong></div>,
  },
}

export default {
  config, useNextSeoProps() {
    return {
      titleTemplate: '%s - Aerospace'
    }
  }
}
