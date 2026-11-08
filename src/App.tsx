import { LoadStatus, type PageType } from './types/homework';

function App() {
  const page1: PageType = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: new Date('2021-01-01'),
      updateAt: new Date('2021-05-01'),
    },
  };

  console.log('Status:', LoadStatus.READY);
  console.log('Page 1:', page1);

  return (
    <div >
    </div>
  );
}

export default App;