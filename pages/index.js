import Head from 'next/head';
import Link from 'next/link';
import jpeg from 'assets/images/timg.jpeg';

export default function Home() {
  return (
    <div className="container">
      <h2>Home page</h2>
      <Link href='posts/first-post'>
        <a>第一篇</a>
      </Link>

      <img src={jpeg} width='300'/>
    </div>
  );
}
