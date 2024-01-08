export class UpdateDocumentTitle {
    static id = "4My96443fbG4";

    constructor() {
        this.name = "UpdateDocumentTitle";
        this.description = "Updates the title of a document";
    }

    async start(documentId, title) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            await document.updateTitle(title);
            this.return(title);
        } catch (e) {
            this.fail(e);
        }
    }
}