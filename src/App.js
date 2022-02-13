import Text from './components/composition/Text';
import Emoji from './components/composition/Emoji';
import Bracket from './components/composition/Bracket';

function App() {
  // const quantites = [1,2,3]

  <Emoji>
    {({ addEmoji }) => (
      <Bracket>
        {({ addBracket }) => (
          <Text addEmoji={addEmoji} addBracket={addBracket} />
        )}
      </Bracket>
    )}
  </Emoji>;
}

export default App;
