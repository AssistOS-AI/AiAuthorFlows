export class SuggestDocumentTitles {
    static id = "3AeXXLeDVgQM";

    constructor() {
        this.name = "SuggestDocumentTitles";
        this.description = "Generates n document titles";
    }

    async start(documentId, prompt, titlesNr, maxTokens) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            this.prompt = `${prompt || "Please suggest a title for a document, take into consideration these aspects of the document"}: "${JSON.stringify(document.simplifyDocument())}". Return only the title without quotation marks.`;
            this.setDefaultValues();
            this.setIntelligenceLevel(3);
            this.execute(titlesNr, maxTokens);
        } catch (e) {
            this.fail(e);
        }
    }

    async execute(titlesNr, maxTokens) {
        let alternativeTitles = await this.brainstorm(this.prompt, titlesNr, maxTokens);
        try {
            JSON.parse(alternativeTitles);
        } catch (e) {
            this.fail(e);
        }
        this.return(alternativeTitles);
    }
}