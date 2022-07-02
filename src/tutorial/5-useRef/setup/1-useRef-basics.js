import React, {useState, useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const [names, setNames] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setNames([...names, refContainer.current.value]);
    refContainer.current.value = ""
  };

  useEffect(() => {
    // console.log(refContainer.current);
    refContainer.current.focus();
    // console.log(articleContainer.current.innerText)
  });

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
        </div>
        <button type='submit'>submit</button>
      </form>
      {
        names ?
        names.map(
          (item, index) => {
            return <div className='item' key={index}>
              {item}
            </div>
          }
        )
        : 
        (
          <div className='item'>
            No item to show..
          </div>
        )
      }
    </>
  );
};

export default UseRefBasics;
