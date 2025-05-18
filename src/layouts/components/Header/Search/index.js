import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PropperWrapper } from '~/components/Popper';
import AccountsItem from '~/components/AccountsItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useState, useRef } from 'react';
import { SearchIcon } from '~/components/Icon';
import { useDebounce } from '~/hooks';

import * as searchServices from '~/services/searchService';

//

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounceValue = useDebounce(searchValue, 500);
  const inputRef = useRef();

  useEffect(() => {
    if (!debounceValue.trim()) {
      setSearchResult([]);
      return;
    }
    const fetchApi = async () => {
      setLoading(true);
      const result = await searchServices.search(debounceValue);
      setSearchResult(result);
      setLoading(false);
    };
    fetchApi();
  }, [debounceValue]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };
  // const handleSpace = (e) => {
  //   if (!e.target.value.startsWith('')) {
  //     setSearchValue(e.target.value);
  //   }
  // };
  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <HeadlessTippy
        interactive
        appendTo={() => document.body}
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PropperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountsItem key={result.id} data={result} />
              ))}
            </PropperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Sreach accounts and video"
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button className={cx('clear')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
          <button className={cx('search-btn')} onMouseDown={hanldeSubmit}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </>
  );
}

export default Search;
