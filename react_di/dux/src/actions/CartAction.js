// 필요한 기능들 (아이템 추가, 삭제, 모두 삭제)

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM'
const REMOVE_ALL = 'REMOVE_ALL';
const ADJUST_ITEM_QTY = 'ADJUST_ITEM_QTY';

const addToCart = (item) => ({ type: ADD_TO_CART, item });
const removeItem = (id) => ({ type: REMOVE_ITEM, id });
const removeAll = () => ({ type: REMOVE_ALL });
const adjustQty = (id) => ({ type: ADJUST_ITEM_QTY, id });

export default {
    ADD_TO_CART,
    REMOVE_ITEM,
    REMOVE_ALL,
    addToCart,
    removeItem,
    removeAll,
    adjustQty
};