import Head from 'next/head';
import NavBar from './NavBar';
import Header from './Header';

const Layout = (props) => {
  return (
    <div className="container">
      <Head>
        <title>CocktailSearch</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap"
          rel="stylesheet"
        ></link>
        <script
          src="https://apis.google.com/js/platform.js"
          async
          defer
        ></script>
      </Head>

      <Header />
      <NavBar className="NavBar" setDrinks={props.setDrinks} />
      <div className="Content">{props.children}</div>
    </div>
  );
};

export default Layout;