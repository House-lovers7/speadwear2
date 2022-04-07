export const DELETE_RELATIONSHIP = 'DELETE_RELATIONSHIP'
export const FETCH_RELATIONSHIPS = 'FETCH_RELATIONSHIP'
export const CREATE_RELATIONSHIP = 'CREATE_RELATIONSHIP'

export const deleteRelationshipAction = (relationship) => {
  return {
    type: 'DELETE_RELATIONSHIP',
    payload: relationship,
  }
}

export const fetchRelationshipsAction = (relationships) => {
  return {
    type: 'FETCH_RELATIONSHIPS',
    payload: relationships,
  }
}

export const createRelationshipAction = (relationship) => {
  return {
    type: 'CREATE_RELATIONSHIP',
    payload: relationship,
  }
}
