import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './styles/index.scss';

import { ThemeProvider } from './theme/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
);