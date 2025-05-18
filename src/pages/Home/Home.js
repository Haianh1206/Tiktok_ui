import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HomeItem from './HomeItem';
//import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx('wrapper')}>
      <HomeItem />
    </div>
  );
}

export default Home;
