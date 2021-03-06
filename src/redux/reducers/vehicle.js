import Swal from "sweetalert2";
import {
  BOOK_VEHICLE,
  BOOK_VEHICLE_DECREASE_QTY,
  BOOK_VEHICLE_INCREASE_QTY,
  CLEAR_BOOKED_VEHICLE,
  CLEAR_DELETED_VEHICLE_PAYMENT,
  CLEAR_SEARCH_VEHICLE_LIST,
  CLEAR_VEHICLE_DETAILS,
  CLEAR_VEHICLE_PAYMENT,
  CLEAR_VEHICLE_RESERVATION,
  DATA_TO_SEARCH_VEHICLE,
  DELETE_VEHICLE_PAYMENT,
  FINISH_PAYMENT,
  GET_VEHICLE_DETAILS,
  GET_VEHICLE_LIST_EVERY_TYPE,
  GET_VEHICLE_PAYMENT_DETAILS,
  GET_VEHICLE_PAYMENT_LIST,
  LOAD_MORE_SEARCH_VEHICLE_LIST,
  LOAD_MORE_VEHICLE_PAYMENT_LIST,
  MAKE_VEHICLE_PAYMENT,
  MAKE_VEHICLE_RESERVATION,
  RESERVATION_QTY_DECREASE,
  RESERVATION_QTY_INCREASE,
  RETURN_VEHICLE,
  SAVE_VEHICLE_DETAILS,
  SEARCH_VEHICLE,
} from "../types/vehicle";

const initialState = {
  bookedVehicle: null,
  vehicleDetails: null,
  reservationData: null,

  paymentData: null,
  paymentLoading: false,
  paymentError: null,

  paymentList: null,
  listPagination: null,

  paymentDeleteLoading: false,
  paymentDeleteError: null,
  paymentDeleteSuccess: null,

  paymentFinishLoading: false,
  paymentFinishError: null,
  paymentFinishSuccess: null,

  returningVehicleLoading: false,
  returningVehicleError: null,
  returningVehicleSuccess: null,

  listVehiclesOfEveryTypes: [],
  listVehiclesOfEveryTypesError: null,

  searchVehicleList: [],
  searchVehicleListPagination: {},
  searchVehicleLoading: false,
  loadMoreLoading: false,
  searchVehicleError: null,

  dataToSearchVehicle: {},

  error: null,
};

const vehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_VEHICLE: {
      state.bookedVehicle = action.payload;
      return { ...state };
    }

    case BOOK_VEHICLE_INCREASE_QTY: {
      if (state.bookedVehicle.qty < state.bookedVehicle.limit) {
        state.bookedVehicle.qty += 1;
      }
      return { ...state };
    }

    case BOOK_VEHICLE_DECREASE_QTY: {
      if (state.bookedVehicle.qty > 1) {
        state.bookedVehicle.qty -= 1;
      }
      return { ...state };
    }

    case CLEAR_BOOKED_VEHICLE: {
      state.bookedVehicle = null;
      return { ...state };
    }

    case GET_VEHICLE_DETAILS + "_PENDING": {
      state.vehicleDetails = null;
      return { ...state };
    }

    case GET_VEHICLE_DETAILS + "_FULFILLED": {
      const { results } = action.payload.data;
      state.vehicleDetails = results;
      return { ...state };
    }

    case GET_VEHICLE_DETAILS + "_REJECTED": {
      const { message } = action.payload.response.data;
      state.vehicleDetails = null;
      state.error = message;
      return { ...state };
    }

    case SAVE_VEHICLE_DETAILS: {
      state.vehicleDetails = action.payload;
      return { ...state };
    }

    case CLEAR_VEHICLE_DETAILS: {
      state.vehicleDetails = null;
      return { ...state };
    }

    case MAKE_VEHICLE_RESERVATION: {
      state.reservationData = action.payload;
      return { ...state };
    }

    case RESERVATION_QTY_INCREASE: {
      if (state.reservationData.qty < state.reservationData.limit) {
        state.reservationData.qty += 1;
      }
      return { ...state };
    }

    case RESERVATION_QTY_DECREASE: {
      if (state.reservationData.qty > 1) {
        state.reservationData.qty -= 1;
      }
      return { ...state };
    }

    case CLEAR_VEHICLE_RESERVATION: {
      state.reservationData = null;
      return { ...state };
    }

    case MAKE_VEHICLE_PAYMENT + "_PENDING": {
      state.paymentLoading = true;
      state.paymentError = null;
      state.paymentData = null;
      return { ...state };
    }

    case MAKE_VEHICLE_PAYMENT + "_FULFILLED": {
      const { results } = action.payload.data;
      state.paymentData = results;
      state.paymentError = null;
      state.paymentLoading = false;
      return { ...state };
    }

    case MAKE_VEHICLE_PAYMENT + "_REJECTED": {
      const { message } = action.payload.response.data;
      state.paymentError = message;
      state.paymentData = null;
      state.paymentLoading = false;
      return { ...state };
    }

    case CLEAR_VEHICLE_PAYMENT: {
      state.paymentData = null;
      state.paymentFinishSuccess = null;
      state.returningVehicleSuccess = null;
      state.error = null;
      return { ...state };
    }

    case GET_VEHICLE_PAYMENT_LIST + "_PENDING": {
      state.listPagination = null;
      state.paymentList = null;
      state.paymentLoading = true;
      state.paymentError = null;
      return { ...state };
    }

    case GET_VEHICLE_PAYMENT_LIST + "_FULFILLED": {
      const { results, pageInfo } = action.payload.data;
      state.listPagination = pageInfo;
      state.paymentList = results;
      state.paymentError = null;
      state.paymentLoading = false;
      return { ...state };
    }

    case GET_VEHICLE_PAYMENT_LIST + "_REJECTED": {
      const { message } = action.payload.response.data;
      state.paymentError = message;
      state.paymentList = null;
      state.listPagination = null;
      state.paymentLoading = false;
      return { ...state };
    }

    case LOAD_MORE_VEHICLE_PAYMENT_LIST + "_PENDING": {
      state.paymentLoading = true;
      state.paymentError = null;
      return { ...state };
    }

    case LOAD_MORE_VEHICLE_PAYMENT_LIST + "_FULFILLED": {
      const { results, pageInfo } = action.payload.data;
      state.listPagination = pageInfo;
      state.paymentList = [...state.paymentList, ...results];
      state.paymentError = null;
      state.paymentLoading = false;
      return { ...state };
    }

    case LOAD_MORE_VEHICLE_PAYMENT_LIST + "_REJECTED": {
      const { message } = action.payload.response.data;
      state.paymentError = message;
      state.paymentLoading = false;
      return { ...state };
    }

    case GET_VEHICLE_PAYMENT_DETAILS + "_PENDING": {
      state.paymentLoading = true;
      state.paymentError = null;
      state.paymentData = null;
      return { ...state };
    }

    case GET_VEHICLE_PAYMENT_DETAILS + "_FULFILLED": {
      const { results } = action.payload.data;
      state.paymentData = results;
      state.paymentError = null;
      state.paymentLoading = false;
      return { ...state };
    }

    case GET_VEHICLE_PAYMENT_DETAILS + "_REJECTED": {
      const { message } = action.payload.response.data;
      state.paymentError = message;
      state.paymentData = null;
      state.paymentLoading = false;
      return { ...state };
    }

    case DELETE_VEHICLE_PAYMENT + "_PENDING": {
      state.paymentDeleteLoading = true;
      state.paymentDeleteError = null;
      state.paymentDeleteSuccess = null;
      return { ...state };
    }

    case DELETE_VEHICLE_PAYMENT + "_FULFILLED": {
      const { results } = action.payload.data;
      state.paymentDeleteLoading = false;
      state.paymentDeleteError = null;
      state.paymentDeleteSuccess = results;
      return { ...state };
    }

    case DELETE_VEHICLE_PAYMENT + "_REJECTED": {
      const { message } = action.payload.response.data;
      state.paymentDeleteLoading = false;
      state.paymentDeleteError = message;
      Swal.fire({
        title: "Failed",
        text: `Can't delete this payment because ${message}`,
        icon: "error",
      });
      state.paymentDeleteSuccess = null;
      return { ...state };
    }

    case CLEAR_DELETED_VEHICLE_PAYMENT: {
      state.paymentDeleteSuccess = null;
      return { ...state };
    }

    case FINISH_PAYMENT + "_PENDING": {
      state.paymentFinishLoading = true;
      state.paymentFinishError = null;
      state.paymentFinishSuccess = null;
      return { ...state };
    }

    case FINISH_PAYMENT + "_FULFILLED": {
      const { results } = action.payload.data;
      state.paymentFinishSuccess = results;
      state.paymentData = results;
      state.paymentFinishError = null;
      state.paymentFinishLoading = false;
      Swal.fire({
        title: "Success",
        text: "Payment has been paid",
        icon: "success",
      });
      return { ...state };
    }

    case FINISH_PAYMENT + "_REJECTED": {
      const { message } = action.payload.response.data;
      state.paymentFinishError = message;
      state.paymentFinishSuccess = null;
      state.paymentFinishLoading = false;
      return { ...state };
    }

    case RETURN_VEHICLE + "_PENDING": {
      state.returningVehicleLoading = true;
      state.returningVehicleError = null;
      state.returningVehicleSuccess = null;
      return { ...state };
    }

    case RETURN_VEHICLE + "_FULFILLED": {
      const { results } = action.payload.data;
      state.returningVehicleSuccess = results;
      state.paymentData = results;
      state.returningVehicleError = null;
      state.returningVehicleLoading = false;
      Swal.fire({
        title: "Success",
        text: "Vehicle has been returned",
        icon: "success",
      });
      return { ...state };
    }

    case RETURN_VEHICLE + "_REJECTED": {
      const { message } = action.payload.response.data;
      state.returningVehicleError = message;
      state.returningVehicleSuccess = null;
      state.returningVehicleLoading = false;
      return { ...state };
    }

    case SEARCH_VEHICLE + "_PENDING": {
      state.searchVehicleLoading = true;
      state.searchVehicleError = null;
      state.searchVehicleList = [];
      return { ...state };
    }

    case SEARCH_VEHICLE + "_FULFILLED": {
      const { results, pageInfo } = action.payload.data;
      state.searchVehicleList = results;
      state.searchVehicleListPagination = pageInfo;
      state.searchVehicleError = null;
      state.searchVehicleLoading = false;
      return { ...state };
    }

    case SEARCH_VEHICLE + "_REJECTED": {
      const { message } = action.payload.response.data;
      state.searchVehicleList = [];
      state.searchVehicleListPagination = {};
      state.searchVehicleError = message;
      Swal.fire({
        title: "Failed",
        text: `Can't search vehicle because ${message}`,
        icon: "error",
      });
      state.searchVehicleLoading = false;
      return { ...state };
    }

    case LOAD_MORE_SEARCH_VEHICLE_LIST + "_PENDING": {
      state.loadMoreLoading = true;
      state.searchVehicleError = null;
      return { ...state };
    }

    case LOAD_MORE_SEARCH_VEHICLE_LIST + "_FULFILLED": {
      const { results, pageInfo } = action.payload.data;
      state.searchVehicleList = [...state.searchVehicleList, ...results];
      state.searchVehicleListPagination = pageInfo;
      state.searchVehicleError = null;
      state.loadMoreLoading = false;
      return { ...state };
    }

    case LOAD_MORE_SEARCH_VEHICLE_LIST + "_REJECTED": {
      const { message } = action.payload.response.data;
      state.searchVehicleError = message;
      state.loadMoreLoading = false;
      return { ...state };
    }

    case CLEAR_SEARCH_VEHICLE_LIST: {
      state.searchVehicleList = [];
      state.searchVehicleListPagination = {};
      state.searchVehicleError = null;
      state.searchVehicleLoading = false;
      return { ...state };
    }

    case DATA_TO_SEARCH_VEHICLE: {
      state.dataToSearchVehicle = action.payload;
      return { ...state };
    }

    case GET_VEHICLE_LIST_EVERY_TYPE + "_PENDING": {
      state.searchVehicleLoading = true;
      state.listVehiclesOfEveryTypesError = null;
      state.listVehiclesOfEveryTypes = [];
      return { ...state };
    }

    case GET_VEHICLE_LIST_EVERY_TYPE + "_FULFILLED": {
      const results = action.payload;

      console.log(action.payload.data);
      state.listVehiclesOfEveryTypes = results.map(({ data }) => data.results);
      state.searchVehicleLoading = false;
      state.listVehiclesOfEveryTypesError = null;
      return { ...state };
    }

    case GET_VEHICLE_LIST_EVERY_TYPE + "_REJECTED": {
      const { message } = action.payload.response.data;
      state.listVehiclesOfEveryTypes = [];
      state.listVehiclesOfEveryTypesError = message;
      Swal.fire({
        title: "Failed",
        text: `Can't get vehicle list because ${message}`,
        icon: "error",
      });
      state.searchVehicleLoading = false;
      return { ...state };
    }

    default: {
      return state;
    }
  }
};

export default vehicleReducer;
