export class GenerateIdeas {
    static id = "5FbELFMbvKga";
    static description = "Generates n ideas based on a hint";

    constructor() {
    }

    async start(context, personality) {
        this.prompt = `Please suggest an idea based on the following topic: "${context.topic}". You will play the role of this personality: 
        "${personality.name}", which has the following characteristics: "${personality.description}". You will respond in such a way that it 
        encapsulates the distinct essence of this character. Return only the idea without quotation marks.`;

        this.execute(context.variants, context.maxTokens);
    }

    async execute(variants, maxTokens) {
        if (!maxTokens) {
            maxTokens = 20;
        }

        let alternativeTitles = await this.brainstorm(this.prompt, variants, maxTokens);

        try {
            JSON.parse(alternativeTitles);
        } catch (e) {
            this.fail(e);
        }

        this.return(alternativeTitles);
    }
}