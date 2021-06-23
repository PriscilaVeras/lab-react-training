function Greetings(props) {
  let saudacao = '';

  if (props.lang === 'de') {
    saudacao = `Hallo ${props.children}`;
  } else if (props.lang === 'en') {
    saudacao = `Hello ${props.children}`;
  } else if (props.lang === 'es') {
    saudacao = `Hola ${props.children}`;
  } else if (props.lang === 'fr') {
    saudacao = `Bonjour ${props.children}`;
  }

  return <div className="container-greetings ">{saudacao}</div>;
}

export default Greetings;
