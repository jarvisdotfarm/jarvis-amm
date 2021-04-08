import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://app.jarvis.farm/',
  },
   {
        label: 'Swap',
        href: 'https://swap.jarvis.farm/#/swap',
        icon: 'TradeIcon',
   },
  {
        label: 'Liquidity',
        href: 'https://swap.jarvis.farm/#/pool',
        icon: 'LiquidityIcon',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://app.jarvis.farm/farms',
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: 'https://app.jarvis.farm/nests',
  },
      {
     label: 'IFO',
     icon: 'IfoIcon',
     href: 'https://app.jarvis.farm/ifo',
  },
    {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xE1ADce5e647DdF99f3525700825b5f1Ce00849BF',
      },
	]
  },
      {
    label: 'Audit',
    icon: 'AuditIcon',
    items: [
      {
        label: "TechRate (Pending)",
        href: "#",
      },
	        {
        label: "MythX (Pending)",
        href: "#",
      },
	        {
        label: "CertiK (Pending)",
        href: "#",
      },
	        {
        label: "Hacken (Pending)",
        href: "#",
      },

    ],
  },
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/jarvisfarmgroup",
      },
      {
        label: "Announcements",
        href: "https://t.me/jarvisfarmgroup",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/jarvisdotfarm",
  },
    {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/jarvisdotfarm",
      },
      {
        label: "Docs",
        href: "https://docs.jarvis.farm",
      },
       {
         label: "Blog",
         href: "https://jarvisdotfarm.medium.com/",
      },
    ],
  },
]

export default config