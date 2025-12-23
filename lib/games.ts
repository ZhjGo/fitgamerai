import { Game } from "@/types/game";

export const games: Game[] = [
    {
        "id": "fruit-catcher",
        "en": {
            "title": "Fruit Catcher",
            "description": "Catch falling fruits using your body motion!",
            "thumbnail": "/games/fruit-catcher/thumbnail.png",
            "category": "Action",
            "tags": [
                "Motion",
                "Vision Sensing",
                "Arcade"
            ],
            "seo": {
                "title": "Fruit Catcher - Webcam Motion Game",
                "description": "Play Fruit Catcher using your webcam motion detection. No controller needed!",
                "keywords": [
                    "fruit catcher",
                    "motion game",
                    "webcam game",
                    "motion detection"
                ]
            }
        },
        "zh": {
            "title": "接水果",
            "description": "通过身体移动来捕捉掉落的水果！",
            "thumbnail": "/games/fruit-catcher/thumbnail.png",
            "category": "动作",
            "tags": [
                "体感",
                "视觉感应",
                "街机"
            ],
            "seo": {
                "title": "接水果 - 网页摄像头感应游戏",
                "description": "无需控制器，仅需摄像头即可体验接水果游戏！",
                "keywords": [
                    "接水果",
                    "体感游戏",
                    "摄像头游戏",
                    "动作感应"
                ]
            }
        }
    },
    {
        "id": "nose-flappy",
        "en": {
            "title": "Nose Flappy",
            "description": "Control the bird by moving your head up and down! Pass through the pipes to score.",
            "thumbnail": "/games/nose-flappy/thumbnail.png",
            "category": "Action",
            "tags": [
                "Motion",
                "Skill",
                "Webcam",
                "Casual"
            ],
            "seo": {
                "title": "Nose Flappy - Head Motion Control Game",
                "description": "A Flappy Bird clone where you control the height with your nose height via webcam.",
                "keywords": [
                    "nose flappy",
                    "motion game",
                    "face tracking game",
                    "flappy bird clone"
                ]
            }
        },
        "zh": {
            "title": "体感 Flappy",
            "description": "通过上下移动头部来控制小鸟！穿过水管得分。",
            "thumbnail": "/games/nose-flappy/thumbnail.png",
            "category": "动作",
            "tags": [
                "体感",
                "技巧",
                "摄像头",
                "休闲"
            ],
            "seo": {
                "title": "体感 Flappy - 头部动作感应游戏",
                "description": "使用面部追踪技术，通过头部高度控制飞行。经典的 Flappy 玩法，全新的体感操控。",
                "keywords": [
                    "接水果",
                    "体感游戏",
                    "动作感应",
                    "Flappy Bird"
                ]
            }
        }
    },
    {
        "id": "happy-bubble-pop",
        "en": {
            "title": "Happy Bubble Pop",
            "description": "Colorful bubbles keep popping up. Reach out and pop them to relax!",
            "thumbnail": "/games/happy-bubble-pop/thumbnail.png",
            "category": "Casual",
            "tags": [
                "Hand",
                "Motion",
                "Relaxing",
                "Vision"
            ],
            "seo": {
                "title": "Happy Bubble Pop - Vision Interactive Game",
                "description": "Use vision sensing to pop colorful bubbles in the air for a relaxing experience.",
                "keywords": [
                    "happy bubble pop",
                    "motion sensing",
                    "web game",
                    "hand tracking",
                    "relaxing game",
                    "pop bubbles"
                ]
            }
        },
        "zh": {
            "title": "开心戳泡泡",
            "description": "不断冒出的彩色泡泡，伸手戳破它们，超级解压！",
            "thumbnail": "/games/happy-bubble-pop/thumbnail.png",
            "category": "休闲",
            "tags": [
                "手部交互",
                "动作感应",
                "解压",
                "视觉感应"
            ],
            "seo": {
                "title": "开心戳泡泡 - 视觉交互游戏",
                "description": "使用视觉识别技术，在空中戳破彩色泡泡，享受轻松解压的互动体验。",
                "keywords": [
                    "开心戳泡泡",
                    "动作感应",
                    "网页游戏",
                    "视觉交互",
                    "解压游戏",
                    "戳泡泡"
                ]
            }
        }
    },
    {
        "id": "head-ball-pop",
        "en": {
            "title": "Head Ball Pop",
            "description": "Use your head to keep the beach ball up! Hands are not allowed.",
            "thumbnail": "/games/head-ball-pop/thumbnail.png",
            "category": "Action",
            "tags": [
                "Head Control",
                "Physics",
                "Vision",
                "Beach"
            ],
            "seo": {
                "title": "Head Ball Pop - Face Motion Control Game",
                "description": "Bounce a colorful beach ball using only your head! A fun vision sensing game with physics.",
                "keywords": [
                    "head ball pop",
                    "face tracking",
                    "webcam game",
                    "physics game",
                    "beach ball"
                ]
            }
        },
        "zh": {
            "title": "头球顶顶乐",
            "description": "只能用头去顶沙滩球，不能让它落地！",
            "thumbnail": "/games/head-ball-pop/thumbnail.png",
            "category": "动作",
            "tags": [
                "头部控制",
                "物理模拟",
                "视觉感应",
                "沙滩"
            ],
            "seo": {
                "title": "头球顶顶乐 - 面部动作识别体感游戏",
                "description": "用头去顶色彩斑斓的沙滩球，不让它落地！基于视觉识别的趣味体感游戏。",
                "keywords": [
                    "头球顶顶乐",
                    "面部追踪",
                    "动作感应",
                    "网页游戏",
                    "沙滩球"
                ]
            }
        }
    }

];

export const getGameById = (id: string) => games.find((game) => game.id === id);
