import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import NotFoundPage from '@containers/NotFoundPage'
import PersonPage from '@containers/PersonPage';
import FavoritePage from '@containers/FavoritePage';
import SearchPage from '@containers/SearchPage';
import ErrorMessage from '@components/ErrorMessage';

const routesConfig = [
    {
        path: '/',
        exact: true,
        element: <HomePage />
    }, 
    {
        path: '/people',
        exact: true,
        element: <PeoplePage />
    },
    {
        path: '/favorite',
        exact: true,
        element: <FavoritePage />
    },
    {
        path: '/search',
        exact: true,
        element: <SearchPage />
    },
    {
        path: '/people/:id',
        exact: true,
        element: <PersonPage />
    },
    {
        path: '/fail',
        exact: true,
        element: <ErrorMessage />
    },
    {
        path: 'not-found',
        exact: false,
        element: <NotFoundPage />
    },
    {
        path: '*',
        exact: false,
        element: <NotFoundPage />
    }
];

export default routesConfig;