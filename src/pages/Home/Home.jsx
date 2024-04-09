import PageTitle from '../../components/PageTitle/PageTitle';
import css from './Home.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <PageTitle>Welcome!!!</PageTitle>
    </div>
  );
}
