import { actions } from 'actions/modal.action';

const INITIAL_STATE = {
  template: '',
  visibility: false
};

const openModal = (state, data) => {
  return {
    ...state,
    template: data,
    visibility: true
  };
};

const closeModal = (state) => {
  return {
    ...state,
    template: null,
    visibility: false
  };
};

export default function reducer(state = INITIAL_STATE, { data, type }) {
  switch (type) {
    case actions.OPEN_MODAL: {
      return openModal(state, data);
    }
    case actions.CLOSE_MODAL: {
      return closeModal(state, data);
    }
    default: {
      return state;
    }
  }
}