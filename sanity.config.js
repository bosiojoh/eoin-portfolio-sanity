import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'eoin-portfolio-sanity',

  projectId: '1bk1c2xl',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

// // Multiple workspace configuration
// import {defineConfig} from 'sanity'
// import {deskTool} from 'sanity/desk'
// import {schemaTypes} from './schemas'

// export default defineConfig([
//   {
//     projectId: '<projectId>',
//     dataset: 'production',
//     name: 'production-workspace',
//     basePath: '/production',
//     title: 'Production',
//     plugins: [deskTool()],
//     schema: {
//       types: schemaTypes,
//     },
//   },
//   {
//     projectId: '<projectId>',
//     dataset: 'staging',
//     name: 'staging-workspace',
//     basePath: '/staging',
//     title: 'Staging',
//     plugins: [deskTool()],
//     schema: {
//       types: schemaTypes,
//     },
//   },
// ])
