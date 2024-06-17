const GroupTitle = ({ name }: { name: string }) => {
  return (
    <div className={'flex items-end gap-3 mb-5 w-full'}>
      <h2 className={'text-xl font-bold leading-none'}>{name}</h2>
      <hr
        className={
          'w-full border-none m-0 -mt-0.5 h-px bg-slate-700/30 dark:bg-slate-300/30 flex-1'
        }
      />
    </div>
  );
};

export default GroupTitle;
