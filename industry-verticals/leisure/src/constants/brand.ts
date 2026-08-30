/**
 * Mandai Wildlife Reserve brand assets.
 * The header logo is a Navigation rendering parameter (`Logo`) that points
 * at the Sitecore media-library item, not a DAM asset.
 */
export const MANDAI_LOGO_MEDIA_ID = '34E463F3-064F-482F-A1B9-07985BF7A433';
export const MANDAI_LOGO_MEDIA_PATH =
  '/-/media/Project/industry-verticals/mandai-wildlife-reserve/Mandai/logo.png';
export const MANDAI_LOGO_SRC = '/images/mandai-wildlife-reserve-logo.png';
export const MANDAI_LOGO_ALT = 'Mandai Wildlife Reserve';

/**
 * Value Pages stores on Navigation → rendering properties → Logo
 * when the media-library item is assigned.
 */
export const MANDAI_NAV_LOGO_PARAM = `<image mediaid="{${MANDAI_LOGO_MEDIA_ID}}" mediaurl="${MANDAI_LOGO_MEDIA_PATH}" src="${MANDAI_LOGO_MEDIA_PATH}" alt="${MANDAI_LOGO_ALT}" width="300" height="118" />`;
