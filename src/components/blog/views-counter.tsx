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

  return (
    <span className='font-mono text-neutral-600 dark:text-neutral-400'>
      {`${number.toLocaleString()} views`}
    </span>
  );
}

export default ViewCounter;
