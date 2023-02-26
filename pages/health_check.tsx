import type { NextPage } from 'next';

export const getServerSideProps = async () => ({
  props: {
    layout: 'notLogin',
  },
});

const HealthCheck: NextPage = () => {
  return <>OK</>;
};

export default HealthCheck;
