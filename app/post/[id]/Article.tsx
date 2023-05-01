import React, { useState } from 'react'
import { Editor } from '@tiptap/react'
import EditorMenuBar from './EditorMenuBar'
import { EditorContent } from '@tiptap/react'
import { RocketLaunchIcon } from '@heroicons/react/24/solid'

type Props = {
	contentError: string;
	editor: Editor | null
	isEditable: boolean;
	title: string;
	setContent: (content: string) => void;
}

const Article = ({ isEditable, editor, contentError, title, setContent }: Props) => {
	const [role, setRole] = useState<string>('I am a helpful assistant');

	if (!editor) {
		return null;
	}

	const postAiContent = async () => {
		editor.chain().focus().setContent("Generating Ai Content. Please wait...").run();
		const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/openai`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				role: role
			})
		})

		const data = await response.json();

		editor.chain().focus().setContent(data.content).run();
		setContent(data.content)
	};

	return (
		<article className='text-wh-500 leading-8'>
			{/* AI GENERATOR */}
			{isEditable && (
				<div className='border-2 rounded-md bg-wh-50 mb-3 p-3'>
					<h4 className='m-0 p-0 '>Generate AI Content</h4>
					<p className='my-1 p-0 text-xs mb-3'>What type of writer do you want?</p>
					<div className='flex gap-5 justify-between items-center'>
						<input
							className='border-2 rounded-md bg-wh-50 mb-3 px-3 py-1 w-full'
							placeholder='Role'
							onChange={(e) => setRole(e.target.value)}
							value={role}
						/>
						<button type='button' onClick={postAiContent}>
							<RocketLaunchIcon
								className='h-8 w-8 text-accent-orange hover:text-wh-300'
							/>
						</button>
					</div>
				</div>
			)}
			<div className={isEditable ? "border-2 rounded-md bg-wh-50 p-3" : "w-full max-w-full"}>
				{isEditable && (
					<>
						<EditorMenuBar editor={editor} />
						<hr className='border-1 mt-2 mb-5' />

					</>
				)}
				<EditorContent editor={editor} />
			</div>
			{contentError && <p className='mt-1 text-red-500'>{contentError}</p>}
		</article >
	)
}

export default Article