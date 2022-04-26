import React, { useCallback, useEffect, useState } from 'react'
import { TextInput } from '.'
import { makeStyles } from '@material-ui/styles'

const CommentWindow = (props) => {
  const [description, setDescription] = useState('')

  const useStyles = makeStyles({
    modalContent: {
      background: 'white',
      padding: '50px',
      borderRadius: '3px',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  const classes = useStyles()
  const closeModal = () => {
    props.setShowModal(false)
  }

  const inputDescription = useCallback(
    (event) => {
      setDescription(event.target.value)
    },
    [setDescription]
  )

  return (
    <>
      {props.showFlag ? ( // showFlagがtrueだったらModalを表示する
        <div className={classes.overlay}>
          <div className={classes.modalContent}>
            <TextInput
              fullWidth={true}
              label={'ちょっとひとこと'}
              multiline={true}
              required={false}
              onChange={inputDescription}
              value={description}
              type={'text'}
            />
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      ) : (
        <></> // showFlagがfalseの場合はModalは表示しない
      )}
    </>
  )
}

export default CommentWindow
