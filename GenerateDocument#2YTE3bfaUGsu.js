export class GenerateDocument {
    static id = "2YTE3bfaUGsu";
    static description = "Generates a whole document based on: a title, a topic, number of chapters";

    constructor() {
    }

    async start(title, topic, chaptersCount, personalityId, maxTokens) {
        let personalityPrompt;

        if (personalityId) {
            let personality = webSkel.currentUser.space.getPersonality(personalityId);
            personalityPrompt = `Step into the shoes of ${personality.name}, a character known for their distinctive traits: ${personality.description}. Your mission is to respond to the following prompt in such a way that it encapsulates the distinct essence of this character. Don't reiterate ${personality.name}'s traits in your answer. `;
        }

        this.setDefaultValues();
        this.setIntelligenceLevel(3);
        let schema = await this.generateSchema(title, topic, chaptersCount, personalityPrompt);
        let chapters = await this.generateChapters(schema, personalityPrompt);
        let mainIdeas = await this.generateMainIdeas(chapters, personalityPrompt);
        let abstract = await this.generateAbstract(mainIdeas, personalityPrompt);
        await this.addDocument(title, topic, chapters, mainIdeas, abstract);
    }

    async generateSchema(title, topic, chaptersCount, personalityPrompt) {
        const documentSchemaPrompt = `${personalityPrompt || ""}Please generate a schema for a document. The topic of this document is ${topic} and it should have ${chaptersCount} chapters. The title is ${title}. The schema should have the following format: {\"title\": \"Title of the document\",\"chapters\": [${this.countChapters(chaptersCount)}]}`;

        function countChapters(chaptersCount) {
            let chapters = '';
            for (let i = 0; i < chaptersCount; i++) {
                chapters += `{\"title\": \"Chapter ${i} title\",\"mainIdeas\": [\"Chapter ${i} idea 1\", \"Chapter ${i} idea 2\", ..., \"Chapter ${i} idea n\"]}`;
                if (i <= chaptersCount) {
                    chapters += ', ';
                }
            }
            return chapters;
        }

        let schema = await this.request(documentSchemaPrompt);
        try {
            return JSON.parse(schema);
        } catch (e) {
            this.fail(e);
        }
    }

    async generateChapters(schema, personalityPrompt) {
        let generatedChapters = [];
        let previousChapters;

        for (let i = 0; i < schema.chapters.length; i++) {
            if (i > 0) {
                const includedAttributes = ['title', 'mainIdeas'];
                let minimizedChapters = generatedChapters.map(obj => {
                    // Using object destructuring and filter to keep only specified attributes
                    return Object.fromEntries(
                        Object.entries(obj).filter(([key]) => includedAttributes.includes(key))
                    );
                });
                previousChapters = `Use a logical flow in your generation and continue your writing flow using these previous chapters and their main ideas:${JSON.stringify(minimizedChapters)}.`;
            }

            let generateChapterPrompt = `${personalityPrompt || ""}Please generate a chapter that is strictly related to these main ideas: ${JSON.stringify(schema.chapters[i].mainIdeas)} and this title:${schema.chapters[i].title}. ${previousChapters || ""} The chapter should have the following structure:{\"title\":\"Chapter Title\", \"mainIdeas\":[\"paragraph 1 summary\", \"paragraph 2 summary\", ... , \"paragraph n summary\"], \"paragraphs\":[{text:\"paragraph 1 text\", mainIdea:\"paragraph 1 summary\"}, {text:\"paragraph 2 text\", mainIdea:\"paragraph 2 summary\"}, ... {text:\"paragraph n text\", mainIdea:\"paragraph n summary\"}]}.`;

            let response = await this.request(generateChapterPrompt);
            try {
                generatedChapters.push(JSON.parse(response));
            } catch (e) {
                this.fail(e);
            }
        }

        return generatedChapters;
    }

    async generateMainIdeas(chapters, personalityPrompt) {
        let mainIdeas = [];
        for (let chapter of chapters) {
            let prompt = `${personalityPrompt || ""}Please summarize these ideas: ${JSON.stringify(chapter.mainIdeas)} into a single idea. Return only the idea`;
            let response = await this.request(prompt);
            mainIdeas.push(response);
        }
        return mainIdeas;
    }

    async generateAbstract(mainIdeas, personalityPrompt) {
        let prompt = `${personalityPrompt || ""}Please create an abstract for a document that has these main ideas: ${JSON.stringify(mainIdeas)}. Return only the abstract text`;
        return await this.request(prompt);
    }

    async addDocument(title, topic, chapters, mainIdeas, abstract) {
        let documentData = {
            title: title,
            topic: topic,
            chapters: chapters,
            mainIdeas: mainIdeas,
            abstract: abstract
        };

        await webSkel.currentUser.space.addDocument(documentData);
    }
}