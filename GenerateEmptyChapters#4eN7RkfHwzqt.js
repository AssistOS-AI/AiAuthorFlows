export class GenerateEmptyChapters {
    static id = "4eN7RkfHwzqt";
    static description = "Generates only the titles based on some ideas.";

    constructor() {
    }

    start(context) {
        let document = system.space.getDocument(context.documentId);
        this.prompt = `${context.prompt || "Please generate chapter titles based on the following array of ideas"}: "${context.ideas}". Generate ${context.chaptersNr || "3"}. The response should have the following structure: {"titles":["chapter title 1", "chapter title 2", ... ,"chapter title n"]}.`;
        this.execute(document);
    }

    async execute(document) {
        let titles = await this.request(this.prompt);
        try {
            let titlesObj = JSON.parse(titles);
            await document.addEmptyChapters(titlesObj);
            this.return(titlesObj);
        } catch (e) {
            this.fail(e);
        }
    }
}