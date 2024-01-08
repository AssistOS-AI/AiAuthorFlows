export class UpdateDocumentMainIdeas {
    static id = "4hzFeMAy3Cjd";

    constructor() {
        this.name = "UpdateDocumentMainIdeas";
        this.description = "Updates the main ideas of a document";
    }

    async start(documentId, ideas) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            await document.setMainIdeas(ideas);
            this.return(ideas);
        } catch (e) {
            this.fail(e);
        }
    }
}