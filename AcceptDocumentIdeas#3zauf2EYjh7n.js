export class AcceptDocumentIdeas {
    static id = "3zauf2EYjh7n";
    static description = "Replaces the current main ideas with the generated ones";

    constructor() {

    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            await document.setMainIdeas(context.ideas.map((documentIdea) => system.UI.sanitize(documentIdea)));
            await system.factories.updateDocument(system.space.id, document);
            this.return(context.ideas);
        } catch (e) {
            this.fail(e);
        }
    }
}