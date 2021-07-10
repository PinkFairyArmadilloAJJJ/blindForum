/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

/** dummy test case
const initialState = {
  totalMarkets: 2,
  totalCards: 4,
  marketList: [
    {
      marketId: 10001,
      marketLocation: 'Las Vegas',
      numCards: 1,
      percentCards: 25
    },
    {
      marketId: 10002,
      marketLocation: 'Atlanta',
      numCards: 3,
      percentCards: 75
    }
  ],
  lastMarketId: 10000,
  newLocation: ''
}; 
*/

import * as types from '../constants/actionTypes';

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 10000,
  newLocation: '',
};

const marketsReducer = (state = initialState, action) => {
  let marketList, newMarket, lastMarketId, totalMarkets, totalCards;
  switch (action.type) {
    case types.ADD_MARKET:
      // increment lastMarketId and totalMarkets counters
      lastMarketId = state.lastMarketId + 1;
      totalMarkets = state.totalMarkets + 1;
      // create new market component from provided data
      newMarket = {
        marketId: lastMarketId,
        marketLocation: state.newLocation,
        numCards: 0,
        percentCards: 0
      };
      // push the new market onto a copy of the market list
      marketList = state.marketList.slice();
      marketList.push(newMarket);
      // update state
      return {
        ...state,
        totalMarkets,
        lastMarketId,
        newLocation: state.newLocation,
        marketList,
      };

    case types.SET_NEW_LOCATION:
      return {
        ...state,
        newLocation: action.payload !== state.newLocation ? action.payload : state.newLocation,
      };
    
    case types.ADD_CARD:
      // extract market component where add button was clicked
      newMarket = state.marketList.filter((e) => e.marketId === action.payload).pop();
      // increment numCards and totalCards properties
      newMarket.numCards += 1;
      totalCards = state.totalCards + 1;
      // update percentage property for all cards for every add card operation
      marketList = state.marketList.map(market => {
        market.percentCards = totalCards > 0 ? Math.round(((market.numCards / totalCards) * (100 ** 2) + Number.EPSILON)) / 100 : 0;
        return market;
      });
      // reinserts current market component into marketList, 
      // using the key property to preserve the original ordering of the market components
      marketList[newMarket.key] = newMarket;
      // update state
      return {
        ...state,
        totalCards,
        marketList,
      };

    case types.DELETE_CARD:
      // extract market component where delete button was clicked
      newMarket = state.marketList.filter((e) => e.marketId === action.payload).pop();
      // a) updates totalCards value to reflect results of delete card operation.
      // b) ensures delete operation works only on markets with non-negative number of cards.
      // c) separate check for non-negativity of totalCards unnecessary,
      // as positive numCards value for any market is a necessary condition for non-negative totalCards.  
      totalCards = newMarket.numCards > 0 ? state.totalCards - 1 : state.totalCards;
      // ensures numCards property remains non-negative
      newMarket.numCards = newMarket.numCards > 0 ? newMarket.numCards - 1 : 0; 
      // update percentage property for all cards for every delete card operation
      marketList = state.marketList.map(market => {
        market.percentCards = totalCards > 0 ? Math.round(((market.numCards / totalCards) * (100 ** 2) + Number.EPSILON)) / 100 : 0;
        return market;
      });
      // reinserts current market component into marketList, 
      // using the key property to preserve the original ordering of the market components
      marketList[newMarket.key] = newMarket;
      // update state
      return {
        ...state,
        totalCards,
        marketList,
      };

    default: {
      return state;
    }
  }
};

export default marketsReducer;
