export class AcceptDocumentIdeas {
    static description = "Replaces the current main ideas with the generated ones";

    constructor() {

    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            await document.setMainIdeas(context.ideas.map((documentIdea) => assistOS.UI.sanitize(documentIdea)));
            await assistOS.factories.updateDocument(assistOS.space.id, document);
            this.return(context.ideas);
        } catch (e) {
            this.fail(e);
        }
    }
}