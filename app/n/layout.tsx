import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <section className="container-wrapper pt-8">
      <article className="container prose">{children}</article>
    </section>
  );
};

export default Layout;
