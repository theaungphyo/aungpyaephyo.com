function ViewCounter({
  slug,
  allViews,
}: {
  slug: string;
  allViews: {
    slug: string;
    count: number;
  }[];
  trackView?: boolean;
}) {
  const viewsForSlug = allViews && allViews.find((view) => view.slug === slug);
  const number = Number(viewsForSlug?.count || 0);
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });
  return (
    <span className='font-mono text-neutral-600 dark:text-neutral-400 text-nowrap'>
      {`${formatter.format(number)} views`}
    </span>
  );
}

export default ViewCounter;
