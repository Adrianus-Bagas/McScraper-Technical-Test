import openai from "./openai-config.mjs";

export async function search(url, page, size) {
    try{
        const completion = await openai.chat.completions.create({
            model: 'gpt-5',
            messages: [
                {
                    role:'user',
                    content:`Please scrape this website \n ${url} \n Extract it to get product name, product price, and product description. Construct it into JSON value using pagination with page ${page} and size ${size}.`
                }
            ]
        });
        return completion.choices[0].message.content;
    } catch(error){
        console.error("Search error :", error.message);
        throw error;
    };
}