import React from 'react';

const App = () => {
  const relatives = ['John', 'Emily', 'David', 'Sarah', 'Michael'];

  return (
    <div>
      <h1>Relative List</h1>
      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
