const formatePrice = (price) =>
  price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

export default formatePrice;
