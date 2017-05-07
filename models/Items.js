import _ from 'lodash';
import Item from './Item';
let instance = null;

class Items {
    constructor() {
        if (instance) {
            return instance
        }

        instance = this;
        this.items = [];
        this.length = 0;
    }

    add(item, type) {
        return new Promise((resove, reject) => {
            const newItem = new Item(item, type);
            const {isValid, message } = newItem.validate();
            console.log('isValid*************', isValid)
            console.log('newItem*************', newItem)
            if (isValid) {
                this.items.push(newItem)
                this.length += 1;
                reslove();
            } else {
                reject(message)
            }
        })
    }

    map(func) {
        return this.items.map(func);
    }

    last() {
        return _.last(this.items);
    }
}

export default Items;