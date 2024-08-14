// _document.js to define the general structure of our page
import Document, { Html, Head, Main, NextScript } from 'next/document';




class MyDocument extends Document{
  render(){
    return(
      <Html lang='en'>
        <Head>
          <body>
            <Main/>
            <NextScript />
            <div id='notifications'></div>
          </body>
        </Head>
      </Html>
    );
  }
}

export default MyDocument;