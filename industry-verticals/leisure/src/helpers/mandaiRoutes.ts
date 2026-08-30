import { MANDAI_STATIC_PATHS, type MandaiStaticPath } from '@/constants/mandaiSite';

const normalizePath = (path: string): string => {
  if (!path) {
    return '/';
  }

  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  const withoutQuery = withLeadingSlash.split('?')[0].split('#')[0];
  const trimmed = withoutQuery.replace(/\/+$/, '');

  return trimmed === '' ? '/' : trimmed;
};

export const isMandaiStaticPath = (path: string): path is MandaiStaticPath => {
  return (MANDAI_STATIC_PATHS as readonly string[]).includes(normalizePath(path));
};

export const resolveRequestPath = (
  extractedPath: string,
  params?: { path?: string | string[] }
): string => {
  const fromParams = Array.isArray(params?.path)
    ? `/${params.path.join('/')}`
    : typeof params?.path === 'string' && params.path
      ? `/${params.path}`
      : '';

  return normalizePath(fromParams || extractedPath);
};

export const getFormaluxRedirect = (path: string): string | null => {
  const normalized = normalizePath(path);

  if (/(^|\/)(Furniture|Products)(\/|$)/i.test(normalized)) {
    return '/discover';
  }
  if (/(^|\/)Decor(\/|$)/i.test(normalized)) {
    return '/see-and-do';
  }
  if (/(^|\/)About-Us(\/|$)/i.test(normalized)) {
    return '/about';
  }
  if (/(^|\/)Contact(\/|$)/i.test(normalized)) {
    return '/plan-your-visit';
  }
  if (/(^|\/)Articles(\/|$)/i.test(normalized)) {
    return '/see-and-do';
  }
  if (/(^|\/)Landing-Pages(\/|$)/i.test(normalized)) {
    return '/';
  }
  if (/(^|\/)(Checkout|Wishlist)(\/|$)/i.test(normalized)) {
    return '/tickets';
  }

  return null;
};

export const getMandaiPagePath = (path: string): MandaiStaticPath | null => {
  const normalized = normalizePath(path);
  return isMandaiStaticPath(normalized) ? normalized : null;
};
