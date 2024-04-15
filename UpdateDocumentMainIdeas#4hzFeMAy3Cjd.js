export class UpdateDocumentMainIdeas {
    static id = "4hzFeMAy3Cjd";
    static description = "Updates the main ideas of a document";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            await document.setMainIdeas(context.ideas);
            this.return(context.ideas);
        } catch (e) {
            this.fail(e);
        }
    }
}