<script>
    import { onMount, onDestroy } from 'svelte';
    import { writable } from 'svelte/store';
    import { Editor } from '@tiptap/core';
    import StarterKit from '@tiptap/starter-kit';
    import Placeholder from '@tiptap/extension-placeholder'
    import FixedMenu from './FixedMenu.svelte';
    // import contentRes from './contentRes.js'
    
    export let content
    
    export const contentStore = writable(content);


    let element;
    let editor;
    let bubbleMenu;

    onMount(() => {
    editor = new Editor({
    element,
            extensions: [
            
            StarterKit,
            Placeholder.configure({
            placeholder: 'Tulis sesuatu 🤔💭 ... ',
        }),
    ], 
            content,
            onTransaction: () => {
                editor = editor;
            },
        });
        editor.on('update', ({ editor }) => {
            console.log('L', editor.getHTML());
            content = editor.getHTML();                    
        });
    });

    onDestroy(() => {
        editor.destroy();
    });
  </script>
  
  <div class="wrapper max-w-full w-[100%]">
      <FixedMenu {editor} />
      
      <div name="field" class="element-wrapper max-w-full textarea textarea-bordered h-48 resize-none rounded-t-none" bind:this={element}/>
  </div>
  <br>
  {#if editor}
  <pre class="json-output">
      {JSON.stringify(editor.getJSON(), null, 2)}
  </pre>
  <br>
  <div class="html-output">
      {editor.getHTML()}
  </div>
  <br>
  <!-- <div class="store-output border border-1 border-black">
      {@html ($contentStore)}
  </div> -->
  {/if}
  
  <style>

      .element-wrapper {
          flex: 1 1 0%;
          resize: both;
          overflow: auto;
      }
      
      .element-wrapper :global(p:first-of-type) {
      margin-top: 0;
      }
      
      .element-wrapper :global(p:last-of-type) {
      margin-bottom: 0;
      }
      
      .element-wrapper > :global(.ProseMirror) {
      outline: 0;
      height: 100%;
      }
      
      .json-output,
      .html-output {
      max-height: 200px;
          overflow: hidden;
          overflow-y: auto;
          border: 1px solid #ccc;
      }
  </style>