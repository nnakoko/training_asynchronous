import { Article } from '../types/Article';

export const searchQiita = async (keyword: string): Promise<Article[]> => {
    // Qiita APIにリクエストを送るURLを設定
    const url = `https://qiita.com/api/v2/items?query=title:${keyword}&per_page=10`;

    // fetchでAPIリクエストを送信
    const response = await fetch(url, {
        headers: {
            Authorization: 'Bearer 3bc0cc0d6fb76e3207516f1300393bffaae00445',
        },
    });

    // レスポンスをJSON形式に変換
    const data = await response.json();

    // 必要なデータを取り出して返す
    return data.map((item: any) => ({
        title: item.title,
        user: {
            id: item.user.id,
            profileImageUrl: item.user.profile_image_url,
        },
        likesCount: item.likes_count,
        tags: item.tags.map((tag: any) => tag.name),
        createdAt: item.created_at,
        url: item.url,
    }));
};

export default searchQiita
