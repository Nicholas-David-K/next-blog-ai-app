import { NextResponse } from 'next/server';
import { Configuration, CreateChatCompletionResponse, OpenAIApi } from 'openai';
import { AxiosResponse } from 'axios';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
    try {
        const { title, role } = await request.json();

        const aiResponse: AxiosResponse<CreateChatCompletionResponse> =
            await openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'user',
                        // content: `Create small blog post with html tags based on this title ${title}`,
                        content: `Create a 3 line blog post with html tags based on this title ${title}`,
                    },
                    {
                        role: 'system',
                        content: `${
                            role || 'I am a helpful assistant'
                        }. Write with html tags`,
                    },
                ],
            });

        return NextResponse.json(
            {
                content: aiResponse.data.choices[0].message?.content,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('request error', error);
        NextResponse.json({ error: 'Error updating post' }, { status: 500 });
    }
}
