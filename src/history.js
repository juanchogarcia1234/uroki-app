import { createBrowserHistory } from "history";
//we create it like this instead of BrowserRouter creating it because
//this way it easy to use history inside of actions
export default createBrowserHistory();
