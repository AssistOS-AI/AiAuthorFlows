export class GenerateParagraphs {
    static id = "UikYz7YD2wCm";
    static description = "Generates paragraphs based on some ideas";

    constructor() {
    }

    async start(ideas, documentId, chapterId, prompt, paragraphsNr) {
        let document = system.space.getDocument(documentId);
        let chapter = document.getChapter(chapterId);
        this.prompt = `${prompt || "Please generate paragraphs based on the following array of ideas"}: "${ideas}\" and "${chapter.getMainIdeas()}". Generate ${paragraphsNr || "3"}. The response should have the following structure: {"paragraphs":[{"text":"paragraph 1 text", "mainIdea": "summary of paragraph 1"}, {"text":"paragraph 2 text", "mainIdea": "summary of paragraph 2"}, ... , {"text":"paragraph n text", "mainIdea": "summary of paragraph n"}]}.`;
        this.setDefaultValues();
        this.setResponseFormat("json_object");
        this.setIntelligenceLevel(3);
        this.execute(document, chapter);
    }
    async execute(document, chapter){
        let paragraphs = await this.request(this.prompt);
        try{
            let paragraphsObj = JSON.parse(paragraphs);
            await chapter.addParagraphs(paragraphsObj.paragraphs);
            await system.factories.updateDocument(system.space.id, document);
        }catch(e){
            this.fail(e);
        }
        this.return(paragraphs);
    }
}