const books = [
    {
        "id": "b1",
        "title": "蓝色小药丸",
        "image": "img/books/蓝色小药丸.jpg",
        "type": "pdf",
        "lan": "简体中文",
        "pages": 208,
        "tags": [
            "漫画"
        ],
        "rating": 8.8
    },
    {
        "id": "b2",
        "title": "香水",
        "image": "img/books/香水.jpg",
        "type": "epub",
        "lan": "简体中文",
        "pages": 272,
        "tags": [],
        "rating": 8.8
    },
    {
        "id": "b3",
        "title": "淑女的眼泪",
        "image": "img/books/淑女的眼泪.jpg",
        "type": "epub",
        "lan": "简体中文",
        "pages": 340,
        "tags": [],
        "rating": 7.5
    },
    {
        "id": "b4",
        "title": "把妹达人圣经",
        "image": "img/books/把妹达人圣经.jpg",
        "type": "epub",
        "lan": "简体中文",
        "pages": 292,
        "tags": [],
        "rating": 7.1
    },
    {
        "id": "b5",
        "title": "月經不平等",
        "image": "img/books/月經不平等.jpg",
        "type": "epub",
        "lan": "繁体中文",
        "pages": 174,
        "tags": [],
        "rating": "无"
    },
    {
        "id": "b6",
        "title": "老公怎麼還不去死",
        "image": "img/books/老公怎麼還不去死.jpg",
        "type": "epub",
        "lan": "繁体中文",
        "pages": 165,
        "tags": [],
        "rating": "无"
    },
    {
        "id": "b7",
        "title": "莱温斯基自白录",
        "image": "img/books/莱温斯基自白录.jpg",
        "type": "pdf",
        "lan": "简体中文",
        "pages": 671,
        "tags": [],
        "rating": 7.1
    },
    {
        "id": "b8",
        "title": "女人其實都想要!",
        "image": "img/books/女人其實都想要!.jpg",
        "type": "pdf",
        "lan": "繁体中文",
        "pages": 160,
        "tags": [],
        "rating": 7.6
    },
    {
        "id": "b9",
        "title": "极致爱抚1",
        "image": "img/books/极致爱抚1.jpg",
        "type": "pdf",
        "lan": "繁体中文",
        "pages": 224,
        "tags": [],
        "rating": 6
    },
    {
        "id": "b10",
        "title": "极致爱抚2",
        "image": "img/books/极致爱抚2.jpg",
        "type": "pdf",
        "lan": "繁体中文",
        "pages": 207,
        "tags": [],
        "rating": 6.2
    },
    {
        "id": "b11",
        "title": "體貼性愛祕技",
        "image": "img/books/體貼性愛祕技.jpg",
        "type": "pdf",
        "lan": "繁体中文",
        "pages": 224,
        "tags": [],
        "rating": 8.1
    },
    {
        "id": "b12",
        "title": "男性多重高潮",
        "image": "img/books/男性多重高潮.jpg",
        "type": "pdf",
        "lan": "繁体中文",
        "pages": 240,
        "tags": [],
        "rating": 8
    },
    {
        "id": "b13",
        "title": "圖解天王AV男優清水健萬人斬性愛密技",
        "image": "img/books/圖解天王AV男優清水健萬人斬性愛密技.jpg",
        "type": "pdf",
        "lan": "繁体中文",
        "pages": 162,
        "tags": [],
        "rating": "无"
    },
    {
        "id": "b14",
        "title": "完美伴侣缓慢性爱",
        "image": "img/books/完美伴侣缓慢性爱.jpg",
        "type": "pdf",
        "lan": "简体中文",
        "pages": 192,
        "tags": [],
        "rating": 7.7
    },
    {
        "id": "b15",
        "title": "男人就愛吃這套!",
        "image": "img/books/男人就愛吃這套!.jpg",
        "type": "pdf",
        "lan": "繁体中文",
        "pages": 144,
        "tags": [],
        "rating": 6.3
    },
    {
        "id": "b16",
        "title": "給想體驗究極性愛的妳",
        "image": "img/books/給想體驗究極性愛的妳.jpg",
        "type": "pdf",
        "lan": "繁体中文",
        "pages": 129,
        "tags": [],
        "rating": "无"
    },
    {
        "id": "b17",
        "title": "性与艺术",
        "image": "img/books/性与艺术.jpg",
        "type": "pdf",
        "lan": "简体中文",
        "pages": 393,
        "tags": [],
        "rating": 8.1
    },
    {
        "id": "b18",
        "title": "情色论",
        "image": "img/books/情色论.jpg",
        "type": "pdf",
        "lan": "繁体中文",
        "pages": 332,
        "tags": [],
        "rating": 8.7
    },
    {
        "id": "b19",
        "title": "性工作",
        "image": "img/books/性工作.jpg",
        "type": "pdf",
        "lan": "简体中文",
        "pages": 348,
        "tags": [],
        "rating": 8.6
    },
    {
        "id": "b20",
        "title": "樓鳳，性淘金產業大揭密",
        "image": "img/books/樓鳳，性淘金產業大揭密.jpg",
        "type": "pdf",
        "lan": "繁体中文",
        "pages": 169,
        "tags": [],
        "rating": "无"
    },
    {
        "id": "b21",
        "title": "和美写美_三上悠亚花魁写真集",
        "image": "img/books/和美写美_三上悠亚花魁写真集.jpg",
        "type": "pdf",
        "lan": "繁体中文",
        "pages": 128,
        "tags": [],
        "rating": "无"
    },
    {
        "id": "b22",
        "title": "SM——一个受虐狂的采访笔记",
        "image": "img/books/SM——一个受虐狂的采访笔记.jpg",
        "type": "epub",
        "lan": "简体中文",
        "pages": 150,
        "tags": [
            "SM"
        ],
        "rating": 7.4
    },
    {
        "id": "b23",
        "title": "手槍女王：一個從業職人的真情告白",
        "image": "img/books/手槍女王：一個從業職人的真情告白.jpg",
        "type": "epub",
        "lan": "繁体中文",
        "pages": 247,
        "tags": [],
        "rating": "无"
    },
    {
        "id": "b24",
        "title": "我要的歡愉你該懂",
        "image": "img/books/我要的歡愉你該懂.jpg",
        "type": "pdf",
        "lan": "繁体中文",
        "pages": 272,
        "tags": [],
        "rating": "无"
    },
    {
        "id": "b25",
        "title": "性本自然",
        "image": "img/books/性本自然.jpg",
        "type": "pdf",
        "lan": "简体中文",
        "pages": 245,
        "tags": [],
        "rating": 8.2
    },
    {
        "id": "b26",
        "title": "爽經",
        "image": "img/books/爽經.jpg",
        "type": "pdf",
        "lan": "繁体中文",
        "pages": 304,
        "tags": [],
        "rating": 6.5
    },
    {
        "id": "b27",
        "title": "AV現場",
        "image": "img/books/AV現場.jpg",
        "type": "pdf",
        "lan": "繁体中文",
        "pages": 204,
        "tags": [],
        "rating": 7.2
    },
    {
        "id": "b28",
        "title": "成人漫畫表現史",
        "image": "img/books/成人漫畫表現史.jpg",
        "type": "pdf",
        "lan": "繁体中文",
        "pages": 392,
        "tags": [],
        "rating": 7.3
    },
    {
        "id": "b29",
        "title": "巨乳研究室",
        "image": "img/books/巨乳研究室.jpg",
        "type": "pdf",
        "lan": "繁体中文",
        "pages": 157,
        "tags": [],
        "rating": "无"
    },
    {
        "id": "b30",
        "title": "东京不热",
        "image": "img/books/东京不热.jpg",
        "type": "pdf",
        "lan": "简体中文",
        "pages": 240,
        "tags": [],
        "rating": 5.7
    },
    {
        "id": "b31",
        "title": "妓女与文人",
        "image": "img/books/妓女与文人.jpg",
        "type": "pdf",
        "lan": "简体中文",
        "pages": 199,
        "tags": [],
        "rating": 6.6
    },
    {
        "id": "b32",
        "title": "繩縛本事 ",
        "image": "img/books/繩縛本事 .jpg",
        "type": "pdf",
        "lan": "繁体中文",
        "pages": 129,
        "tags": [],
        "rating": "无"
    },
    {
        "id": "b33",
        "title": "爱经",
        "image": "img/books/爱经.jpg",
        "type": "pdf",
        "lan": "简体中文",
        "pages": 243,
        "tags": [],
        "rating": 6.4
    },
    {
        "id": "b34",
        "title": "我的身体我的心",
        "image": "img/books/我的身体我的心.jpg",
        "type": "pdf",
        "lan": "简体中文",
        "pages": 160,
        "tags": [
            "SM"
        ],
        "rating": "无"
    },
    {
        "id": "b35",
        "title": "我的身体我的心2",
        "image": "img/books/我的身体我的心2.jpg",
        "type": "pdf",
        "lan": "简体中文",
        "pages": 132,
        "tags": [
            "SM"
        ],
        "rating": "无"
    },
    {
        "id": "b36",
        "title": "AV春秋",
        "image": "img/books/AV春秋.jpg",
        "type": "pdf",
        "lan": "繁体中文",
        "pages": 139,
        "tags": [],
        "rating": "无"
    },
    {
        "id": "b37",
        "title": "一本书让你快速变身性爱高手",
        "image": "img/books/一本书让你快速变身性爱高手.jpg",
        "type": "pdf",
        "lan": "简体中文",
        "pages": 69,
        "tags": [],
        "rating": "无"
    },
    {
        "id": "b38",
        "title": "愛．慾 浮世繪",
        "image": "img/books/愛．慾 浮世繪.jpg",
        "type": "pdf",
        "lan": "繁体中文",
        "pages": 359,
        "tags": [],
        "rating": "无"
    },
    {
        "id": "b39",
        "title": "妓史星河",
        "image": "img/books/妓史星河.jpg",
        "type": "pdf",
        "lan": "简体中文",
        "pages": 102,
        "tags": [],
        "rating": "无"
    },
    {
        "id": "b40",
        "title": "中国娼妓史",
        "image": "img/books/中国娼妓史.jpg",
        "type": "pdf",
        "lan": "简体中文",
        "pages": 392,
        "tags": [],
        "rating": 6.9
    },
    {
        "id": "b41",
        "title": "柏拉图式性爱",
        "image": "img/books/柏拉图式性爱.jpg",
        "type": "pdf",
        "lan": "简体中文",
        "pages": 254,
        "tags": [],
        "rating": 6.9
    },
    {
        "id": "b42",
        "title": "女性的性爱动机：从寻求刺激到企图报复",
        "image": "img/books/女性的性爱动机：从寻求刺激到企图报复.jpg",
        "type": "pdf",
        "lan": "简体中文",
        "pages": 463,
        "tags": [],
        "rating": 7.1
    },
    {
        "id": "b43",
        "title": "女醫師教你高潮迭起的性愛",
        "image": "img/books/女醫師教你高潮迭起的性愛.jpg",
        "type": "pdf",
        "lan": "繁体中文",
        "pages": 133,
        "tags": [],
        "rating": 6.6
    },
    {
        "id": "b44",
        "title": "我的妓女生涯",
        "image": "img/books/我的妓女生涯.jpg",
        "type": "epub",
        "lan": "简体中文",
        "pages": 226,
        "tags": [],
        "rating": 8.2
    },
    {
        "id": "b45",
        "title": "女医检师现身说法教你高潮一直来一直来",
        "image": "img/books/女医检师现身说法教你高潮一直来一直来.jpg",
        "type": "pdf",
        "lan": "简体中文",
        "pages": 226,
        "tags": [],
        "rating": 6
    },
    {
        "id": "b46",
        "title": "歡場女孩",
        "image": "img/books/歡場女孩.jpg",
        "type": "epub",
        "lan": "繁体中文",
        "pages": 323,
        "tags": [],
        "rating": 7.7
    },
    {
        "id": "b47",
        "title": "紅線：我的性紀錄",
        "image": "img/books/紅線：我的性紀錄.jpg",
        "type": "epub",
        "lan": "繁体中文",
        "pages": 368,
        "tags": [],
        "rating": "无"
    },
    {
        "id": "b48",
        "title": "日本AV影像史",
        "image": "img/books/日本AV影像史.jpg",
        "type": "pdf",
        "lan": "简体中文",
        "pages": 302,
        "tags": [],
        "rating": 6.6
    },
    {
        "id": "b49",
        "title": "细说伪满妓院",
        "image": "img/books/细说伪满妓院.jpg",
        "type": "pdf",
        "lan": "简体中文",
        "pages": 337,
        "tags": [],
        "rating": 7.2
    },
    {
        "id": "b50",
        "title": "天亮以后说分手_19位都市女性一夜情口述实录",
        "image": "img/books/天亮以后说分手_19位都市女性一夜情口述实录.jpg",
        "type": "epub",
        "lan": "简体中文",
        "pages": 358,
        "tags": [],
        "rating": 6.3
    },
    {
        "id": "b51",
        "title": "AV女优的工作现场",
        "image": "img/books/AV女优的工作现场.jpg",
        "type": "epub",
        "lan": "简体中文",
        "pages": 148,
        "tags": [],
        "rating": 6.2
    },
    {
        "id": "b52",
        "title": "麻美姐姐教你手放這裡女人會很想要",
        "image": "img/books/麻美姐姐教你手放這裡女人會很想要.jpg",
        "type": "epub",
        "lan": "繁体中文",
        "pages": 87,
        "tags": [],
        "rating": "无"
    },
    {
        "id": "b53",
        "title": "小恶魔教你极致性爱",
        "image": "img/books/小恶魔教你极致性爱.jpg",
        "type": "epub",
        "lan": "繁体中文",
        "pages": 174,
        "tags": [],
        "rating": 6.1
    },
    {
        "id": "b54",
        "title": "性之变：21世纪中国人的性生活",
        "image": "img/books/性之变：21世纪中国人的性生活.jpg",
        "type": "epub",
        "lan": "简体中文",
        "pages": 427,
        "tags": [],
        "rating": 8.1
    }
];