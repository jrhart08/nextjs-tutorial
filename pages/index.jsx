import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = ({ time, bpi }) => (
  <Layout>
    <h1>Welcome to BitzPrice</h1>
    Check the current bitcoin rate
    <Prices bpi={bpi} />
    Last Updated: {time.updated}
  </Layout>
);

// This is a next.js property.
// This gets initial props used for the server-side rendering.
Index.getInitialProps = async () => {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const { time, bpi } = await res.json();

  return { time, bpi };
};

export default Index;
