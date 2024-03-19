export class GenerateEmptyChapters {
    static id = "4eN7RkfHwzqt";
    static description = "Generates only the titles based on some ideas.";

    constructor() {
    }

    start(ideas, documentId, prompt, chaptersNr) {
        let document = system.space.getDocument(documentId);
        this.prompt = `${prompt || "Please generate chapter titles based on the following array of ideas"}: "${ideas}". Generate ${chaptersNr || "3"}. The response should have the following structure: {"titles":["chapter title 1", "chapter title 2", ... ,"chapter title n"]}.`;
        this.setDefaultValues();
        this.setIntelligenceLevel(3);
        this.execute(document);
    }

    async execute(document) {
        let titles = await this.request(this.prompt);
        try {
            let titlesObj = JSON.parse(titles);
            await document.addEmptyChapters(titlesObj);
        } catch (e) {
            this.fail(e);
        }
        this.return(titles);
    }
}