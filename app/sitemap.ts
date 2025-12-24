import { MetadataRoute } from 'next'
import { games } from '@/lib/games'
import { Game } from '@/types/game'

const BASE_URL = 'https://fitgamerai.com'

export default function sitemap(): MetadataRoute.Sitemap {
    const locales = ['en', 'zh']

    // 基础页面
    const routes = locales.flatMap((lang) => [
        {
            url: `${BASE_URL}/${lang}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1.0,
        }
    ])

    // 游戏页面
    const gameRoutes = locales.flatMap((lang) =>
        games.map((game: Game) => ({
            url: `${BASE_URL}/${lang}/play/${game.id}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }))
    )

    return [...routes, ...gameRoutes]
}
