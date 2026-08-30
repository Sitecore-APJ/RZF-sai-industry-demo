import {
  ComponentParams,
  ComponentRendering,
  ImageField,
  LinkField,
  RichTextField,
  TextField,
} from '@sitecore-content-sdk/nextjs';
import { MANDAI_LOGO_ALT, MANDAI_LOGO_SRC } from '@/constants/brand';
import {
  MANDAI_COPYRIGHT,
  MANDAI_FOOTER_COLUMNS,
  MANDAI_FOOTER_DESCRIPTION,
  MANDAI_POLICY,
  MANDAI_TERMS,
} from '@/constants/mandaiSite';
import Link from 'next/link';
import React from 'react';

interface Fields {
  TitleOne: TextField;
  TitleTwo: TextField;
  TitleThree: TextField;
  TitleFour: TextField;
  TitleFive: TextField;
  CopyrightText: TextField;
  PolicyText: LinkField;
  TermsText: LinkField;
  Logo: ImageField;
  Description: RichTextField;
}

type FooterProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: FooterProps) => {
  const id = props.params.RenderingIdentifier;

  return (
    <section className={`component footer relative ${props.params.styles} overflow-hidden`} id={id}>
      <div className="bg-brand text-background-accent">
        <div className="container grid gap-12 py-28.5 lg:grid-cols-[1fr_3fr]">
          <div className="flex flex-col gap-7">
            <div className="sm:max-w-40">
              <img
                src={MANDAI_LOGO_SRC}
                alt={MANDAI_LOGO_ALT}
                className="mandai-footer-logo h-12 w-auto"
              />
            </div>
            <p className="max-w-sm leading-relaxed">{MANDAI_FOOTER_DESCRIPTION}</p>
          </div>
          <div className="grid gap-13 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5 xl:gap-12">
            {MANDAI_FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <div className="text-highlight mb-8 text-lg font-bold">{column.title}</div>
                <div className="space-y-4">
                  {column.links.map((item) => (
                    <div key={item.title}>
                      <Link href={item.href} className="hover:text-highlight">
                        {item.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-foreground text-background-accent">
        <div className="container flex items-center justify-between py-8.5 max-sm:flex-col max-sm:items-start max-sm:gap-10">
          <div className="max-sm:order-2">{MANDAI_COPYRIGHT}</div>
          <div className="flex items-center justify-between gap-20 max-lg:gap-10 max-sm:order-1 max-sm:flex-col max-sm:items-start max-sm:gap-5">
            <Link href={MANDAI_TERMS.href} className="hover:underline">
              {MANDAI_TERMS.text}
            </Link>
            <Link href={MANDAI_POLICY.href} className="hover:underline">
              {MANDAI_POLICY.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
