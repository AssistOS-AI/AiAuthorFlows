export class DeleteChapter {
    static id = "2BDPLeWZ2cuQ";

    constructor() {
        this.name = "DeleteChapter";
        this.description = "Deletes a chapter";
    }

    async start(documentId, chapterId) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            await document.deleteChapter(chapterId);
            this.return(chapterId);
        } catch (e) {
            this.fail(e);
        }
    }
}