'use client';
import { highlight } from 'sugar-high';

const CodeBlock = ({
  children,
  filename,
}: {
  children: string;
  filename: string;
}) => {
  const codeHTML = highlight(children.trim());
  return (
    <>
      <div className='relative grid grid-cols-3 items-center bg-neutral-200 dark:bg-neutral-900 border-0 text-black dark:text-white rounded-t-lg px-3 pt-3 pb-2 mt-4'>
        <div className='w-full flex justify-start items-center gap-1.5'>
          <span className='size-2.5 rounded-full bg-red-500'></span>
          <span className='size-2.5 rounded-full bg-yellow-500'></span>
          <span className='size-2.5 rounded-full bg-green-500'></span>
        </div>
        <span className='text-xs w-full text-center'>{filename}</span>
      </div>
      <pre dangerouslySetInnerHTML={{ __html: codeHTML }} />
    </>
  );
};
export default CodeBlock;
