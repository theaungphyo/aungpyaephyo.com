const PageTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className='pb-12'>
      <h1 className='animate-in text-3xl font-bold tracking-tight text-primary mb-2 font-space'>
        {title}
      </h1>
      <p className='animate-in text-secondary-foreground/50'>{description}</p>
    </div>
  );
};

export default PageTitle;
