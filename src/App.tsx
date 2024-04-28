import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser } from 'react-admin';
import { dataProvider } from './providers/dataProvider';
import post from './operations/post';
import comments from './operations/comments';

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name='users' list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    <Resource name='posts' {...post} />
    <Resource name='comments' {...comments} />
  </Admin>
);
