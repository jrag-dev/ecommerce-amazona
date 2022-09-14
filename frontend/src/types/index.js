
// Types para el context de productos 

export const OBTENER_PRODUCTOS = 'OBTENER_PRODUCTOS';
export const OBTENER_PRODUCTOS_SUCCESS = 'OBTENER_PRODUCTOS_SUCCESS';
export const OBTENER_PRODUCTOS_ERROR = 'OBTENER_PRODUCTOS_ERROR';

export const OBTENER_PRODUCTO = 'OBTENER_PRODUCTO';
export const OBTENER_PRODUCTO_SUCCESS = 'OBTENER_PRODUCTO_SUCCESS';
export const OBTENER_PRODUCTO_ERROR = 'OBTENER_PRODUCTO_ERROR';


// Types para el context de carrito de compras 

export const MOSTRAR_CARRITO = 'MOSTRAR_CARRITO';
export const OCULTAR_CARRITO = 'OCULTAR_CARRITO';
export const AGREGAR_PRODUCTO_CARRITO = 'AGREGAR_PRODUCTO_CARRITO';
export const UPDATE_PRODUCTO_CARRITO = 'UPDATE_PRODUCTO_CARRITO';
export const ELIMINAR_PRODUCTO_CARRITO = 'ELIMINAR_PRODUCTO_CARRITO';
export const CALCULAR_TOTAL_CARRITO = 'CALCULAR_TOTAL_CARRITO';


// Types para el context de autenticacion

export const LOGIN_EXITOSO = 'LOGIN_EXITOSO';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const REGISTRO_EXITOSO = 'REGISTRO_EXITOSO';
export const REGISTRO_ERROR = 'REGISTRO_ERROR';
export const CERRAR_SESION = 'CERRAR_SESION';


// Types para el context de shipping

export const GUARDAR_SHIPPING_ADDRESS = 'GUARDAR_SHIPPING_ADDRESS';

// Types para el metodo de pago

export const GUARDAR_METODO_PAGO = 'GUARDAR_METODO_PAGO';

// Types para el context de create order

export const CREATE_ORDER = 'CREATE_ORDER';
export const OBTENER_ORDERS = 'OBTENER_ORDERS';

// Types para mostrar la order actual

export const GUARDAR_ORDER_ACTUAL = 'GUARDAR_ORDER_ACTUAL';

// Types para la sescion de pagos con paypal
export const GUARDAR_CLIENTE_ID = 'GUARDAR_CLIENTE_ID';
export const PAY_REQUEST = 'PAY_REQUEST';
export const PAY_SUCCESS = 'PAY_SUCCESS';
export const PAY_FAIL = 'PAY_FAIL';
export const PAY_RESET = 'PAY_RESET';