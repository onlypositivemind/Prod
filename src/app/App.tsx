import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from 'shared/lib/classNames/classNames';
import 'app/styles/index.scss';

export const App = () => {
    const [theme] = useTheme();
    return (
        <div className={classNames('app', [theme], {})}>
            <Header />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};
