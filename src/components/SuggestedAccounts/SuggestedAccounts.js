import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);

function SuggestedAccounts({ lable, following, isSeeAll = false, data = [], onViewChange }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{lable}</p>
      <p className={cx('following')}>{following}</p>
      {data.map((account) => (
        <AccountItem key={account.id} data={account} />
      ))}

      <p className={cx('more-btn')} onClick={() => onViewChange(isSeeAll)}>
        {isSeeAll ? 'See less' : 'See all'}
      </p>
    </div>
  );
}
SuggestedAccounts.propTypes = {
  lable: PropTypes.string.isRequired,
  data: PropTypes.array,
};
export default SuggestedAccounts;
