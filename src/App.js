import React from 'react';
import Checkbox from './components/Checkbox';


function App() {
  const handleCheckboxChange = (isChecked) => {
      console.log('체크 상태:', isChecked);
  };

  return (
      <div>
          <h1>체크박스 컴포넌트</h1>
          <Checkbox label="동의2합니다" onChange={handleCheckboxChange} />
      </div>
  );
}
export default App; 
