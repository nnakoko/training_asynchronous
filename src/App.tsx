import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import ArticleList from './components/ArticleList';
import { searchQiita } from './api/qiita';
import { Article } from './types/Article';

const App: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const handleSearch = async (keyword: string) => {
    const results = await searchQiita(keyword);
    setArticles(results);
  };

  return (
    <div>
      <h1>Qiita 記事検索</h1>
      <SearchBox onSearch={handleSearch} />
      <ArticleList articles={articles} />
    </div>
  );
};

export default App;