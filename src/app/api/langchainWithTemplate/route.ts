
import { Message as VercelChatMessage, StreamingTextResponse, createStreamDataTransformer, streamToResponse } from 'ai';
import { HttpResponseOutputParser } from 'langchain/output_parsers';
import { PromptTemplate } from '@langchain/core/prompts';
import { ChatOpenAI} from'@langchain/openai'

const formatMessage = (message : VercelChatMessage) =>{ return `${message.role}: ${message.content}`}

const TEMPLATE = `You are a best doctor in the world and give diagnosis based on the user symptoms. And make sure that you dont answer anything except health related queries.
current conversation:{chat_History}
user:{input}
assistant:`

export async function POST(req: Request) {


    try {
        const { messages } = await req.json();

        const formatPreviousMessages = messages.slice(0, -1).map(formatMessage);

        const CurrentMessageContent = messages.at(-1).content;

        const prompt = PromptTemplate.fromTemplate(TEMPLATE);

        const model = new ChatOpenAI({
            apiKey:process.env.OPENAI_API_KEY,
            model: 'gpt-3.5-turbo',
            temperature: 0.8,
            verbose: true,
        })


        const parser = new HttpResponseOutputParser();
        const chain = prompt.pipe(model).pipe(parser);

        const stream = await chain.stream(
            {
                chat_History: formatPreviousMessages.join('\n'),
                input: CurrentMessageContent
            });

        return new StreamingTextResponse(
            stream.pipeThrough(createStreamDataTransformer())
        )

    }
    catch(e) {

        console.log(e);
    }



}