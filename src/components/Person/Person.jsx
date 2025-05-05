export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const isMarriedMale = isMarried && sex === 'm';
  const isMarriedFemale = isMarried && sex === 'f';
  const isSingle = !isMarried;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      {isMarriedMale && (
        <p className="Person__partner">{partnerName} is my wife</p>
      )}

      {isMarriedFemale && (
        <p className="Person__partner">{partnerName} is my husband</p>
      )}

      {isSingle && <p className="Person__partner">I am not married</p>}
    </section>
  );
};
