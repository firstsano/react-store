export default class CashVoucher {
    constructor()
    {
        this.items = {};
    }

    get list()
    {
        let list = [];
        for(let name in this.items) {
            list.push({
                name,
                cost: item.cost,
                quantity: item.quantity,
                totalCost: (item.quantity * item.cost)
            });
        }
        return list;
    }

    addItem(name, cost, quantity = 1)
    {
        if (this.items[name]) return;
        this.items[name] = { cost, quantity };
    }

    removeItem(name)
    {
        delete this.items[name];
    }

    incrementItem(name, quantity = 1)
    {
        if (!this.items[name]) return;
        this.items[name].quantity += quantity;
    }

    decrementItem(name, quantity = 1)
    {
        const item = this.items[name];
        if (!item) return;
        item.quantity -= quantity;
        if (item.quantity <= 0) this.removeItem(name);
    }
}
