import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'

function App() {
  return (
    // <Card>
    // </Card>
    <>
      <Student name="Spongbob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      {/* <Button>

      </Button> */}
    </>
  );
}

export default App
