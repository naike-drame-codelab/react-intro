import {Data, Data1} from '../App';

const ComponentC = () => {
  return (
    <Data.Consumer>
      {(name) => {
        return (
          <Data1.Consumer>
            {(age) => {
              return (
                <>
                  <h1>ComponentC</h1>
                  <h2>{name} - {age}</h2>
                </>
              )
            }}
          </Data1.Consumer>
        )}
      }
    </Data.Consumer>
  )
}

export default ComponentC