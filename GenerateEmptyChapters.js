export class GenerateEmptyChapters {
    static description = "Generates only the titles based on some ideas.";

    constructor() {
    }

    async start(context) {
        let document = assistOS.space.getDocument(context.documentId);
        let prompt = `${context.prompt || "Please generate chapter titles based on the following array of ideas"}: "${context.ideas}". Generate ${context.chaptersNr || "3"}. The response should have the following structure: {"titles":["chapter title 1", "chapter title 2", ... ,"chapter title n"]}.`;
        let llm = assistOS.space.getLLM();
        let titles = await llm.request(prompt);
        try {
            let titlesObj = JSON.parse(titles);
            await document.addEmptyChapters(titlesObj);
            this.return(titlesObj);
        } catch (e) {
            this.fail(e);
        }
    }
}