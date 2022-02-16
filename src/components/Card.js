const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();
// const todoTitle = 'Hello todo app';
// const todoDesc = 'Todo description';

function Card(props) {
  console.log(props);

  const { titleText, descText } = props;
  return (
    <div className='card'>
      <h3 className='cardTitle'>{titleText}</h3>
      <p className='cardDesc'>{descText}</p>

      <p className='cardFooter'>
        {dateName + '/' + monthName + '/' + currentYear}
      </p>
    </div>
  );
}

export default Card;
