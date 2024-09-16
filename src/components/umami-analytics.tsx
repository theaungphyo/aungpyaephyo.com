import Script from 'next/script';

const UmamiAnalytics = () => {
  return (
    <>
      <Script
        async
        src={'https://cloud.umami.is/script.js'}
        data-website-id={process.env.UMAMI_WEBSITE_ID}
      />
    </>
  );
};

export default UmamiAnalytics;
