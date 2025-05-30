import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PropperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
import PropTypes from 'prop-types';
//content
const cx = classNames.bind(styles);

const defaultFn = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  const renderResults = (attrs) => (
    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
      <PropperWrapper className={cx('menu-popper')}>
        {history.length > 1 && (
          <Header title={current.title} onBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))} />
        )}
        <div className={cx('menu-body')}> {renderItems()}</div>
      </PropperWrapper>
    </div>
  );
  const handleResetToFirstPage = () => setHistory((prev) => prev.slice(0, 1));
  return (
    <Tippy
      interactive
      delay={[0, 700]}
      offset={[12, 8]}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={renderResults}
      onHide={handleResetToFirstPage}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};
export default Menu;
