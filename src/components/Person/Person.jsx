export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>

    {'age' in person && <p className="Person__age">I am {person.age}</p>}

    {person.isMarried && person.sex === 'm' && (
      <p className="Person__partner">Natasha is my wife</p>
    )}

    {person.isMarried && person.sex === 'f' && (
      <p className="Person__partner">Maksym is my husband</p>
    )}

    {!person.isMarried && <p className="Person__partner">I am not married</p>}
  </section>
);
