class Storage {
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(itemName) {
        this.items.push(itemName);
    }
    removeItem(itemName) {
        let isDeleted = false;
        for (const item of this.items) {
            if (item === itemName) {
                const index = this.items.indexOf(item);
                this.items.splice(index, 1);
                isDeleted = true;
            }
            if (this.items.indexOf(item) === this.items.length - 1 && !isDeleted) {
                console.log('Немає такого елемента. Перевірте чи правильно ви вказали назву');
            }
        }
    }
}

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]