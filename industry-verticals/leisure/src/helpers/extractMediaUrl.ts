import { MANDAI_LOGO_MEDIA_ID, MANDAI_LOGO_SRC } from '@/constants/brand';

const MEDIA_LIBRARY_FALLBACKS: Record<string, string> = {
  [MANDAI_LOGO_MEDIA_ID]: MANDAI_LOGO_SRC,
};

const isDamOrMissingUrl = (url: string): boolean => {
  return (
    !url ||
    url.includes('sitecoresandbox.cloud') ||
    url.includes('/api/public/content/') ||
    url.includes('dam-id=')
  );
};

const normalizeMediaId = (id: string): string => id.replace(/[{}]/g, '').toUpperCase();

const fallbackForMediaId = (mediaId: string | undefined): string | undefined => {
  if (!mediaId) {
    return undefined;
  }
  return MEDIA_LIBRARY_FALLBACKS[normalizeMediaId(mediaId)];
};

/**
 * Extracts a usable URL from a Sitecore rendering-parameter image string.
 * Pages stores media-library assignments as `<image mediaid="..." mediaurl="..." />`
 * and may also include `src`. Formalux DAM leftovers are ignored.
 */
export function extractMediaUrl(param: string | undefined): string | undefined {
  if (!param) {
    return undefined;
  }

  const trimmed = param.trim();
  if ((trimmed.startsWith('/') || /^https?:\/\//i.test(trimmed)) && !isDamOrMissingUrl(trimmed)) {
    return trimmed;
  }

  const mediaId = param.match(/mediaid="\{?([0-9A-Fa-f-]+)\}?"/i)?.[1];
  const mappedSrc = fallbackForMediaId(mediaId);
  if (mappedSrc) {
    return mappedSrc;
  }

  const mediaUrl = param.match(/mediaurl="([^"]*)"/i)?.[1];
  if (mediaUrl && !isDamOrMissingUrl(mediaUrl)) {
    return mediaUrl;
  }

  const src = param.match(/(?:^|\s)src="([^"]*)"/i)?.[1];
  if (src && !isDamOrMissingUrl(src)) {
    return src;
  }

  if (mediaId) {
    return `/-/media/${normalizeMediaId(mediaId).toLowerCase()}.ashx`;
  }

  return undefined;
}
