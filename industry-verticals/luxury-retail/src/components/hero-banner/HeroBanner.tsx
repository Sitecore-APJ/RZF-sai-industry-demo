import {
  Field,
  ImageField,
  NextImage as ContentSdkImage,
  Text as ContentSdkText,
  RichText as ContentSdkRichText,
  useSitecore,
} from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from '@/lib/component-props';

interface Fields {
  Image: ImageField;
  Video: ImageField;
  Title: Field<string>;
  Description: Field<string>;
}

interface HeroBannerProps extends ComponentProps {
  fields: Fields;
}

const heroTextGlassClassName =
  'max-w-3xl rounded-lg border border-white/20 bg-black/30 px-5 py-4 backdrop-blur-md';

const HeroBannerCommon = ({
  params,
  fields,
  children,
  topContent,
}: HeroBannerProps & { children: React.ReactNode; topContent?: boolean }) => {
  const { page } = useSitecore();
  const { styles, RenderingIdentifier: id } = params;
  const isPageEditing = page.mode.isEditing;
  const hideGradientOverlay = styles?.includes('hide-gradient-overlay');

  if (!fields) {
    return isPageEditing ? (
      <div className={`component hero-banner h-[320px] max-h-[320px] ${styles}`} id={id}>
        [HERO BANNER]
      </div>
    ) : (
      <></>
    );
  }

  return (
    <section
      className={`component hero-banner ${styles} relative flex h-[320px] max-h-[320px] flex-col items-center overflow-hidden`}
      id={id}
    >
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {!isPageEditing && fields?.Video?.value?.src ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={fields.Image?.value?.src}
          >
            <source src={fields.Video?.value?.src} type="video/webm" />
          </video>
        ) : (
          <ContentSdkImage
            field={fields.Image}
            className="h-full w-full object-cover md:object-bottom"
            priority
          />
        )}
        {/* Gradient overlay */}
        {hideGradientOverlay && (
          <div
            className={`to-foreground/80 absolute inset-0 ${topContent ? 'bg-gradient-to-t' : 'bg-gradient-to-b'} from-transparent from-40%`}
          ></div>
        )}
      </div>

      {children}
    </section>
  );
};

/* ------------------- Default (bottom-left) ------------------- */
export const Default = ({ params, fields, rendering }: HeroBannerProps) => {
  const styles = params.styles || '';
  const reverseLayout = styles.includes('reversed');

  return (
    <HeroBannerCommon params={params} fields={fields} rendering={rendering}>
      <div className="relative flex h-full w-full flex-grow items-end">
        <div className="container mx-auto flex h-full items-end px-4 py-4">
          <div
            className={`flex w-full ${
              reverseLayout ? 'justify-end text-right' : 'justify-start text-left'
            }`}
          >
            <div className={heroTextGlassClassName}>
              <h1 className="font-heading text-background-muted text-3xl tracking-tight capitalize lg:text-4xl">
                <ContentSdkText field={fields.Title} />
              </h1>

              <div className="text-background-muted text-md lg:text-lg">
                <ContentSdkRichText field={fields.Description} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroBannerCommon>
  );
};

/* ------------------- TopContent (top-right) ------------------- */
export const TopContent = ({ params, fields, rendering }: HeroBannerProps) => {
  const styles = params.styles || '';
  const reverseLayout = styles.includes('reversed');

  return (
    <HeroBannerCommon params={params} fields={fields} rendering={rendering} topContent>
      <div className="relative flex h-full w-full flex-grow items-start">
        <div className="container mx-auto flex h-full items-start">
          <div
            className={`flex w-full ${
              reverseLayout ? 'justify-start text-left' : 'justify-end text-right'
            }`}
          >
            <div className={heroTextGlassClassName}>
              <h1 className="font-heading text-background-muted text-3xl tracking-tight capitalize lg:text-4xl">
                <ContentSdkText field={fields.Title} />
              </h1>

              <div className="text-background-muted text-md lg:text-lg">
                <ContentSdkRichText field={fields.Description} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroBannerCommon>
  );
};
