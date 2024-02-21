import PropTypes from 'prop-types';

function Greeting({ name, age, alert }) {


  return (
    <div>
      hey i am {name}, i am {age} years old
      <button className="bg-blue-500 text-white" onClick={()=>alert()}>click me </button>
    </div>
  );
}


Greeting.propTypes ={
  name : PropTypes.string.isRequired,
  age: PropTypes.number,
  alert: PropTypes.func
}


export default Greeting;
