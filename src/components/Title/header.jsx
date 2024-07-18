/* eslint-disable react/prop-types */
function CustomHeader(props){

  const {title} = props;

  return(
    <>
      <h1 style={{color: '#343aeb'}}>{title}</h1>
    </>
  )
}

export default CustomHeader