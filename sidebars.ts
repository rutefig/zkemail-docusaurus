import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docs: [
    {
      type: 'html',
      value: '<span class="sidebar-heading first">Welcome</span>',
    },
    'introduction',
    'getting-started',

    {
      type: 'html',
      value: '<span class="sidebar-heading">How ZK Email Works</span>',
    },
    {
      type: 'category',
      label: 'Architecture',
      link: {
        type: 'doc',
        id: 'architecture/README',
      },
      items: [
        'architecture/dkim-verification',
        'architecture/zk-proofs',
        'architecture/on-chain',
        'architecture/security-considerations',
      ],
    },
    {
      type: 'html',
      value: '<span class="sidebar-heading">SDK</span>',
    },
    {
      type: 'category',
      label: 'ZK Email SDK',
      link: {
        type: 'doc',
        id: 'zk-email-sdk/README',
      },
      items: [
        'zk-email-sdk/running-the-example',
        'zk-email-sdk/creating-a-new-pattern',
        'zk-email-sdk/using-the-sdk',
      ],
    },

    {
      type: 'html',
      value: '<span class="sidebar-heading">ZK Email Verifier</span>',
    },
    {
      type: 'category',
      label: 'ZK-Email-Verifier',
      link: {
        type: 'doc',
        id: 'zk-email-verifier/README',
      },
      items: [
        'zk-email-verifier/installation',
        {
          type: 'category',
          label: 'Packages',
          link: {
            type: 'doc',
            id: 'zk-email-verifier/packages/README',
          },
          items: [
            'zk-email-verifier/packages/zk-email-circuits',
            'zk-email-verifier/packages/zk-email-helpers',
            'zk-email-verifier/packages/zk-email-contracts'
          ],
        },
        'zk-email-verifier/usage-guide',
      ],
    },

    {
      type: 'html',
      value: '<span class="sidebar-heading">Email Wallet</span>',
    },
    {
      type: 'category',
      label: 'Email Wallet',
      link: {
        type: 'doc',
        id: 'email-wallet/README',
      },
      items: [
        'email-wallet/api-documentation',
        'email-wallet/circuit-architecture',
        'email-wallet/contract-architecture',
        'email-wallet/relayer-infrastructure',
        'email-wallet/email-wallet-extensions-sdk',
        'email-wallet/deployed-contract-addresses',
      ],
    },

    {
      type: 'html',
      value: '<span class="sidebar-heading">Account Recovery</span>',
    },
    'account-recovery/README',
    // {
    //   type: 'category',
    //   label: 'Quickstart',
    //   link: {
    //     type: 'doc',
    //     id: 'account-recovery/quickstart/README',
    //   },
    //   items: [
    //     'account-recovery/quickstart/existing-modules',
    //     'account-recovery/quickstart/ether-email-auth',
    //   ],
    // },
    {
      type: 'category',
      label: 'Relayer API',
      link: {
        type: 'doc',
        id: 'account-recovery/relayer-api/README'
      },
      items: [
        'account-recovery/relayer-api/echo-endpoint',
        'account-recovery/relayer-api/request-status',
        'account-recovery/relayer-api/acceptance-request',
        'account-recovery/relayer-api/recovery-request',
        'account-recovery/relayer-api/complete-recovery-request',
        'account-recovery/relayer-api/get-account-salt',
      ],
    },
    'account-recovery/deployed-contracts',

    {
      type: 'html',
      value: '<span class="sidebar-heading">Email Transaction Auth</span>',
    },
    'email-tx-auth/README',
    'email-tx-auth/quickstart',
    'email-tx-auth/setup',
    'email-tx-auth/command-templates',
    'email-tx-auth/api-reference',
    {
      type: 'category',
      label: 'Architecture',
      link: {
        type: 'doc',
        id: 'email-tx-auth/architecture/README'
      },
      items: [
      ],
    },
    {
      type: 'category',
      label: 'Ether Email Auth SDK',
      link: {
        type: 'doc',
        id: 'email-tx-auth/email-tx-auth/README'
      },
      items: [
        'email-tx-auth/email-tx-auth/command',
        'email-tx-auth/email-tx-auth/concepts',
        'email-tx-auth/email-tx-auth/package-components',
      ],
    },

    {
      type: 'html',
      value: '<span class="sidebar-heading">Additional Resources</span>',
    },
    {
      type: 'link',
      label: 'Projects using ZK Email',
      href: 'https://prove.email/projects',
    },
    'login-with-zk-email-oauth-api',
    'audits',
    'zk-regex',
    'frequently-asked-questions',
    'contributing',
  ],
};

export default sidebars;
