import { ArticleFields } from '@/types/article';

export const sortByDateDesc = (
  a: { fields: ArticleFields },
  b: { fields: ArticleFields }
): number => {
  const getTime = (article: { fields: ArticleFields }) =>
    new Date(article.fields.PublishedDate?.value || 0).getTime();

  return getTime(b) - getTime(a);
};

export const getCategoryCounts = (articles: { fields: ArticleFields }[]) =>
  articles.reduce(
    (acc, article) => {
      const name = article.fields.Category?.fields?.Category?.value;
      if (name) {
        acc[name] = { name, count: (acc[name]?.count || 0) + 1 };
      }
      return acc;
    },
    {} as Record<string, { name: string; count: number }>
  );
