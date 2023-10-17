import Title from './Title';
import ModuleDetails from './ModuleDetails';

function HelloWorld() {
  const calculateAge = (date: string) => {
    if (date.length === 10) {
      const year = `
      ${date[date.length
         - 4]}${date[date.length
             - 3]}${date[date.length
                 - 2]}${date[date.length - 1]}`;
      return Number(2023 - year);
    }
    window.alert('digite uma data no formato xx/xx/xxxx');
  };
  return (
    <div>
      <Title />
      <ModuleDetails />
      <h4>age: {calculateAge('31/10/1993')}</h4>
    </div>
  );
}

export default HelloWorld;
