import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import cn from 'classnames';

import { withErrorApi } from '@hoc/withErrorApi';
import { getApiResource } from '@utils/network';
import { API_SEARCH } from '@constants/api';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo';

import icon from './img/cancel.jpg'
import styles from './SearchPage.module.css';

const SearchPage = ({ setErrorApi }) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [people, setPeople] = useState([]);

    const getResponse = async param => {
        const res = await getApiResource(API_SEARCH + param);

        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);

                return {
                    id,
                    name,
                    img,
                }
            });

            setPeople(peopleList)
            setErrorApi(false)
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResponse('');
    }, []);

    const debouncedGetResponse = useCallback(
        debounce(value => getResponse(value), 300),
        []
    );

    const handleInputChange = (event) => {
        const value = event.target.value;

        setInputSearchValue(value);
        debouncedGetResponse(value);
    }

     return (
        <>
            <h1 className="header__text">Search</h1>
        <div className={cn(styles.wrapper__input)}>
            <input 
                type="text"
                value={inputSearchValue}
                onChange={handleInputChange} 
                placeholder="Input characters name"
                classes={styles.input__search}
            />
            <img
                onClick={() => inputSearchValue && debouncedGetResponse('') && setInputSearchValue('')}
                src={icon}
                className={cn(styles.clear, !inputSearchValue && styles.clear__disabled)}
                alt="Clear"
            />
        </div>

            <SearchPageInfo people={people} />
        </>
     )
}

SearchPage.propTypes = {
    setErrorApi: PropTypes.func,
}

export default withErrorApi(SearchPage);