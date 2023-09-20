const chainer = (editor, fn) => editor.chain().focus()[fn]().run();

const toggleBold = editor => chainer(editor, 'toggleBold');
const toggleItalic = editor => editor.chain().focus().toggleItalic().run();
const toggleStrike = editor => editor.chain().focus().toggleStrike().run();
const toggleHeading1 = editor => editor.chain().focus().toggleHeading({ level: 1 }).run();
const toggleHeading2 = editor => editor.chain().focus().toggleHeading({ level: 2 }).run();
const toggleHeading3 = editor => editor.chain().focus().toggleHeading({ level: 3 }).run();





export { 
    toggleBold, 
    toggleItalic, 
    toggleStrike, 
    toggleHeading1, 
    toggleHeading2, 
    toggleHeading3 };