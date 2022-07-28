//_document has to be added in the root directory of your pages folder
import Document, { Html, Head, Main, NextScript } from "next/document";
//this is the set up to make changes to the overall html document
class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <div id='overlays' />
          {/* this is where we can create elements outside of the regular 
          react document flow this will let us use things like portals  */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
