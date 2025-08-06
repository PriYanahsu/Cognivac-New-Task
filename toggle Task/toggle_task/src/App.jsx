import React from 'react'
import './App.css'
import DeshBoard from './Pages/DeshBoard.jsx'
import DeshBoardTwo from './Pages/DeshBoardTwo.jsx'
import { useState } from 'react'

const App = () => {

  const [isFullAllOneChecked, setFullAllOneChecked] = useState(false);
  const [isViewOnlyAllOneChecked, setViewOnlyAllOneChecked] = useState(false);
  const [isFullAllTwoChecked, setFullAllTwoChecked] = useState(false);
  const [isViewOnlyAllTwoChecked, setViewOnlyAllTwoChecked] = useState(false);

  const isParentCheckedFullAll = isFullAllOneChecked && isFullAllTwoChecked;
  const isParentCheckedViewAll = isViewOnlyAllOneChecked && isViewOnlyAllTwoChecked;

  const fullOneChecked = (checked) => setFullAllOneChecked(checked);
  const viewAllOneChecked = (checked) => setViewOnlyAllOneChecked(checked);
  console.log(isParentCheckedFullAll, '............................ app');

  const fullTwoChecked = (checked) => setFullAllTwoChecked(checked);
  const viewAllTwoChecked = (checked) => setViewOnlyAllTwoChecked(checked);



  const CheckedValue = (name, checked) => {
    if (name === 'ViewOnly-All') {
      setViewOnlyAllOneChecked(checked);
      setViewOnlyAllTwoChecked(checked);
      if (isFullAllOneChecked) setFullAllOneChecked(false);
      if (isFullAllTwoChecked) setFullAllTwoChecked(false);
    }
    else if (name === 'Full-All') {
      setFullAllOneChecked(checked);
      setFullAllTwoChecked(checked);
      if (isViewOnlyAllTwoChecked) setViewOnlyAllOneChecked(false);
      if (isViewOnlyAllTwoChecked) setViewOnlyAllTwoChecked(false);
    }
  }

  return (
    <>
      <div className='Parent'>
        <input
          type="checkbox"
          name="Full-All"
          id='FullAll'
          checked={isParentCheckedFullAll}
          onChange={(e) => CheckedValue(e.target.name, e.target.checked)}
        /> H Full All
        {' | '}
        <input
          type="checkbox"
          name="ViewOnly-All"
          id="ViewAll"
          checked={isParentCheckedViewAll}
          onChange={(e) => CheckedValue(e.target.name, e.target.checked)}
        /> H ViewOnly All
      </div>
      <div>
        <DeshBoard
          isParentCheckedFullAll={isParentCheckedFullAll}
          isParentCheckedViewAll={isParentCheckedViewAll}

          fullOneChecked={fullOneChecked}
          viewAllOneChecked={viewAllOneChecked}
        />
        <DeshBoardTwo
          isParentCheckedFullAll={isParentCheckedFullAll}
          isParentCheckedViewAll={isParentCheckedViewAll}

          fullTwoChecked={fullTwoChecked}
          viewAllTwoChecked={viewAllTwoChecked}
        />
      </div>
    </>
  )
}

export default App;
