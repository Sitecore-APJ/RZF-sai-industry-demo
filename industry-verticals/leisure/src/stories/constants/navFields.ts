import { MANDAI_NAV_LOGO_PARAM } from '@/constants/brand';
import { createTextField } from '../helpers/createFields';

export const createNavItem = (text: string) => {
  return {
    Id: `${text}-${Date.now()}`,
    Href: '#',
    Querystring: '',
    DisplayName: text,
    Title: createTextField(text),
    NavigationTitle: createTextField(text),
  };
};

export const arrayToObject = <T>(arr: T[]): Record<string, T> =>
  arr.reduce(
    (acc, item, index) => {
      acc[String(index)] = item;
      return acc;
    },
    {} as Record<string, T>
  );

export const navRoot = {
  ...createNavItem('Home'),
  Styles: ['level0', 'submenu', 'item0', 'odd', 'first', 'last', 'active'],
};

export const topLevelPages = [
  {
    ...createNavItem('Discover Mandai'),
    Href: '/discover',
    Styles: ['level1', 'item0', 'odd', 'first'],
    Children: [
      {
        ...createNavItem('Singapore Zoo'),
        Href: '/discover#singapore-zoo',
        Styles: ['level2', 'item0', 'odd', 'first'],
      },
      {
        ...createNavItem('Night Safari'),
        Href: '/discover#night-safari',
        Styles: ['level2', 'item1', 'even'],
      },
      {
        ...createNavItem('Bird Paradise'),
        Href: '/discover#bird-paradise',
        Styles: ['level2', 'item2', 'odd', 'last'],
      },
    ],
  },
  {
    ...createNavItem('Tickets & Passes'),
    Href: '/tickets',
    Styles: ['level1', 'item1', 'even'],
  },
  {
    ...createNavItem('Plan Your Visit'),
    Href: '/plan-your-visit',
    Styles: ['level1', 'item2', 'odd'],
  },
  {
    ...createNavItem('See & Do'),
    Href: '/see-and-do',
    Styles: ['level1', 'item3', 'even', 'last'],
  },
];

export const flatTopLevelPages = [
  {
    ...createNavItem('Discover Mandai'),
    Href: '/discover',
    Styles: ['level0', 'item0', 'odd', 'first', 'flat-level1'],
  },
  {
    ...createNavItem('Tickets & Passes'),
    Href: '/tickets',
    Styles: ['level0', 'item1', 'even', 'flat-level1'],
  },
  {
    ...createNavItem('Plan Your Visit'),
    Href: '/plan-your-visit',
    Styles: ['level0', 'item1', 'even', 'flat-level1'],
  },
  {
    ...createNavItem('Singapore Zoo'),
    Href: '/discover#singapore-zoo',
    Styles: ['level0', 'item0', 'odd', 'first', 'flat-level2'],
  },
  {
    ...createNavItem('Night Safari'),
    Href: '/discover#night-safari',
    Styles: ['level0', 'item1', 'even', 'flat-level2'],
  },
  {
    ...createNavItem('Bird Paradise'),
    Href: '/discover#bird-paradise',
    Styles: ['level0', 'item2', 'odd', 'last', 'flat-level2'],
  },
  {
    ...createNavItem('See & Do'),
    Href: '/see-and-do',
    Styles: ['level0', 'submenu', 'item2', 'odd', 'last', 'flat-level1'],
  },
];

export const getNavigationFields = (options?: { withRoot?: boolean; flat?: boolean }) => {
  const { withRoot = true, flat = false } = options || {};

  const pages = flat ? flatTopLevelPages : topLevelPages;

  if (withRoot) {
    return {
      0: {
        ...navRoot,
        Children: pages,
      },
    };
  }

  return arrayToObject(pages);
};

export const logoParam = MANDAI_NAV_LOGO_PARAM;
