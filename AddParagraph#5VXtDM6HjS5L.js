export class AddParagraph {
    static id = "5VXtDM6HjS5L";

    constructor() {
        this.name = "AddParagraph";
        this.description = "Adds a new paragraph to a chapter";
        this.tags = ["presenters", "agents", "documents"];
    }

    async start(documentId, chapterId) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            let newParagraphId = webSkel.getService("UtilsService").generateId();
            let position = chapter.paragraphs.length;

            if (webSkel.currentUser.space.currentParagraphId) {
                position = chapter.getParagraphIndex(webSkel.currentUser.space.currentParagraphId) + 1;
            }

            await chapter.addParagraph({ id: newParagraphId, text: "" }, position);
            await documentFactory.updateDocument(webSkel.currentUser.space.id, document);

            webSkel.currentUser.space.currentParagraphId = newParagraphId;
            webSkel.currentUser.space.currentChapterId = chapter.id;

            this.return(chapterId);
        } catch (e) {
            this.fail(e);
        }
    }
}