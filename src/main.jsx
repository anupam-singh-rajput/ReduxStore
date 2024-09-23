import './index.css'
import App from './App'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Step 1: Create a QueryClient instance
const queryClient = new QueryClient();

import {Provider} from 'react-redux'
import store from './store/store'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
  </BrowserRouter>,
)
