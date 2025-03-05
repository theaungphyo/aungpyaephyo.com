import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <section className="container-wrapper py-8">
      <article className="container prose dark:prose-invert">
        {children}
      </article>
    </section>
  );
};

export default Layout;
