export class DeleteDocument {
    static id = "28c1jVcpcdcT";

    constructor() {
        this.name = "DeleteDocument";
        this.description = "Deletes a document";
        this.tags = ["presenters", "agents", "documents"];
    }

    async start(documentId) {
        try {
            await webSkel.currentUser.space.deleteDocument(documentId);
            this.return(documentId);
        } catch (e) {
            this.fail(e);
        }
    }
}