'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function Editor() {
    const editor = useEditor({
        editorProps: {
            attributes: {
                style: "padding-left 56px; padding-right: 56px;",
                class: "prose prose-lg max-w-none outline-none print:border-0 bg-white border border-[#c7c7c7] print:border-b-0 flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 pl-14 cursor-text",
            },
            // editable: true,
            // autoFocus: true,
            // placeholder: 'Start typing...',
            // spellCheck: true,
        },
        extensions: [StarterKit],
        content: `<h2>Hello, world!</h2>`,
    })

    return (
        <div className="size-full overflow-x-auto bg-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible">

            <div className={"min-w-max flex justify-center w-[816px] py-4 print:p-0 mx-auto print:w-full print:min-w-0"}>
                <EditorContent editor={editor} />
            </div>

        </div>
    )
}