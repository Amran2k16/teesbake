import Header from "../components/header";
import Head from "next/head";

const Layout = props => {
  return (
    <div>
      <Head>
        <title>Next.js + Contentful</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/lux/bootstrap.min.css"
          type="text/css"
        />
      </Head>
      <Header />
      <div className="">{props.children}</div>
    </div>
  );
};

export default Layout;
