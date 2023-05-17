import { SWRConfig } from 'swr';
import { Route, Switch } from 'wouter';
import { routes } from '../lib/utils.js';
import { Events } from '../pages/events/index.jsx';

function App() {
  return (
    <SWRConfig value={{ revalidateOnFocus: false }}>
      <Switch>
        <Route path={routes.home} component={Events} />
      </Switch>
    </SWRConfig>
  );
}

export default App;
