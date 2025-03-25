import React, { useState } from 'react';

interface SearchBoxProps {
    onSearch: (keyword: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
    const [keyword, setKeyword] = useState('');

    const handleSearch = () => {
        onSearch(keyword);
    };

    return (
        <div style={{ padding: '20px' }}>
            <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="検索ワードを入力してください"
            style={{ fontSize: '16px', padding: '8px', width: '80%' }}
            />
            <button onClick={handleSearch} style={{ padding: '8px 16px', marginLeft: '8px' }}>
            検索
            </button>
        </div>
    );
};

export default SearchBox;