export class UpdateAlternativeAbstract {
    static id = "2rp6msc7aLNB";

    constructor() {
        this.name = "UpdateAlternativeAbstract";
        this.description = "Updates an alternative abstract";
    }

    async start(documentId, abstractId, text) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            await document.updateAlternativeAbstract(abstractId, text);
            this.return(abstractId);
        } catch (e) {
            this.fail(e);
        }
    }
}