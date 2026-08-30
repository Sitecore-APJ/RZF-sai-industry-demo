import { MANDAI_LOGO_MEDIA_ID, MANDAI_LOGO_SRC } from '@/constants/brand';

const MEDIA_LIBRARY_FALLBACKS: Record<string, string> = {
  [MANDAI_LOGO_MEDIA_ID]: MANDAI_LOGO_SRC,
};

type MediaParamObject = {
  src?: string;
  mediaurl?: string;
  mediaid?: string;
  value?: {
    src?: string;
    mediaurl?: string;
    mediaid?: string;
  };
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

const firstUsableUrl = (...candidates: Array<string | undefined>): string | undefined => {
  return candidates.find((url) => url && !isDamOrMissingUrl(url));
};

const extractFromObject = (param: MediaParamObject): string | undefined => {
  const mediaId = param.mediaid || param.value?.mediaid;
  const mappedSrc = fallbackForMediaId(mediaId);
  if (mappedSrc) {
    return mappedSrc;
  }

  const fromFields = firstUsableUrl(
    param.mediaurl,
    param.value?.mediaurl,
    param.src,
    param.value?.src
  );
  if (fromFields) {
    return fromFields;
  }

  if (mediaId) {
    return `/-/media/${normalizeMediaId(mediaId).toLowerCase()}.ashx`;
  }

  return undefined;
};

/**
 * Extracts a usable URL from a Sitecore rendering-parameter image value.
 * Pages may send an XML string (`<image mediaid="..." />`) or an already
 * parsed image object. Formalux DAM leftovers are ignored.
 */
export function extractMediaUrl(param: string | MediaParamObject | undefined): string | undefined {
  if (!param) {
    return undefined;
  }

  if (typeof param === 'object') {
    return extractFromObject(param);
  }

  if (typeof param !== 'string') {
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
