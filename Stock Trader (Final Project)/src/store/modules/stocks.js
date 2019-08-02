import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    //OVERWRITING STOCKS
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    //RANDOMIZING STOCKS WHEN ENDING THE DAY
    'RND_STOCKS' (state) {

    }
};

const actions = {
    buyStock: ({commit}, order) => {
        commit();
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}