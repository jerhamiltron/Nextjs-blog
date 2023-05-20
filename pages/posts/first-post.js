import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';

const firstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src='https://connect.facebook.net/en_US/sdk.js'
        strategy='lazyOnLoad'
        onLoad={() =>
          console.log(`Script loaded correctly, window.FB has been populated`)
        }
      />
      <Image
        src='/images/profile.jpg'
        height={144}
        width={144}
        alt='Your Name'
      />
      <h1>First Post</h1>
      <h2>
        <Link href='/'>Back to home</Link>
      </h2>
    </>
  );
};

export default firstPost;
