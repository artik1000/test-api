import axios from "axios";

export const TestModule = {
    state: () => ({
        users:[],
        /*users: [
            {id: 1, avatar:'https://img2.akspic.ru/previews/3/9/1/8/6/168193/168193-paren_v_shleme-motocikletnyj_shlem-motocikl-shlem-odezhda-500x.jpg', name: 'Gosha', email: 'user@mail.net', city: 'Казань', phone: '+7(917)-353-33-55', site: 'https://site.com'},
            {id: 3, avatar:'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', name: 'Sasha', email: 'user@mail.net', city: 'Рязань', phone: '+7(947)-855-36-11', site: 'https://site.com'},
            {id: 5, avatar:'https://i.pinimg.com/736x/14/df/bf/14dfbf0e75988b5daa3aaccddba0eb6d.jpg', name: 'Zakari', email: 'user@mail.net', city: 'Рязань', phone: '+7(947)-954-23-62', site: 'https://site.com'},
            {id: 6, avatar:'https://i.yapx.ru/Ra8I0.jpg', name: 'Johan', email: 'user@mail.net', city: 'Рязань', phone: '+7(947)-652-03-21', site: 'https://site.com'},
            {id: 33, avatar:'https://android-obzor.com/wp-content/uploads/2022/02/1-2-300x300.jpg', name: 'Alexander', email: 'user@mail.net', city: 'Белгород', phone: '+7(947)-550-70-39', site: 'https://site.com'},
            {id: 27, avatar:'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/8d2c78cdc7ee3cffd5e3b3bc22a87c10.jpeg?x-expires=1658012400&x-signature=SEooVfaPyVQMG3DDNP7QXOeGSGg%3D', name: 'Sultan', email: 'user@mail.net', city: 'Москва', phone: '+7(947)-257-63-72', site: 'https://site.com'},
            {id: 25, avatar:'https://i.pinimg.com/736x/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg', name: 'Gregory', email: 'user@mail.net', city: 'Москва', phone: '+7(947)-153-83-11', site: 'https://site.com'},
            {id: 22, avatar:'https://www.meme-arsenal.com/memes/6bd0fe45e3ddadd122fd2aa9b626e56b.jpg', name: 'Anna', email: 'user@mail.net', city: 'Казань', phone: '+7(947)-651-31-13', site: 'https://site.com'},
        ],*/
        selectedSort: '',
        searchQuery: '',
        thisUser: '',
        gotUser: '',
        totalPages: 2,
    }),
    getters: {
        sortByCity(state){

            return [...state.users].sort((a, b) => a[state.selectedSort]?.localeCompare(b[state.selectedSort])).filter(user => user.city.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setGotUser (state, response) {
            state.gotUser = response
        },
        showUser(state, user) {
            state.thisUser = user.id;
        },
        setUsers(state, users) {
            state.users = users;
        },
        pushUser (state, data) {
            state.users.push(data);
        },
        setSortUsers(state, selectedSort) {
            state.selectedSort = selectedSort;
            if (selectedSort === 'toAlph') {
                state.users = state.users.sort((a, b) => a.name.localeCompare(b.name));
                state.selectedSort = ''
            } else if (selectedSort === 'reverseAlph') {
                state.users = state.users.sort((a, b) => a.name.localeCompare(b.name)).reverse();
                state.selectedSort = ''
            }
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
        addUser (state, data) {
            state.users.push(data);
        },
        removeUser (state, user){
            state.users = state.users.filter(u => u.id !== user.id);
        },
    },
    actions: {
        async fetchUsers({state, commit}) {
            try {
                const response = await axios.get('/api/users', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                commit('setUsers', response.data);
                state.totalPages = Math.ceil(this.users.length / 5);
            } catch (e) {
                console.log(e)
            }
        },
        async fetchUser({state,commit}) {
            try {
                const response = await axios.get(`/api/users/${state.thisUser}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                commit('setGotUser', response.data);
                state.thisUser = '';
            } catch (e) {
                console.log(e)
            }
        },
    },
    namespaced: true
}