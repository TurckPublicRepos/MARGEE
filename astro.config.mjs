// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    starlight({
      title: 'Margee',
      sidebar: [
        {
          label: 'Basic info',
          items: [
            { label: 'ARGEE & MARGEE', slug: 'basicinfo/argeemargee' },
            { label: 'Supported Devices', slug: 'basicinfo/supporteddevices' },
          ]
        },
        {
          label: 'Guides',
          items: [
            { label: 'Installing', slug: 'guides/installing' },
            { label: 'Quick Start', slug: 'guides/quickstart' },
            { label: 'My First Project', slug: 'guides/firstproject' },
            { label: 'Editing', slug: 'guides/editing' },
            { label: 'Debugging', slug: 'guides/debugging' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'File Types', slug: 'reference/filetypes' },
            {
              label: 'TPS',
              items: [
                { label: 'Turck Project Settings', slug: 'reference/tps/info' },
              ]
            },
            {
              label: 'TST',
              items: [
                { label: 'Turck Structured Text', slug: 'reference/tst/info' },
              ]
            },
            {
              label: 'TWV',
              items: [
                { label: 'Turck WebView', slug: 'reference/twv/info' },
                { label: 'JavaScript', slug: 'reference/twv/javascript' },
                { label: 'Styling', slug: 'reference/twv/styling' },
              ]
            }
          ]
        },
      ],
      customCss: [
        '/src/styles/base.css'
      ],
      favicon: "favicon.ico",
    }),
  ],
});
