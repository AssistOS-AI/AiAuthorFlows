export class AcceptDocumentIdeas {
    static id = "3zauf2EYjh7n";

    constructor() {
        this.name = "AcceptDocumentIdeas";
        this.description = "Replaces the current main ideas with the generated ones";
    }

    async start(documentId, ideas) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            await document.setMainIdeas(ideas.map((documentIdea) => sanitize(documentIdea)));
            await documentFactory.updateDocument(webSkel.currentUser.space.id, document);
            this.return(ideas);
        } catch (e) {
            this.fail(e);
        }
    }
}