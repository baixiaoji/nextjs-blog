import Head from 'next/head';
import Link from 'next/link';
import jpeg from 'assets/images/timg.jpeg';
import {GetServerSideProps, NextPage} from "next";
import {UAParser} from 'ua-parser-js'

type Props = {
    browser: {
        name: string;
        version: string;
        major: string;
    }
}
const Home: NextPage<Props> = (props) => {
    const {browser} = props;

  return (
    <div className="container">
      <h2>Home page</h2>
      <Link href='posts/first-post'>
        <a>第一篇</a>
      </Link>
        your Browser {browser.name}

      <img src={jpeg} width='300'/>
    </div>
  );
}
export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const ua = context.req.headers['user-agent'];
    const result = new UAParser(ua).getBrowser();
    return {
        props: {
            browser: result,
        },
    }
}
