import { NavItemFields, NavigationProps } from '@/components/navigation/Navigation';
import { MANDAI_NAV } from '@/constants/mandaiSite';

const textField = (value: string) => ({ value });

const createItem = (
  title: string,
  href: string,
  styles: string[],
  children?: NavItemFields[]
): NavItemFields => ({
  Id: `mandai-nav-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  DisplayName: title,
  Title: textField(title),
  NavigationTitle: textField(title),
  Href: href,
  Querystring: '',
  Styles: styles,
  ...(children?.length ? { Children: children } : {}),
});

export const isFormaluxNavigation = (fields: NavigationProps['fields']): boolean => {
  const values = Object.values(fields || {}).filter(Boolean);

  return values.some((item) => {
    const haystack = [
      item.DisplayName,
      item.Href,
      ...(item.Children || []).map((child) => child.Href),
    ]
      .join(' ')
      .toLowerCase();

    return /furniture|decor|forma\s*lux|about-us|\/contact/i.test(haystack);
  });
};

export const buildMandaiNavigationFields = (options?: {
  withRoot?: boolean;
}): NavigationProps['fields'] => {
  const { withRoot = true } = options || {};

  const children = MANDAI_NAV.map((item, index) => {
    const isFirst = index === 0;
    const isLast = index === MANDAI_NAV.length - 1;
    const childItems = item.children?.map((child, childIndex) =>
      createItem(
        child.title,
        child.href,
        [
          'level2',
          `item${childIndex}`,
          childIndex % 2 === 0 ? 'odd' : 'even',
          childIndex === 0 ? 'first' : '',
          childIndex === (item.children?.length || 0) - 1 ? 'last' : '',
        ].filter(Boolean)
      )
    );

    return createItem(
      item.title,
      item.href,
      [
        'level1',
        `item${index}`,
        index % 2 === 0 ? 'odd' : 'even',
        isFirst ? 'first' : '',
        isLast ? 'last' : '',
        childItems?.length ? 'submenu' : '',
      ].filter(Boolean),
      childItems
    );
  });

  if (!withRoot) {
    return children.reduce<NavigationProps['fields']>((acc, item, index) => {
      acc[String(index)] = item;
      return acc;
    }, {});
  }

  return {
    0: createItem('Home', '/', ['level0', 'submenu', 'item0', 'odd', 'first', 'last'], children),
  };
};
