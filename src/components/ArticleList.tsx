import React from 'react';
import { Article } from '../types/Article';

interface ArticleListProps {
    articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
    return (
    <div>
        {articles.map((article) => (
            <div key={article.url} style={{ padding: '16px', borderBottom: '1px solid #ccc' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>{article.title}</h2>
                <p style={{ fontSize: '14px' }}>投稿者: {article.user.id}</p>
                <p style={{ fontSize: '14px' }}>いいね数: {article.likes_count}</p>
                <p style={{ fontSize: '14px' }}>投稿日: {new Date(article.created_at).toLocaleDateString()}</p>
                <p style={{ fontSize: '14px' }}>
                タグ: {article.tags.map((tag) => `#${tag}`).join(' ')}
                </p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                記事を見る
                </a>
            </div>
        ))}
    </div>
    );
};

export default ArticleList;