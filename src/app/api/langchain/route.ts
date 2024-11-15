
import { PromptTemplate } from '@langchain/core/prompts';
import { ChatOpenAI } from '@langchain/openai'
import { HttpResponseOutputParser } from 'langchain/output_parsers';
import { StreamingTextResponse, createStreamDataTransformer } from 'ai';


export async function POST(req: Request) {
    try {

        // Extract the `messages` from the body of the request
        const { messages } = await req.json();

        // Construct the prompt template with the messages from the request
        const prompt = PromptTemplate.fromTemplate("{messages}");

        console.log("propmpt: ", prompt);
        // Create an OpenAI model
        const model = new ChatOpenAI({
            apiKey: process.env.OPENAI_API_KEY,
            model: 'gpt-3.5-turbo',
            temperature: 0.8
        })


        // Create the parser
        const parser = new HttpResponseOutputParser();

        // Bind the prompt to model and parser
        const chain = prompt.pipe(model).pipe(parser);

         console.log("chain: ", chain);
        // Execute the chain and get the stream of responses from OpenAI
        const stream = await chain.stream({ messages })


        // Respond with the stream
        return new StreamingTextResponse(
            stream.pipeThrough(createStreamDataTransformer())
        )

    }
    catch (e){

        console.log(e);

    }

}