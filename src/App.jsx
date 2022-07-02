import { useState } from 'react';
import { textVide } from 'text-vide';
function App() {
  const [text, setText] = useState('');
  const [fixation, setFixation] = useState(1);
  const [resultText, setResultText] = useState('');

  const handleGenerate = (e) => {
    e.preventDefault();
    const textVideResult = textVide(text, { fixationPoint: fixation });

    setResultText(textVideResult);
  };

  return (
    <div className='text-center'>
      <h1 className='text-5xl font-black mt-4'>Bionic Reading</h1>

      <form className='mt-10'>
        <div>
          <textarea
            onChange={(e) => setText(e.target.value)}
            className='border-2 max-h-56 w-[20em] sm:w-[40em] bg-gray-50 rounded-lg placeholder:text-center placeholder:pt-2 p-2 resize-none'
            name='main-text'
            id='main-text'
            value={text}
            // cols='60'
            rows='30'
            placeholder='Enter text here...'
          ></textarea>
        </div>
        <div className='space-x-4'>
          <select
            name='fixation-length'
            className='px-4 py-2 bg-gray-100  rounded-lg'
            id='fixation-length'
            defaultValue='3'
            onChange={(e) => {
              setFixation(e.target.value);
            }}
          >
            <option value='5'>Lowest</option>
            <option value='4'>Low</option>
            <option value='3'>Medium</option>
            <option value='2'>High</option>
            <option value='1'>Highest</option>
          </select>
          <button
            onClick={handleGenerate}
            className='bg-slate-800 text-white px-4 py-2 mt-2 rounded-lg focus:ring-2 focus:ring-purple-300'
            type='submit'
          >
            Generate
          </button>
        </div>
      </form>

      <div
        className=' mt-10 px-8 py-8 rounded-lg max-w-5xl mx-auto leading-8 text-lg bg-gray-50 '
        dangerouslySetInnerHTML={{ __html: resultText }}
      ></div>
    </div>
  );
}

export default App;
