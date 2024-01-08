export class GenerateIdeas {
    static id = "5FbELFMbvKga";

    constructor() {
        this.name = "GenerateIdeas";
        this.description = "Generates n ideas based on a hint";
    }

    async start(topic, personalityId, variants, maxTokens) {
        if (personalityId) {
            let personality = webSkel.currentUser.space.getPersonality(personalityId);
            this.prompt = `Please suggest an idea based on the following topic: "${topic}". You will play the role of this personality: 
        "${personality.name}", which has the following characteristics: "${personality.description}". You will respond in such a way that it 
        encapsulates the distinct essence of this character. Return only the idea without quotation marks.`;
        } else {
            this.prompt = `Please suggest an idea based on the following topic: "${topic}". Return only the idea without quotation marks.`;
        }

        this.setDefaultValues();
        this.setIntelligenceLevel(3);
        this.execute(variants, maxTokens);
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