import { addContainer } from "../addContainer";

export class Order {
    static instance = null;

    constructor() {
        if (!Order.instance) {
            Order.instance = this;
            this.element = document.createElement('section');
            this.element.classList.add('order');
            this.containerElement = addContainer(this.element, 'order__container');
            this.isMounted = false;
        }

        return Order.instance;
    }

    mount(parent) {
        if (this.isMounted) {
            return;
        }

        const orderWrapper = this.getOrderWrapper();

        this.containerElement.append(orderWrapper);

        parent.append(this.element);
        this.isMounted = true;
    }

    unmount() {
        this.element.remove();
        this.isMounted = false;
    }

    getOrderWrapper() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('order__wrapper');

        const content = document.createElement('div');
        content.classList.add('order__content');

        wrapper.append(content);

        const header = document.createElement('div');
        header.classList.add('order__header');

        const title = document.createElement('h2');
        title.classList.add('order__title');
        title.textContent = 'Заказ успешно размещен';

        const price = document.createElement('p');
        price.classList.add('order__price');
        price.textContent = '20 000 ₽';

        header.append(title, price);
        
        const orderNumber = document.createElement('p');
        orderNumber.classList.add('order__number');
        orderNumber.textContent = '№43435';

        const infoBlock = document.createElement('div');
        infoBlock.classList.add('order__info');

        const infoTitle = document.createElement('h3');
        infoTitle.classList.add('order__info-title');
        infoTitle.textContent = 'Данные доставки';

        const deliveryTable = this.getTable();

        const infoLink = document.createElement('a');
        infoLink.classList.add('order__btn');
        infoLink.href = '/';
        infoLink.textContent = 'На главную';

        infoBlock.append(infoTitle, deliveryTable, infoLink);

        content.append(header, orderNumber, infoBlock);

        this.price = price;
        this.orderNumber = orderNumber;

        return wrapper;
    }

    getTotalPrice(total) {
        this.price.textContent = `${total}`;
    }

    getOrderNumber(num) {
        this.orderNumber.textContent = `№${num}`;
    }

    getTable() {
        const table = document.createElement('table');
        table.classList.add('order__info-table', 'table');

        const userRow = document.createElement('tr');
        userRow.classList.add('table__row');

        userRow.innerHTML = `
            <td class="table__field">Получатель</td>
        `;
        const user = document.createElement('td');
        user.classList.add('table__value');
        user.textContent = 'Иванов Петр Александрович';

        userRow.append(user);

        const phoneRow = document.createElement('tr');
        phoneRow.classList.add('table__row');

        phoneRow.innerHTML = `
            <td class="table__field">Телефон</td>
        `;
        const phone = document.createElement('td');
        phone.classList.add('table__value');
        phone.textContent = '+7 (737) 346 23 00';

        phoneRow.append(phone);

        const mailRow = document.createElement('tr');
        mailRow.classList.add('table__row');

        mailRow.innerHTML = `
            <td class="table__field">E-mail</td>
        `;
        const mail = document.createElement('td');
        mail.classList.add('table__value');
        mail.textContent = 'Ivanov84@gmail.com';

        mailRow.append(mail);

        const adresseRow = document.createElement('tr');
        adresseRow.classList.add('table__row');

        adresseRow.innerHTML = `
            <td class="table__field">Адрес доставки</td>
        `;
        const adresse = document.createElement('td');
        adresse.classList.add('table__value');
        adresse.textContent = 'Москва, ул. Ленина, 21, кв. 33';

        adresseRow.append(adresse);

        const payRow = document.createElement('tr');
        payRow.classList.add('table__row');

        payRow.innerHTML = `
            <td class="table__field">Способ оплаты</td>
        `;
        const pay = document.createElement('td');
        pay.classList.add('table__value');
        pay.textContent = 'Картой при получении';

        payRow.append(pay);

        const deliveryRow = document.createElement('tr');
        deliveryRow.classList.add('table__row');

        deliveryRow.innerHTML = `
            <td class="table__field">Способ получения</td>
        `;
        const delivery = document.createElement('td');
        delivery.classList.add('table__value');
        delivery.textContent = 'Доставка';

        deliveryRow.append(delivery);


        table.append(userRow, phoneRow, mailRow, adresseRow, payRow, deliveryRow);

        this.user = user;
        this.phone = phone;
        this.mail = mail;
        this.adresse = adresse;
        this.pay = pay;
        this.delivery = delivery;

        return table;
    }

    getUser(user) {
        this.user.textContent  = `${user}`;
    }

    getPhone(tel) {
        this.phone.textContent  = `${tel}`;
    }

    getMail(email) {
        this.mail.textContent = `${email}`;
    }

    getAdresse(destination) {
        this.adresse.textContent = `${destination}`;
    }

    getPay(payment) {
        this.pay.textContent = `${payment}`;
    }
 
    getDelyvery(deliv) {
        this.delivery.textContent = `${deliv}`;
    }

};