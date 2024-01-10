export class GenerateChapters {
    static id = "2Piuqy6QAW4s";
    static description = "Generates chapters based on some ideas";

    constructor() {
    }

    async start(ideas, documentId, prompt, chapterNr) {
        let document = webSkel.currentUser.space.getDocument(documentId);
        this.prompt = `${prompt || "Please generate chapters based on the following array of ideas"}: "${ideas}" and "${document.getMainIdeas()}". Generate ${chapterNr || "3"} chapters. Please put all chapters in an array. A chapter should have the following structure:\n{\"title\":\"Chapter Title\", \"mainIdeas\":[\"paragraph 1 summary\", \"paragraph 2 summary\", ..., \"paragraph n summary\"], \"paragraphs\":[{\"text\":\"paragraph 1 text\", \"mainIdea\":\"paragraph 1 summary\"}, {\"text\":\"paragraph 2 text\", \"mainIdea\":\"paragraph 2 summary\"}, ..., {\"text\":\"paragraph n text\", \"mainIdea\":\"paragraph n summary\"}]}.`;

        this.setDefaultValues();
        this.setIntelligenceLevel(3);
        this.execute(document, ideas);
    }

    async execute(document, ideas) {
        let chapters = await this.request(this.prompt);
        try {
            let chaptersObj = JSON.parse(chapters);
            await document.addChapters(chaptersObj);
        } catch (e) {
            this.fail(e);
        }
        this.return(chapters);
    }
}