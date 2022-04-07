export const FETCH_BEGIN = 'FETCH_BEGIN'
export const fetchBeginAction = () => {
  return {
    type: 'FETCH_BEGIN',
    payload: {
      loading: true,
      error: null,
    },
  }
}

export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const fetchSuccessAction = (response) => {
  return {
    type: 'FETCH_SUCCESS',
    payload: {
      loading: false,
      error: null,
      response,
      users: '',
    },
  }
}

export const FETCH_FAILURE = 'FETCH_FAILURE'
export const fetchFailureAction = (error) => {
  return {
    type: 'FETCH_FAILURE',
    payload: {
      loading: false,
      error,
    },
  }
}

export const POST_BEGIN = 'POST_BEGIN'
export const postBeginAction = () => {
  return {
    type: 'POST_BEGIN',
    payload: {
      loading: true,
      error: null,
    },
  }
}

export const POST_SUCCESS = 'POST_SUCCESS'
export const postSuccessAction = (response) => {
  return {
    type: 'POST_SUCCESS',
    payload: {
      loading: false,
      error: null,
      users: '',
      response,
    },
  }
}

export const POST_FAILURE = 'POST_FAILURE'
export const postFailureAction = (error) => {
  return {
    type: 'POST_FAILURE',
    payload: {
      loading: false,
      error,
    },
  }
}

export const PUT_BEGIN = 'PUT_BEGIN'
export const putBeginAction = () => {
  return {
    type: 'PUT_BEGIN',
    payload: {
      loading: true,
      error: null,
    },
  }
}

export const PUT_SUCCESS = 'PUT_SUCCESS'
export const putSuccessAction = (response) => {
  return {
    type: 'PUT_SUCCESS',
    payload: {
      loading: false,
      error: null,
      users: '',
      response,
    },
  }
}

export const PUT_FAILURE = 'PUT_FAILURE'
export const putFailureAction = (error) => {
  return {
    type: 'PUT_FAILURE',
    payload: {
      loading: false,
      error,
    },
  }
}

export const DELETE_BEGIN = 'DELETE_BEGIN'
export const deleteBeginAction = () => {
  return {
    type: 'DELETE_BEGIN',
    payload: {
      loading: true,
      error: null,
    },
  }
}

export const DELETE_SUCCESS = 'DELETE_SUCCESS'
export const deleteSuccessAction = (response) => {
  return {
    type: 'DELETE_SUCCESS',
    payload: {
      loading: false,
      error: null,
      users: '',
      response,
    },
  }
}

export const DELETE_FAILURE = 'DELETE_FAILURE'
export const deleteFailureAction = (error) => {
  return {
    type: 'DELETE_FAILURE',
    payload: {
      loading: false,
      error,
    },
  }
}
