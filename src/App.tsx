import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser } from 'react-admin';
import { dataProvider } from './providers/dataProvider';
import comments from './operations/comments';

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name='users' list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    <Resource name='comments' {...comments} />
  </Admin>
);
