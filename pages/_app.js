import { Provider } from "react-redux";

import "@/styles/globals.css";
import Layout from "@/Components/Layout";
import store from "@/store";
function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
