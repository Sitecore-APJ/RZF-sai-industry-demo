const normalizePath = (path: string): string => {
  if (!path) {
    return '/';
  }

  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  const withoutQuery = withLeadingSlash.split('?')[0].split('#')[0];
  const trimmed = withoutQuery.replace(/\/+$/, '');

  return trimmed === '' ? '/' : trimmed;
};

const LEGACY_OVERLAY_REDIRECTS: Record<string, string> = {
  '/discover': '/Discover',
  '/tickets': '/Tickets',
  '/plan-your-visit': '/Plan-Your-Visit',
  '/see-and-do': '/See-and-Do',
  '/dine-and-shop': '/Dine-and-Shop',
  '/about': '/',
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
  const overlayRedirect = LEGACY_OVERLAY_REDIRECTS[normalized.toLowerCase()];

  if (overlayRedirect && overlayRedirect !== normalized) {
    return overlayRedirect;
  }

  if (/(^|\/)(Furniture|Products)(\/|$)/i.test(normalized)) {
    return '/Discover';
  }
  if (/(^|\/)Decor(\/|$)/i.test(normalized)) {
    return '/See-and-Do';
  }
  if (/(^|\/)About-Us(\/|$)/i.test(normalized)) {
    return '/';
  }
  if (/(^|\/)Contact(\/|$)/i.test(normalized)) {
    return '/Plan-Your-Visit';
  }
  if (/(^|\/)Articles\//i.test(normalized)) {
    return '/See-and-Do';
  }
  if (/(^|\/)Landing-Pages(\/|$)/i.test(normalized)) {
    return '/';
  }
  if (/(^|\/)(Checkout|Wishlist)(\/|$)/i.test(normalized)) {
    return '/Tickets';
  }

  return null;
};
