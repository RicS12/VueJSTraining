const state = {
    funds: 10000,
    //stocks of our portfolio
    stocks: []
};

const mutations = {
    'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
        //find() will return either true or false
        const record = state.stocks.find(element => element.id == stockId);
        //if there is a record, update 
        if (record) {
            record.quantity += quantity;
        } else {
            //if there is no record, push
            state.stocks.push({
                id: stockId,
                quantity: quantity,
            });
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    }
};

const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds(state) {
        return state.funds;
    }
}

export default {
    state, 
    mutations,
    getters,
    actions
}