import type { NextPage } from 'next';

export const getServerSideProps = async () => ({
  props: {
    layout: 'clientShare',
  },
});

const HealthCheck: NextPage = () => {
  return <>OK</>;
};

export default HealthCheck;
