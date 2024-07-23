'use client';
import { Check, Copy } from 'lucide-react';
import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { highlight } from 'sugar-high';

const CodeBlock = ({
  children,
  filename,
}: {
  children: string;
  filename: string;
}) => {
  const codeHTML = highlight(children.trim());
  const [copy, setCopy] = useState(false);
  const handleChange = () => setCopy((prevState) => !prevState);
  useEffect(() => {
    if (copy) {
      const timeOutId = setTimeout(() => {
        setCopy(false);
      }, 2000);

      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [copy]);
  return (
    <>
      <div className='relative flex justify-between items-center bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 border-b-0 text-black dark:text-white rounded-t-lg px-3 py-2 mt-4'>
        <div>{filename}</div>
        <CopyToClipboard text={children.trim()}>
          <button
            onClick={handleChange}
            className='p-1 rounded hover:bg-neutral-500 transition-colors duration-500'
          >
            {copy ? <Check size={17} /> : <Copy size={17} />}
          </button>
        </CopyToClipboard>
      </div>
      <pre dangerouslySetInnerHTML={{ __html: codeHTML }} />
    </>
  );
};
export default CodeBlock;
