import React from 'react'
import test from '../hooks/test'

export default function TestComponenet() {

    const {
        data: todos,
        loading: todosLoading,
        error: todosApiError,
    } = test('https://jsonplaceholder.typicode.com/todos')
    
    return (
      <div>
        <h3>Todos List Of Products</h3>
        <hr />

        {todosApiError == null ? (
          //react fragmentaion <> </>
          <> 
            {todosLoading == true ? (
              <h2>Loading....</h2>
            ) : (
              <ul>
                {todos?.map(function(value, index) {
                  return <li key={index}>{value.title}</li>;
                })}
              </ul>
            )}
          </>
        ) : (
          <p>{todosApiError}</p>
        )}
      </div>
    );
          
        
}
