const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
  {
    title: "The Dead Zone",
    author: "Stephen King",
    description:
      "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
    image: "https://books.google.com/books/publisher/content?id=DlWQDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71AjFoIeFzIX64yjadmoIqLZwYC7iePiQXRJq4FAOeL7Pwmy6JFhSSz54p_xlLfFQxLsiJhSFFZyCcFkuSXWJV7aMrh_CqvRFtcnpyoqC41P3nPOHWAjWDz_JKdiCdvCJmf7OFe",
    link: "https://books.google.com/books/about/The_Dead_Zone.html?id=DlWQDQAAQBAJ"
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    description:
      "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
    image: "https://books.google.com/books/content?id=3C-4dsIGlEgC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70EpIFlxxnsfezMGf47roYyM7rAf1NQGZupGvI23LpRO5WCDNDeWO8fVnRXgogm6nteSFFgvmmTGgjWfdwMsaHdixxlyVaJW3zin7sjzF7gjeLcJR5vqO_I-bzgCvvCuYRMnuM-",
    link: "https://books.google.com/books/about/Lord_of_the_Flies.html?id=3C-4dsIGlEgC"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description:
      "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world's major languages. Around 1 million copies are sold each year with total sales of more than 65 million books. The novel's protagonist Holden Caulfield has become an icon for teenage rebellion. The novel also deals with complex issues of innocence, identity, belonging, loss, and connection.",
    image: "https://books.google.com/books/content?id=2X0ttAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73A1RbqOW4u68RyvE0axG9NLEgreH_djtUYCrlkiLSfqjo99P854fy7Y0Cf32nqdvmSUnzE59DdsfyF1pa1LANPZtc3l-uETEkwyNOQ1C8eWPj-TtvvjZ3pU8stP0S3jQClqa_Z",
    link: "https://books.google.com/books/about/The_Catcher_in_the_Rye.html?id=j--EMdEfmbkC"
  },
  {
    title: "The Punch Escrow",
    author: "Tal M. Klein",
    description:
      "It's the year 2147. Advancements in nanotechnology have enabled us to control aging. We’ve genetically engineered mosquitoes to feast on carbon fumes instead of blood, ending air pollution. And teleportation has become the ideal mode of transportation, offered exclusively by International Transport―the world’s most powerful corporation, in a world controlled by corporations. Joel Byram spends his days training artificial-intelligence engines to act more human and trying to salvage his deteriorating marriage. He’s pretty much an everyday twenty-second century guy with everyday problems―until he’s accidentally duplicated while teleporting. Now Joel must outsmart the shadowy organization that controls teleportation, outrun the religious sect out to destroy it, and find a way to get back to the woman he loves in a world that now has two of him.",
    image: "https://books.google.com/books/publisher/content?id=yns3DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71wR43S79Wf2jLvCcq0CutuvZH0EnRlKFHvenKTkSu3mR0Znj2tUHs5FTJFG9atHenVhGjTWVGi5Z7GHvGM05t3d5tds1x5G4wdGSu4qfZKeft1nAD1nMWLoa9ATMlaw_pbikqj",
    link: "https://books.google.com/books/about/The_Punch_Escrow.html?id=yns3DwAAQBAJ"
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
