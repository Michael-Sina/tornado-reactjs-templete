import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
    initialState: {
        userlist : [
            { 
                id: 1,
                name: 'dva',
                email: 'test1@testcomp.com',
                is_admin: true
            },
            { 
                id: 2,
                name: 'test2', 
                email: 'test2@testcomp.com',
                is_admin: false
            }
        ],
        booklist : [
            { 
                id: 1,
                publisher: '講談社',
                author: '佐木飛朗斗・所十三',
                title: '疾風伝説・特攻の拓'
            },
            { 
                id: 2,
                publisher: '講談社',
                author: '藤沢とおる',
                title: '湘南純愛組'
            },
            { 
                id: 3,
                publisher: '小学館',
                author: '西森博之',
                title: '今日から俺は!!'  
            },
            { 
                id: 4,
                publisher: '少年畫報社',
                author: '田中宏',
                title: 'BADBOYS'
            },
            { 
                id: 5,
                publisher: '集英社',
                author: '森田まさのり',
                title: 'ろくでなしBLUES'
            },
            { 
                id: 6,
                publisher: '白泉社',
                author: '森恒二',
                title: 'ホーリーランド'
            }
        ],
    },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/userlist').default);
app.model(require('./models/booklist').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
