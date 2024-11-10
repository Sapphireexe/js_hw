// Создайте систему типов и интерфейсов для управления заказами в интернет-магазине.

// Создайте интерфейсы для:

//     - Product: товар с полями id (число), name (строка), price (число), и опциональным полем discount (число).
//     - Customer: клиент с полями id (число), name (строка), и email (строка).
//     - OrderItem: элемент заказа с полями product (тип Product), quantity (число).
//     - Order: заказ с полями id (число), customer (тип Customer), 
//       items (массив типа OrderItem), и опциональным полем status (литерал типа 'pending' | 'shipped' | 'delivered').
  
// Напишите функцию calculateTotal, которая принимает объект типа Order 
// и возвращает общую сумму заказа с учетом возможных скидок.

// Если у товара есть скидка, то она должна учитываться при расчете суммы.
// Сумма заказа вычисляется как сумма цен всех товаров, умноженная на количество каждого товара в заказе.

type Status = 'pending' | 'shipped' | 'delivered';

interface IProduct {
  id: number;
  name: string;
  price: number;
  discount?: number;
}

interface ICustomer {
  id: number;
  name: string;
  email: string;
}

interface IOrderItem {
  product: IProduct;
  quantity: number;
}

interface IOrder {
  id: number;
  customer: ICustomer;
  items: IOrderItem[];
  status?: Status;
}

function calculateTotal(order: IOrder): number {
  const totalPrice = order.items.reduce((result, item, index, array) => {
    if ('discount' in item.product && typeof item.product.discount === 'number') {
      result += (item.product.price - item.product.price * item.product.discount / 100) * item.quantity;
    } else {
      result += item.product.price * item.quantity;
    }
    return result;
  }, 0);
  return totalPrice;
}

const product1: IProduct = {
  id: 1,
  name:'Phone',
  price: 2000,
}

const product2: IProduct = {
  id: 2,
  name: 'Laptop',
  price: 1000,
  discount: 10,
}

const customer: ICustomer = {
  id: 1,
  name: 'Jesse',
  email: 'hotmail@mail.com',
}

const orderItem1: IOrderItem = {
  product: product1,
  quantity: 2,
}

const orderItem2: IOrderItem = {
  product: product2,
  quantity: 4,
}

const order: IOrder = {
  id: 1,
  customer,
  items: [orderItem1, orderItem2],
  status: 'pending',
}

console.log(calculateTotal(order)); // 7600