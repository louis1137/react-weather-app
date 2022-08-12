import React from 'react'

const cssLoading = {
    color : '#000000',
    fontSize : '72px',
    fontWeight : '700',
};

const Loading = () => {
  return (
    <div className='loading' style={cssLoading}>Loading...</div>
  )
}

export default Loading