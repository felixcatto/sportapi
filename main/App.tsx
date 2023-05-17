import originalAxios from 'axios';
import { SWRConfig } from 'swr';
import { Route, Switch } from 'wouter';
import { IContext } from '../lib/types.js';
import { Context, routes } from '../lib/utils.js';
import { Events } from '../pages/events/index.jsx';

function App() {
  const axios = originalAxios.create();
  axios.interceptors.response.use(
    response => response.data,
    error => {
      console.log(error.response);
      return Promise.reject(error);
    }
  );

  const contextStore: IContext = { axios };

  const swrConfig = { fetcher: axios.get, revalidateOnFocus: false };

  return (
    <Context.Provider value={contextStore}>
      <SWRConfig value={swrConfig}>
        <Switch>
          <Route path={routes.home} component={Events} />
        </Switch>
      </SWRConfig>
    </Context.Provider>
  );
}

export default App;
