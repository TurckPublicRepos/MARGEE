// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://turckpublicrepos.github.io/margee/',
  base: '/margee/',
  integrations: [
    starlight({
      title: 'Documentation',
      sidebar: [
        {
          label: 'Basic info',
          items: [
            { label: 'ARGEE & MARGEE', slug: 'basicinfo/argeemargee' },
            { label: 'Supported Devices', slug: 'basicinfo/supporteddevices' },
          ]
        },
        {
          label: 'Installing',
          items: [
            { label: 'Online installation', slug: 'installing/online' },
            { label: 'Offline installation', slug: 'installing/offline' },
          ]
        },
        {
          label: 'Guides',
          items: [
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
                { label: 'Builtin Functions', slug: 'reference/tst/builtinfunctions' },
              ]
            },
            {
              label: 'TWV',
              items: [
                { label: 'Turck WebView', slug: 'reference/twv/info' },
                { label: 'TypeScript', slug: 'reference/twv/typescript' },
                { label: 'Styling', slug: 'reference/twv/styling' },
              ]
            }
          ]
        },
        {
          label: 'Libraries',
          items: [
            { label: 'SYS', link: 'https://turckpublicrepos.github.io/MARGEE-LIB-SYS/' },
            { label: 'MATH', link: 'https://turckpublicrepos.github.io/MARGEE-LIB-MATH/' },
            { label: 'IO-LINK', link: 'https://turckpublicrepos.github.io/MARGEE-LIB-IO-LINK/' },
            { label: 'NETWORKING TCP/IP', link: 'https://turckpublicrepos.github.io/MARGEE-LIB-NETWORKING-TCPIP/' },
          ]
        }
      ],
      customCss: [
        '/src/styles/base.css'
      ],
      components: {
        Hero: '/src/components/Hero.astro',
      },
      favicon: "favicon.ico",
    }),
    mdx({
      remarkPlugins: [remarkGfm],
    }),
  ],
});
