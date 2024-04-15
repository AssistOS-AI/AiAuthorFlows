export class SuggestDocumentTitles {
    static id = "3AeXXLeDVgQM";
    static description = "Generates n document titles";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            this.prompt = `${context.prompt || "Please suggest a title for a document, take into consideration these aspects of the document"}: "${JSON.stringify(document.simplifyDocument())}". Return only the title without quotation marks.`;
            this.execute(context.titlesNr, context.maxTokens);
        } catch (e) {
            this.fail(e);
        }
    }

    async execute(titlesNr, maxTokens) {
        let alternativeTitles = await this.brainstorm(this.prompt, titlesNr, maxTokens);
        try {
            this.return(JSON.parse(alternativeTitles));
        } catch (e) {
            this.fail(e);
        }
    }
}