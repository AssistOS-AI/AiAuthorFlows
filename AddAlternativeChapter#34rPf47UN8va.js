export class AddAlternativeChapter {

   static id = "34rPf47UN8va" 
   static description = "Adds an alternative chapter";

   constructor(dependencies) {
       const { Chapter } = dependencies;
       this.Chapter = Chapter;
   }
   async start(documentId, chapterId, alternativeChapter){
       let document = webSkel.currentUser.space.getDocument(documentId);
       let chapter = document.getChapter(chapterId)
       alternativeChapter.id=webSkel.appServices.generateId();
       for(let paragraph of chapterObj.paragraphs){
           paragraph.id=webSkel.appServices.generateId();
       }
       chapter.alternativeChapters.push(new this.Chapter(alternativeChapter));
       await documentFactory.updateDocument(webSkel.currentUser.space.id, document);
   }
}