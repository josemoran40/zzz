
import Editor from '@monaco-editor/react';
import { useRef } from 'react';
import './App.css';

function App() {

  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor; 
  }
  
  function showValue() {
    console.log(editorRef.current.getValue());
  }


  return (
    <div className='min-h-screen min-w-full bg-gray-500 flex justify-center items-center flex-col gap-10'>
      <div className='text-white text-2xl font-bold'>Mi primer editor de texto</div>
      <div className='max-w-[60rem] w-full flex flex-col gap-5'>
      <button onClick={showValue} className="p-2 bg-black text-white rounded-xl hover:scale-110 btn" style={{transition:'all 2seg'}}>Show value</button>
      <div className='w-full rounded-xl'>
     <Editor
       height="70vh"
       defaultLanguage="typescript"
       defaultValue="// some comment"
       onMount={handleEditorDidMount}
       className={'rounded-xl'}
       theme="vs-dark"
     />
     </div>
   </div>
    </div>
  );
}

export default App;
