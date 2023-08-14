const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
const customerInfo = (order) => {
      // Adicione abaixo as informações necessárias.
      const deliveryPerson = order.order.delivery.deliveryPerson
      const nome = order.name
      const phoneNumber = order.phoneNumber
      const address = order.address.street
      const number = order.address.number
      const apartartament = order.address.apartment
    console.log(`Olá ${deliveryPerson}, entrega para: ${nome}, Telefone: ${phoneNumber},
    R. ${address}, Nº: ${number}, AP: ${apartartament}`);  
};
  
customerInfo(order);
  
const orderModifier = (order) => {
      // Adicione abaixo as informações necessárias.
    const nome = order.name = 'Luiz Silva'
    const marguerita = Object.keys(order.order.pizza)[0]
    const pepperoni = Object.keys(order.order.pizza)[1]
    const drink = order.order.drinks.coke.type
    const payment = order.payment = 50
    const converted = payment.toFixed(2)
    console.log(`'Olá ${nome}, o total do seu pedido de ${marguerita}, ${pepperoni} e ${drink}
    é R$ ${converted}.';
   `);
  };
  
orderModifier(order);