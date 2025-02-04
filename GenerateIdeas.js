export class GenerateIdeas {
    static description = "Generates n ideas based on a hint";

    constructor() {
    }

    async start(context, personality) {
        let prompt = `Please suggest an idea based on the following topic: "${context.topic}". You will play the role of this personality: 
        "${personality.name}", which has the following characteristics: "${personality.description}". You will respond in such a way that it 
        encapsulates the distinct essence of this character. Return only the idea without quotation marks.`;
        let maxTokens;
        let variants;
        if (!maxTokens) {
            maxTokens = 20;
        }
        let llm = assistOS.space.getLLM();
        let alternativeTitles = await llm.brainstorm(prompt, variants, maxTokens);
        try {
            this.return(JSON.parse(alternativeTitles));
        } catch (e) {
            this.fail(e);
        }
    }
}