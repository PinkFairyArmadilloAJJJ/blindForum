// /**
//  * ************************************
//  *
//  * @module  Comment Reducer
//  * @author
//  * @date
//  * @description reducer for comment data
//  *
//  * ************************************
//  */

//  import * as type from '../constants/actionTypes.js';

//  const initialState = {
//    totalMarkets: 0,
//    totalCards: 0,
//    marketList: [],
//    lastMarketId: 10000,
//    newLocation: '',
//  };
 
//  const marketsReducer = (state = initialState, action) => {
//    let marketList;
//    let lastMarketId;
//    let newMarket;
//    let totalMarkets;
//    let newLocation;
 
//    // type and types and  
//    switch (action.type) {
//      case types_enum.ADD_MARKET:
//        // increment lastMarketId
//        lastMarketId = state.lastMarketId + 1;
       
 
//        // create the new market object from provided data
//        // what goes in here?
//        newMarket = { 
//          marketId: lastMarketId, // last Market Id plus 1
//          locationName: state.newLocation,
//          cardsList: [],
//          //percentOfTotal: 0
//        };
 
//        // push the new market onto a copy of the market list
//        marketList = state.marketList.slice();
//        marketList.push(newMarket);
 
//        //update value oftTotalMarkets
//        totalMarkets = marketList.length; 
 
//        // return updated state
//        return {
//          ...state,
//          marketList: marketList,
//          lastMarketId: lastMarketId,
//          totalMarkets: totalMarkets,
//          newLocation: '',
//        };
//      case types_enum.SET_NEW_LOCATION: 
//      // update newLocation to store
//        newLocation = action.payload;
 
//        return {...state,
//          newLocation: newLocation,
//        };
 
//      case types_enum.ADD_CARD:
 
//      case types_enum.DELETE_CARD: 
 
//      default: {
//        return state;
//      }
//    }
//  };
 
//  export default marketsReducer;
 