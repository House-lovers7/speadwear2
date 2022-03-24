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

export const POST_SUCCESS = 'FETCH_SUCCESS'
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

export const POST_FAILURE = 'FETCH_FAILURE'
export const postFailureAction = (error) => {
  return {
    type: 'POST_FAILURE',
    payload: {
      loading: false,
      error,
    },
  }
}

export const PATCH_BEGIN = 'POST_BEGIN'
export const patchBeginAction = () => {
  return {
    type: 'PATCH_BEGIN',
    payload: {
      loading: true,
      error: null,
    },
  }
}

export const PATCH_SUCCESS = 'FETCH_SUCCESS'
export const patchSuccessAction = (response) => {
  return {
    type: 'PATCH_SUCCESS',
    payload: {
      loading: false,
      error: null,
      users: '',
      response,
    },
  }
}

export const PATCH_FAILURE = 'FETCH_FAILURE'
export const patchFailureAction = (error) => {
  return {
    type: 'PATCH_FAILURE',
    payload: {
      loading: false,
      error,
    },
  }
}

export const DELETE_BEGIN = 'POST_BEGIN'
export const deleteBeginAction = () => {
  return {
    type: 'DELETE_BEGIN',
    payload: {
      loading: true,
      error: null,
    },
  }
}

export const DELETE_SUCCESS = 'FETCH_SUCCESS'
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

export const DELETE_FAILURE = 'FETCH_FAILURE'
export const deleteFailureAction = (error) => {
  return {
    type: 'DELETE_FAILURE',
    payload: {
      loading: false,
      error,
    },
  }
}

export const ADD_USER = 'ADD_USER'
export const addUserAction = () => {
  return {
    type: 'ADD_USER',
    payload: {},
  }
}

export const REMOVE_USER = 'REMOVE_USER'
export const removeUserAction = () => {
  return {
    type: 'REMOVE_USER',
    payload: {},
  }
}
