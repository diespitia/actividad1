import localforage from 'localforage';

localforage.config({
    name: 'inventarios',
    storeName: 'desarrollos'
});

const getItems = async () => {
    const items = [];
    await localforage.iterate((value, key) => {
        items.push({ key, value });
    });
    return items;
};
const addItem = async (key, value) => {
    await localforage.setItem(key, value);
};
const removeItem = async (key) => {
    await localforage.removeItem(key);
};

export { getItems, addItem, removeItem };
