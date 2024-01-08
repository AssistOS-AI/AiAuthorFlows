export class UpdateAbstract {
    static id = "2ppoRvQFM8cG";

    constructor() {
        this.name = "UpdateAbstract";
        this.description = "Updates the abstract of a document";
    }

    async start(documentId, text) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            await document.updateAbstract(text);
            this.return(documentId);
        } catch (e) {
            this.fail(e);
        }
    }
}