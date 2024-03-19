export class AcceptDocumentIdeas {
    static id = "3zauf2EYjh7n";
    static description = "Replaces the current main ideas with the generated ones";

    constructor() {

    }

    async start(documentId, ideas) {
        try {
            let document = system.space.getDocument(documentId);
            await document.setMainIdeas(ideas.map((documentIdea) => system.UI.sanitize(documentIdea)));
            await system.factories.updateDocument(system.space.id, document);
            this.return(ideas);
        } catch (e) {
            this.fail(e);
        }
    }
}