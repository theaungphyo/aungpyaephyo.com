type Props = {
  href: `https://${string}`;
  label: string;
};

const Button = (props: Props) => (
  <a
    href={props.href}
    className='hover:text-neutral-1000 shadow-xs flex flex-none cursor-pointer items-center justify-center rounded-md border border-neutral-400 border-opacity-30 bg-transparent px-4 py-2 font-semibold leading-none text-neutral-700 opacity-100 transition-all hover:border-opacity-50 hover:shadow-sm dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:text-white sm:space-x-2'
    target='_blank'
    rel='noopener noreferrer'
  >
    {props.label}
  </a>
);

type SProps = {
  canonicalUrl: string;
  slug: string;
  title: string;
};

const ShareLinks = (props: SProps) => (
  <section className='my-8'>
    <p className='pb-6 text-2xl font-semibold'>Enjoyed the article? 😍</p>
    <div className='grid grid-cols-1 gap-3 sm:grid-flow-col sm:grid-cols-[repeat(3,max-content)]'>
      <Button
        label='Share on Twitter'
        href={`https://x.com/intent/tweet?text=${props.title}&original_referer=${props.canonicalUrl}&via=aungpyaephyo_`}
      />

      <Button
        label='Discuss on Twitter'
        href={`https://x.com/search?q=${props.canonicalUrl}`}
      />
    </div>
  </section>
);

export default ShareLinks;
