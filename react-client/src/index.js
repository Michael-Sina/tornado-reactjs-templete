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
    },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/userlist').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
